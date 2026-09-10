<script setup>
const props = defineProps({
  videoId: { type: String, required: true },
  title: { type: String, required: true },
  controls: { type: Boolean, default: true },
  muted: { type: Boolean, default: true },
  loop: { type: Boolean, default: false },
  background: { type: Boolean, default: false },
  loading: { type: String, default: 'lazy' },
  visibilityThreshold: { type: Number, default: 0.25 }
})

const rootRef = ref(null)
const iframeRef = ref(null)
const isVisible = ref(false)

let observer

const embedUrl = computed(() => {
  const params = new URLSearchParams({
    autoplay: '0',
    controls: props.controls ? '1' : '0',
    disablekb: props.controls ? '0' : '1',
    enablejsapi: '1',
    loop: props.loop ? '1' : '0',
    mute: props.muted ? '1' : '0',
    rel: '0',
    playsinline: '1'
  })

  if (props.loop) params.set('playlist', props.videoId)

  return `https://www.youtube-nocookie.com/embed/${props.videoId}?${params.toString()}`
})

const sendCommand = (func) => {
  iframeRef.value?.contentWindow?.postMessage(JSON.stringify({
    event: 'command',
    func,
    args: []
  }), 'https://www.youtube-nocookie.com')
}

const syncPlayback = () => {
  if (props.muted) sendCommand('mute')
  sendCommand(isVisible.value ? 'playVideo' : 'pauseVideo')
}

const handlePlayerMessage = (event) => {
  if (
    event.origin !== 'https://www.youtube-nocookie.com'
    || event.source !== iframeRef.value?.contentWindow
  ) return

  let message

  try {
    message = typeof event.data === 'string' ? JSON.parse(event.data) : event.data
  } catch {
    return
  }

  if (message?.event === 'onReady') syncPlayback()
}

onMounted(() => {
  window.addEventListener('message', handlePlayerMessage)

  observer = new IntersectionObserver(([entry]) => {
    isVisible.value = entry.isIntersecting
      && entry.intersectionRatio >= props.visibilityThreshold
    syncPlayback()
  }, {
    threshold: [0, props.visibilityThreshold]
  })

  observer.observe(rootRef.value)
})

onBeforeUnmount(() => {
  sendCommand('pauseVideo')
  observer?.disconnect()
  window.removeEventListener('message', handlePlayerMessage)
})
</script>

<template>
  <div
    ref="rootRef"
    :class="background
      ? 'absolute inset-0 overflow-hidden'
      : 'relative aspect-video w-full overflow-hidden'"
  >
    <div v-if="$slots.default" class="absolute inset-0">
      <slot />
    </div>

    <iframe
      ref="iframeRef"
      :class="background
        ? 'youtube-video-cover pointer-events-none absolute'
        : 'absolute inset-0 size-full'"
      :src="embedUrl"
      :title="title"
      :loading="loading"
      allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
      allowfullscreen
      @load="syncPlayback"
    ></iframe>
  </div>
</template>

<style scoped>
.youtube-video-cover {
  left: 50%;
  top: 50%;
  width: 100vw;
  height: 56.25vw;
  min-width: 177.78vh;
  min-height: 100vh;
  transform: translate(-50%, -50%);
}
</style>
