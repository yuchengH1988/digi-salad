export const useReducedMotion = () => {
  const isReducedMotion = ref(false)
  let mediaQuery

  const updatePreference = (event) => {
    isReducedMotion.value = event.matches
  }

  onMounted(() => {
    mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    isReducedMotion.value = mediaQuery.matches
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updatePreference)
    } else {
      mediaQuery.addListener?.(updatePreference)
    }
  })

  onBeforeUnmount(() => {
    if (mediaQuery?.removeEventListener) {
      mediaQuery.removeEventListener('change', updatePreference)
    } else {
      mediaQuery?.removeListener?.(updatePreference)
    }
  })

  return readonly(isReducedMotion)
}
