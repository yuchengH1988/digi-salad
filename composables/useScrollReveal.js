export const useScrollReveal = (rootRef, options = {}) => {
  const { $gsap, $ScrollTrigger } = useNuxtApp()
  let gsapContext
  let refreshFrame

  onMounted(async () => {
    await nextTick()

    const root = rootRef.value
    if (!root) return

    const targets = root.querySelectorAll('[data-fade]')

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      $gsap.set(targets, { autoAlpha: 1, x: 0, y: 0 })
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
