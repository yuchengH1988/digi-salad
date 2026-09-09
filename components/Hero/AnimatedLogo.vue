<script setup>
import logoMarkup from '~/assets/icons/icon.svg?raw'

const { $gsap } = useNuxtApp()
const logoRef = ref(null)

const getAccentDot = () => logoRef.value
  ?.querySelector('path[fill="#EE6C8A"]')

const prepareDot = (additionalTargets = []) => {
  const targets = [getAccentDot(), ...additionalTargets].filter(Boolean)

  $gsap.set(targets, {
    autoAlpha: 0,
    scale: 0,
    transformBox: 'fill-box',
    transformOrigin: 'center'
  })
}

const addDotBounce = (timeline, position, additionalTargets = []) => {
  const targets = [getAccentDot(), ...additionalTargets].filter(Boolean)

  timeline.to(targets, {
    keyframes: [
      { autoAlpha: 1, scale: 1, y: 0, duration: 0.15, ease: 'power2.out' },
      { y: -12, duration: 0.22, ease: 'power2.out' },
      { y: 0, duration: 0.45, ease: 'bounce.out' }
    ]
  }, position)
}

defineExpose({
  prepareDot,
  addDotBounce
})
</script>

<template>
  <div ref="logoRef" class="hero-logo" v-html="logoMarkup"></div>
</template>

<style scoped>
.hero-logo :deep(svg) {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
