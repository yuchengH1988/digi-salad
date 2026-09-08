<script setup>
const props = defineProps({
  animated: { type: Boolean, default: true },
  amplitude: { type: Number, default: 3.623 },
  capInset: { type: Number, default: 5 },
  height: { type: Number, default: 13 },
  strokeWidth: { type: Number, default: 5.35 },
  wavelength: { type: Number, default: 25.613 }
})

// 25.6

const waveRef = ref(null)
const pathRef = ref(null)
const width = ref(220)

let resizeObserver
let waveGsapContext

const viewBox = computed(() => `0 0 ${width.value} ${props.height}`)
const wavePath = computed(() => {
  const centerY = props.height / 2
  const wavelength = Math.max(props.wavelength, 1)
  const drawableWidth = Math.max(width.value - Math.max(props.capInset, props.strokeWidth / 2) * 2, 1)
  const cycles = Math.max(Math.floor(drawableWidth / wavelength), 1)
  const lineWidth = Math.min(cycles * wavelength, drawableWidth)
  const quarterWave = lineWidth / cycles / 4
  const startX = (width.value - lineWidth) / 2

  let path = `M${startX} ${centerY}`

  // Approximate the original SVG's centerline; extrema have horizontal tangents.
  const quarters = [
    [0.25, -0.5, 0.5, -1, 1, -1],
    [0.5, -1, 0.75, -0.5, 1, 0],
    [0.25, 0.5, 0.5, 1, 1, 1],
    [0.5, 1, 0.75, 0.5, 1, 0]
  ]

  for (let index = 0; index < cycles * 4; index += 1) {
    const x = startX + index * quarterWave
    const [cx1, cy1, cx2, cy2, endX, endY] = quarters[index % 4]
    path += `C${x + cx1 * quarterWave} ${centerY + cy1 * props.amplitude} ${x + cx2 * quarterWave} ${centerY + cy2 * props.amplitude} ${x + endX * quarterWave} ${centerY + endY * props.amplitude}`
  }

  return path
})

onMounted(() => {
  const { $gsap } = useNuxtApp()

  resizeObserver = new ResizeObserver(([entry]) => {
    width.value = Math.max(Math.round(entry.contentRect.width), props.wavelength)
  })

  if (waveRef.value) resizeObserver.observe(waveRef.value)

  if (!props.animated) {
    $gsap.set(pathRef.value, { strokeDashoffset: 0 })
    return
  }

  waveGsapContext = $gsap.context(() => {
    $gsap.fromTo(pathRef.value, {
      strokeDashoffset: 100
    }, {
      strokeDashoffset: 0,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: waveRef.value,
        start: 'top 85%',
        toggleActions: 'restart reset restart reset'
      }
    })
  }, waveRef.value)
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  waveGsapContext?.revert()
})
</script>

<template>
  <svg
    ref="waveRef"
    class="wave-line block overflow-visible"
    :viewBox="viewBox"
    :style="{ height: `${height}px` }"
    fill="none"
    aria-hidden="true"
  >
    <path
      ref="pathRef"
      class="wave-line__path"
      pathLength="100"
      :d="wavePath"
      stroke="currentColor"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      vector-effect="non-scaling-stroke"
    />
  </svg>
</template>

<style scoped>
.wave-line__path {
  stroke-dasharray: 100;
  stroke-dashoffset: 0;
}
</style>
