# digiSalad Interview

以 Nuxt 3、Tailwind CSS 與 GSAP 製作的 digiSalad 單頁形象網站。專案包含響應式版面、首頁進場動畫、捲動顯示動畫、全螢幕選單、影片播放與案例輪播。

## 技術棧

- Nuxt 3
- Vue 3 Composition API
- Tailwind CSS 3
- GSAP 3
- GSAP ScrollTrigger
- Vite SVG Icons

## 環境需求

- Node.js 18.20.1 以上
- Yarn

## 開始使用

安裝套件：

```bash
yarn install
```

建立環境變數：

```bash
cp .env.template .env
```

啟動開發環境：

```bash
yarn dev
```

預設網址為 `http://localhost:3000`。

## 環境變數

| 變數 | 用途 | 預設值 |
| --- | --- | --- |
| `APP_TITLE` | 網站標題 | `digiSalad Interview` |
| `APP_DESC` | 網站描述 | digiSalad 專案描述 |
| `APP_DEFAULT_LANG` | HTML 語言 | `zh-TW` |
| `APP_URL` | 正式網站網址 | `http://localhost:3000` |
| `APP_BASE_URL` | Nuxt Base URL | `/` |
| `PORT` | 開發伺服器連接埠 | `3000` |
| `WEB_SEARCH` | 是否允許搜尋引擎索引 | `NO` |

## 常用指令

```bash
# 啟動開發環境
yarn dev

# 建立正式版本
yarn build

# 產生靜態網站
yarn generate

# 預覽建置結果
yarn preview

# 啟動正式伺服器
yarn start
```

> 專案的部署與 import path 可能受到 `APP_BASE_URL` 影響。執行正式建置前，請先確認 `.env` 與部署路徑設定。

## 專案結構

```text
.
├── app.vue                    # App 入口與手機 viewport 處理
├── assets/
│   ├── css/                   # Tailwind、Typography 與全域樣式
│   ├── icons/                 # SVG Sprite 圖示
│   └── images/                # 網站圖片素材
├── components/
│   ├── Atom/                  # Icon、CTA、SectionTitle 等基礎元件
│   ├── Base/                  # Container、Picture、Video 等共用元件
│   ├── Hero/                  # Hero 專用元件
│   ├── Layout/                # Header
│   ├── Menu/                  # 全螢幕選單
│   ├── Section/               # 首頁各內容區塊
│   └── Showcase/              # 案例輪播內容與控制器
├── composables/
│   ├── useReducedMotion.js    # 使用者減少動畫偏好
│   └── useScrollReveal.js     # 共用捲動進場動畫
├── data/
│   └── showcase.js            # 案例輪播資料
├── layouts/default.vue        # 全域 Layout 與首頁淡入
├── pages/index.vue            # 首頁 Section 組合
├── plugins/02.gsap.js         # GSAP 與 ScrollTrigger 註冊
├── nuxt.config.ts             # Nuxt 設定
└── tailwind.config.js         # Design tokens 與響應式斷點
```

## 元件使用方式

### SVG Icon

將 SVG 放入 `assets/icons`，接著使用：

```vue
<AtomIcon name="menu" />
```

填滿父容器：

```vue
<AtomIcon name="icon" is-full class="size-full" />
```

### 響應式圖片

```vue
<BasePicture
  :src="desktopImage"
  :mobile-src="mobileImage"
  alt="圖片說明"
  width="1920"
  height="1080"
  sizes="100vw"
/>
```

### CTA

傳入 `href` 時輸出連結：

```vue
<AtomCtaButton label="View project" href="#showcase" />
```

未傳入 `href` 時輸出按鈕：

```vue
<AtomCtaButton label="Submit" />
```

可用的 `tone`：

- `accent`
- `purple`
- `outline`

## GSAP 動畫

### 一般元素進場

`pages/index.vue` 已在頁面根節點使用 `useScrollReveal`，Section 內可以直接加入 `data-fade`：

```html
<div data-fade="up">由下往上浮現</div>
<div data-fade="left">由右往左浮現</div>
<div data-fade="right">由左往右浮現</div>
```

可調整以下參數：

```html
<div
  data-fade="up"
  data-fade-duration="0.8"
  data-fade-delay="0.2"
  data-fade-distance="40"
  data-fade-start="top 85%"
  data-fade-once="true"
  data-fade-id="about-content"
>
  Content
</div>
```

### 群組依序進場

父層設定方向與 stagger，子項目加入 `data-fade-item`：

```html
<div data-fade="up" data-fade-stagger="0.1">
  <div data-fade-item>Item 1</div>
  <div data-fade-item>Item 2</div>
  <div data-fade-item>Item 3</div>
</div>
```

`data-fade-stagger="0.1"` 代表每個項目相隔 0.1 秒開始，動畫會彼此重疊。

### 動畫生命週期

- 元件動畫應建立在 `gsap.context()` 中。
- 元件卸載時需要呼叫 `context.revert()` 或 `timeline.kill()`。
- Vue `<Transition>` 搭配 GSAP 時使用 `:css="false"`，並在動畫完成後呼叫 `done()`。
- 不要在父元素與子元素重複設定 `data-fade`，避免 opacity 與 transform 互相影響。
- 動畫需配合 `useReducedMotion()`，尊重使用者的減少動態效果設定。

## Showcase 輪播資料

輪播內容集中於 `data/showcase.js`：

```js
{
  id: 'project-id',
  eyebrow: 'Highlighted showcase',
  title: 'Project title',
  description: 'Project description',
  image: projectImage,
  imageAlt: 'Project image description',
  href: '/project'
}
```

新增或移除資料後，Pagination 總數會自動更新。

## 響應式斷點

| 名稱 | 寬度 |
| --- | --- |
| `sm` | 480px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1440px |
| `3xl` | 1680px |
| `4xl` | 1920px |

## 開發注意事項

- 手機 Hero 高度由 `app.vue` 的 `--windowVh` 控制，修改前請確認 iOS Safari 的網址列行為。
- 手機選單內容超過視窗時會垂直捲動，不要將選單容器改回固定 `h-full`。
- 專案的 `z-index` 使用自訂 Tailwind token；不存在的 class（例如 `z-10`）不會產生樣式，可改用既有 token 或 arbitrary value。
- 背景與裝飾圖片使用空 `alt`；具有資訊意義的圖片必須提供說明。
- 新增 GSAP 動畫時，優先沿用現有 composable 與 plugin，避免重複註冊 ScrollTrigger。
