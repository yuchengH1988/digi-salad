<script setup>
const props = defineProps({
  title: { type: String, required: true },
  light: { type: Boolean, default: false },
  align: {
    type: String,
    default: 'center',
    validator: value => ['left', 'center'].includes(value)
  },
  waveClass: { type: String, default: 'w-[168px] lg:w-[220px]' }
})

const titleRef = ref(null)
const dotRef = ref(null)
const waveRef = ref(null)
const characters = computed(() => Array.from(
  props.title,
  character => character === ' ' ? '\u00A0' : character
))
const characterElements = []

let titleGsapContext

const setCharacterRef = (element, index) => {
  if (element) characterElements[index] = element
}

onMounted(() => {
  const { $gsap } = useNuxtApp()

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const wavePath = waveRef.value?.getPathElement()
  if (!wavePath) return

  titleGsapContext = $gsap.context(() => {
    $gsap.set(characterElements, { autoAlpha: 0, y:10 })
    $gsap.set(wavePath, { strokeDashoffset: 100 })

    const timeline = $gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.value,
        start: 'top 85%',
        toggleActions: 'restart reset restart reset'
      }
    })

    timeline
      .to(wavePath, {
        strokeDashoffset: 0,
        duration: 1.2,
        ease: 'power2.out'
      }, 0)
      .to(characterElements, {
        autoAlpha: 1,
        y:0,
        duration: 0.8,
        ease: 'power2.out'
      }, 0.3)
      .to(dotRef.value, {
        keyframes: [
          { y: -12, duration: 0.25, ease: 'power2.out' },
          { y: 0, duration: 0.5, ease: 'bounce.out' }
        ]
      }, 0.75)
  }, titleRef.value)
})

onBeforeUnmount(() => {
  titleGsapContext?.revert()
})
</script>

<template>
  <div ref="titleRef" class="flex flex-col" :class="align === 'left' ? 'items-start' : 'items-center'">
    <h2
      class="text-h-2 relative -ml-4"
      :class="[
        light ? 'text-white' : 'text-ink',
        align === 'left' && 'pl-9'
      ]"
      :aria-label="title"
    >
      <span
        v-for="(character, index) in characters"
        :key="`${character}-${index}`"
        :ref="element => setCharacterRef(element, index)"
        aria-hidden="true"
        class="inline-block"
      >{{ character }}</span>
      <span ref="dotRef" class="absolute -right-4 bottom-0.5 size-[10px] rounded-full bg-coral" />
    </h2>
    <AtomWaveLine
      ref="waveRef"
      :animated="false"
      class="mt-2 h-[13px] text-accent"
      :class="[
        waveClass,
        light ? 'text-purple' : 'text-accent'
      ]"
    />
  </div>
</template>
