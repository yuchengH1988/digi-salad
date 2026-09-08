<script setup>
defineProps({
  title: { type: String, required: true },
  light: { type: Boolean, default: false },
  align: { type: String, default: 'center' },
  waveClass: { type: String, default: 'w-[168px] lg:w-[220px]' }
})

const titleRef = ref(null)
const dotRef = ref(null)

let titleGsapContext

onMounted(() => {
  const { $gsap } = useNuxtApp()

  titleGsapContext = $gsap.context(() => {
    $gsap.to(dotRef.value, {
      delay: 0.75,
      keyframes: [
        { y: -12, duration: 0.25, ease: 'power2.out' },
        { y: 0, duration: 0.5, ease: 'bounce.out' }
      ],
      scrollTrigger: {
        trigger: titleRef.value,
        start: 'top 85%',
        toggleActions: 'restart reset restart reset'
      }
    })
  }, titleRef.value)
})

onBeforeUnmount(() => {
  titleGsapContext?.revert()
})
</script>

<template>
  <div ref="titleRef" :class="align === 'left' ? 'items-start' : 'items-center'" class="flex flex-col">
    <h2 class="text-h-1 relative"
      :class="[
        light ? 'text-white' : 'text-ink',
        align === 'left' && 'pl-6']">
      {{ title }}
      <span ref="dotRef" class="absolute -right-4 bottom-1 size-[10px] rounded-full bg-coral" />
    </h2>
    <AtomWaveLine class="mt-2 h-[13px] text-accent" :class="waveClass" />
  </div>
</template>
