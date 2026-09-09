export const useScrollReveal = (rootRef, options = {}) => {
  const { $gsap, $ScrollTrigger } = useNuxtApp()
  const prefersReducedMotion = useReducedMotion()
  let gsapContext
  let refreshFrame

  onMounted(async () => {
    await nextTick()

    const root = rootRef.value
    if (!root) return

    const targets = root.querySelectorAll('[data-fade]')

    if (prefersReducedMotion.value) {
      const visibleTargets = root.querySelectorAll('[data-fade], [data-fade-item]')
      $gsap.set(visibleTargets, { autoAlpha: 1, x: 0, y: 0 })
      return
    }

    gsapContext = $gsap.context(() => {
      $gsap.effects.aosFadeIn(targets, options)
    }, root)

    refreshFrame = requestAnimationFrame(() => $ScrollTrigger.refresh())
  })

  onBeforeUnmount(() => {
    if (refreshFrame) cancelAnimationFrame(refreshFrame)
    gsapContext?.revert()
  })
}
