<script setup>
const { $gsap } = useNuxtApp()
const mainRef = ref(null)
const isMenuOpen = ref(false)

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
  if (mainRef.value) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      $gsap.set(mainRef.value, { opacity: 1 })
      return
    }

    $gsap.fromTo(
      mainRef.value,
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 0.5
      }
    )
  }
})

onBeforeUnmount(() => {
  document.documentElement.classList.remove('overflow-hidden')
})
</script>

<template>
  <div ref="mainRef" class="layout opacity-0">
    <div class="fixed inset-0 z-[-2] bg-bgc"></div>
    <LayoutSiteHeader :is-menu-open="isMenuOpen" @toggle-menu="toggleMenu" />
    <MenuOverlay :open="isMenuOpen" @close="closeMenu" />
    <slot />
    <div id="subField" class="relative z-[500]">
    </div>
    <div id="cookieField" class="relative z-[1000]">
    </div>
    <div id="sideField" class="relative z-[1001]">
    </div>
    <div id="modalsField" class="relative z-[1002]">
    </div>
    <div id="loadingField" class="relative z-[1005]">
    </div>
  </div>
</template>
