---
name: windowvh
description: 解決行動裝置 Safari / Chrome toolbar 隱藏顯示造成 vh / dvh 版面跳動的標準做法。透過全域 `--windowVh` CSS 變數凍結進站當下的 `window.innerHeight`，搭配 CSS 改寫與 JS resize 解耦。Use when the user reports mobile layout jitter on scroll, mentions toolbar / address bar height changes, says `vh` / `dvh` is unstable on phones, or wants to apply this pattern to new pages / components.
---

# 行動裝置 Viewport Height 穩定化（windowvh）

針對 iOS Safari / Android Chrome 的瀏覽器 toolbar（網址列）在捲動時隱藏 / 顯示，導致 `window.innerHeight` 變動、使用 `vh` 單位的版面跳動的問題，本專案採「**進站抓一次 + 鎖定**」做法。

`dvh` 雖然語意正確，但本站需支援 iOS 14 / 舊 Android WebView 等不支援的環境，且需求是「**穩定不跳動**」而非追隨動態視口，所以一律走 `--windowVh` CSS 變數。

---

## 套用前先檢查

1. `app.vue` 是否已有 `updateWindowVh()` 與 `isMobileDevice()`（本專案已有，見 [基礎機制](#基礎機制-appvue)）。
2. `composables/useWindowVh.js` 是否存在（提供 `useWindowVhPx()`）。
3. 是否在 `/pages/ui/**`（內部系統頁）— 那裡**不要動**。

---

## 三層修法（依需求挑用）

### A. 基礎機制 `app.vue`

在 `<script setup>` 已具備以下結構：

```js
function isMobileDevice () {
  if (typeof navigator === 'undefined') { return false }
  const ua = navigator.userAgent || navigator.vendor || (typeof window !== 'undefined' && window.opera) || ''
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(String(ua))
}

let isMobile = false

function updateWindowVh () {
  if (typeof window === 'undefined') { return }
  const root = document.documentElement
  if (isMobile) {
    root.style.setProperty('--windowVh', `${window.innerHeight}px`)
  } else {
    root.style.setProperty('--windowVh', '100vh')
  }
}

function handleResize () {
  windowWidth.value = window.innerWidth
  if (!isMobile) { updateWindowVh() } // mobile 不重抓
}

function handleOrientationChange () {
  windowWidth.value = window.innerWidth
  updateWindowVh() // 旋轉才更新
}

onMounted(() => {
  isMobile = isMobileDevice()
  windowWidth.value = window.innerWidth
  updateWindowVh()
  // 首載 toolbar 可能未收齊，500ms 後且尚未捲動才補抓
  if (isMobile) {
    setTimeout(() => {
      if (window.scrollY === 0) { updateWindowVh() }
    }, 500)
  }
  window.addEventListener('resize', handleResize)
  window.addEventListener('orientationchange', handleOrientationChange)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('orientationchange', handleOrientationChange)
})
```

關鍵：**mobile 上 `resize` 不再重抓 `--windowVh`**，只在 `orientationchange` 更新。

### B. CSS 字面值改寫

統一語法：`calc(var(--windowVh, 100vh) * <倍率>)`。
Tailwind arbitrary value 內**不可含未轉義空白**，calc 內部全部去空白。

| 原寫法 | 改為 |
|---|---|
| `min-h-screen` / `h-screen` | `min-h-[var(--windowVh,100vh)]` / `h-[var(--windowVh,100vh)]` |
| `h-dvh` | `h-[var(--windowVh,100vh)]` |
| `100vh` (CSS) | `var(--windowVh, 100vh)` |
| `min-h-[80vh]` | `min-h-[calc(var(--windowVh,100vh)*0.8)]` |
| `max-h-[50vh]` | `max-h-[calc(var(--windowVh,100vh)*0.5)]` |
| `max-h-[80dvh]` | `max-h-[calc(var(--windowVh,100vh)*0.8)]` |
| `height: 420vh` (CSS) | `height: calc(var(--windowVh, 100vh) * 4.2)` |
| `calc(100vh-72px)` | `calc(var(--windowVh,100vh)-72px)` |
| `min(36vh, calc(50dvh - 5rem))` | `min(calc(var(--windowVh,100vh)*0.36), calc(var(--windowVh,100vh)*0.5-5rem))` |

> CSS `<style>` 區塊內可保留空白（`calc(var(--windowVh, 100vh) * N)`）。Tailwind arbitrary 內不可。

### C. JS 直讀 `window.innerHeight` 改用 composable

新建（或已存在）`composables/useWindowVh.js`：

```js
/**
 * 讀取 app.vue 設定的 --windowVh CSS 變數（px 值），
 * fallback 為 window.innerHeight。
 */
export function useWindowVhPx () {
  if (!process.client) { return 0 }
  const raw = getComputedStyle(document.documentElement).getPropertyValue('--windowVh')
  const fromCss = parseFloat(raw)
  if (!Number.isNaN(fromCss) && fromCss > 0) { return fromCss }
  return window.innerHeight || 0
}
```

使用：

```js
// Before
const vh = window.innerHeight
// After
const vh = useWindowVhPx()
```

**例外**：純粹做 scroll progress（每次捲動重算）的場景可不換，因為跳動影響微小且邏輯需要即時值。

### D. resize handler 解耦（如有 clip-path / ScrollTrigger 重算）

若元件監聽 `resize` 去重算與高度相關的 layout（如 clip-path、ScrollTrigger 邊界），mobile toolbar 變動會誤觸發。改成只在「寬度真的變了」或 `orientationchange` 時跑：

```js
let lastSyncWidth = 0
function onResizeSync () {
  if (window.innerWidth === lastSyncWidth) { return }
  lastSyncWidth = window.innerWidth
  doExpensiveSync()
}

onMounted(() => {
  lastSyncWidth = window.innerWidth
  window.addEventListener('resize', onResizeSync)
  window.addEventListener('orientationchange', doExpensiveSync)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResizeSync)
  window.removeEventListener('orientationchange', doExpensiveSync)
})
```

---

## 套用流程（執行給新頁面 / 新元件）

1. 用 `grep -rn "vh\]\|dvh\|min-h-screen\|h-screen\|innerHeight"` 列出目標檔案。
2. 排除 `/pages/ui/**`。
3. 一個一個套對應表（B）→ JS 直讀換 `useWindowVhPx()`（C）→ 有 resize 重算就加寬度判斷（D）。
4. `yarn lint && yarn stylelint`，確認沒新增錯誤。
5. Chrome DevTools 切 iPhone 模擬：
   - Console 跑 `getComputedStyle(document.documentElement).getPropertyValue('--windowVh')` 應為固定 px。
   - 滾動觸發 toolbar 切換，**值不應變動**。
   - 旋轉模擬器 → 值才更新。

---

## 不需要套的場景

- `/pages/ui/**` 內部頁
- 純粹 viewport-relative 視覺需求（如 `w-screen` 寬度、`vmin` / `vmax`）
- scroll progress 計算（要即時動態值的本來就不該凍結）
- 工具列就是該影響版面的設計（罕見，多半需求是反過來）

---

## 相關檔案

- `app.vue` — 全域 `--windowVh` 設定
- `composables/useWindowVh.js` — JS 共用 helper
- `docs/plans/viewport-height-mobile-fix.md` — 首次全站套用紀錄
