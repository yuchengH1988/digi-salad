<script setup>
const { $gsap, $ScrollTrigger } = useNuxtApp()

const pageRef = ref(null)
const isMenuOpen = ref(false)
let pageGsapContext

const closeMenu = () => {
  isMenuOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

watch(isMenuOpen, (open) => {
  if (process.client) {
    document.documentElement.classList.toggle('overflow-hidden', open)
  }
})

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
  closeMenu()
  pageGsapContext?.revert()
})
</script>

<template>
  <main ref="pageRef" class="min-h-screen overflow-hidden bg-page font-default">
    <LayoutSiteHeader :is-menu-open="isMenuOpen" @toggle-menu="toggleMenu" />
    <MenuOverlay :open="isMenuOpen" @close="closeMenu" />

    <SectionHeroSection />
    <SectionAboutVideoSection />
    <SectionAwardsSection />
    <SectionServicesSection />
    <SectionFounderSection />
    <SectionWorkSection />
    <SectionShowcaseSection />
  </main>
</template>
