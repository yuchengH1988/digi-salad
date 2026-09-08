<script setup>
const props = defineProps({
  videoId: { type: String, required: true },
  title: { type: String, required: true }
})

const isPlaying = ref(false)

const embedUrl = computed(() => {
  const params = new URLSearchParams({
    autoplay: '1',
    controls: '1',
    rel: '0',
    playsinline: '1'
  })

  return `https://www.youtube.com/embed/${props.videoId}?${params.toString()}`
})
</script>

<template>
  <div class="relative aspect-video w-full overflow-hidden">
    <iframe
      v-if="isPlaying"
      class="absolute inset-0 size-full"
      :src="embedUrl"
      :title="title"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>

    <button
      v-else
      type="button"
      class="group absolute inset-0 text-white"
      :aria-label="title"
      @click="isPlaying = true"
    >
      <slot />
      <span class="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full text-accent transition-transform group-hover:scale-105 lg:size-[113px]">
        <AtomIcon name="video-play" is-full class="size-full" />
        <span class="absolute left-[43%] top-1/2 -translate-y-1/2 border-y-[14px] border-l-[20px] border-y-transparent border-l-white lg:border-y-[20px] lg:border-l-[28px]"></span>
      </span>
    </button>
  </div>
</template>
