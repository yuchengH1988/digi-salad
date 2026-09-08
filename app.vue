<script setup>
import 'virtual:svg-icons-register'

const isMobileDevice = () => {
  if (typeof navigator === 'undefined') return false

  const ua = navigator.userAgent || navigator.vendor || ''
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(String(ua))
}

let isMobile = false

const updateWindowVh = () => {
  if (!process.client) return

  document.documentElement.style.setProperty(
    '--windowVh',
    isMobile ? `${window.innerHeight}px` : '100vh'
  )
}

const handleResize = () => {
  if (!isMobile) {
    updateWindowVh()
  }
}

const handleOrientationChange = () => {
  updateWindowVh()
}

onMounted(() => {
  isMobile = isMobileDevice()
  updateWindowVh()

  if (isMobile) {
    setTimeout(() => {
      if (window.scrollY === 0) {
        updateWindowVh()
      }
    }, 500)
  }

  window.addEventListener('resize', handleResize)
  window.addEventListener('orientationchange', handleOrientationChange)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('orientationchange', handleOrientationChange)
})
</script>

<template>
  <div>
    <SEO />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
