<script setup>
const { $gsap, $ScrollTrigger } = useNuxtApp()
const pageRef = ref(null)
let pageGsapContext

onMounted(() => {
  nextTick(() => {
    pageGsapContext = $gsap.context(() => {
      $gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('[data-hero-kicker]', { autoAlpha: 0, y: 20, duration: 0.5 })
        .from('[data-hero-title]', { autoAlpha: 0, y: 36, duration: 0.8 }, '-=0.25')
        .from('[data-hero-copy]', { autoAlpha: 0, y: 24, duration: 0.6 }, '-=0.35')
        .from('[data-hero-line]', { scaleX: 0, transformOrigin: 'left center', duration: 0.7 }, '-=0.35')
    }, pageRef)

    // 等字型 / 圖片大致就緒再綁定，減少手機首次量測偏差。
    setTimeout(() => {
      $gsap.effects.aosFadeIn()
      $ScrollTrigger.refresh()
    }, 500)
  })
})

onBeforeUnmount(() => {
  pageGsapContext?.revert()
})

</script>

<template>
  <main ref="pageRef" class="min-h-screen overflow-hidden bg-bgc text-white font-default">
    <section class="set relative grid min-h-screen content-between py-6 md:py-8">
      <header class="flex items-center justify-between gap-4">
        <div class="font-display text-mb/head/1 md:text-dt/head/1">digiSalad</div>
        <div class="text-mb/body/3 text-white/55 md:text-dt/body/3">Interview Project</div>
      </header>

      <div class="grid gap-10 py-20 md:grid-cols-[minmax(0,1fr)_360px] md:items-end md:py-24 lg:grid-cols-[minmax(0,1fr)_480px]">
        <div class="max-w-[980px]">
          <p data-hero-kicker class="mb-5 text-mb/button/2 uppercase text-brand md:text-dt/button/2">
            Nuxt 3 / Tailwind CSS / GSAP
          </p>
          <h1 data-hero-title class="font-display text-[clamp(3.25rem,12vw,10rem)] font-black leading-[0.9] tracking-normal">
            Single Page<br>
            Experience
          </h1>
          <div data-hero-line class="mt-8 h-px w-full bg-white/25"></div>
        </div>

        <div data-hero-copy class="grid gap-6 text-mb/body/2 text-white/68 md:text-dt/body/3">
          <p>
            這是一個乾淨的 digiSalad 面試題起點。品牌色、字型、Tailwind token、GSAP plugin 已先配置好。
          </p>
          <div class="grid grid-cols-3 gap-3">
            <div class="aspect-square rounded bg-brand"></div>
            <div class="aspect-square rounded bg-secondary"></div>
            <div class="aspect-square rounded bg-accent"></div>
          </div>
        </div>
      </div>

      <div class="grid gap-4 pb-8 text-mb/body/3 text-white/45 md:grid-cols-3 md:text-dt/body/3">
        <p>01. Layout foundation</p>
        <p>02. Motion-ready sections</p>
        <p>03. Design稿接續製作</p>
      </div>
    </section>

    <section class="set grid gap-6 py-24 md:grid-cols-3">
      <div data-fade="up" class="border-t border-white/15 pt-5">
        <p class="mb-3 text-mb/head/2 text-white md:text-dt/head/2">Framework</p>
        <p class="text-mb/body/3 text-white/55 md:text-dt/body/3">Nuxt 3 base from the existing project template.</p>
      </div>
      <div data-fade="up" class="border-t border-white/15 pt-5">
        <p class="mb-3 text-mb/head/2 text-white md:text-dt/head/2">Styling</p>
        <p class="text-mb/body/3 text-white/55 md:text-dt/body/3">Tailwind tokens prepared for color, type, spacing, and responsive breakpoints.</p>
      </div>
      <div data-fade="up" class="border-t border-white/15 pt-5">
        <p class="mb-3 text-mb/head/2 text-white md:text-dt/head/2">Motion</p>
        <p class="text-mb/body/3 text-white/55 md:text-dt/body/3">GSAP and ScrollTrigger are available through Nuxt injection.</p>
      </div>
    </section>
  </main>
</template>
