<script setup>
const { $gsap, $ScrollTrigger } = useNuxtApp()

const pageRef = ref(null)
let pageGsapContext

onMounted(() => {
  nextTick(() => {
    pageGsapContext = $gsap.context(() => {
      $gsap.effects.aosFadeIn({ once: true })
    }, pageRef)

    setTimeout(() => {
      $ScrollTrigger.refresh()
    }, 500)
  })
})

onBeforeUnmount(() => {
  pageGsapContext?.revert()
})
</script>

<template>
  <main ref="pageRef" class="min-h-screen overflow-hidden bg-page font-default">
    <SectionHero />
    <SectionAboutVideo />
    <SectionAwards />
    <SectionServices />
    <SectionFounder />
    <SectionWork />
    <SectionShowcase />
  </main>
</template>
