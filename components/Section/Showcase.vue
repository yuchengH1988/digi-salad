<script setup>
import { showcaseSlides } from '~/data/showcase'

const { $gsap } = useNuxtApp()
const prefersReducedMotion = useReducedMotion()
const currentIndex = ref(0)
const totalSlides = computed(() => showcaseSlides.length)
const currentSlide = computed(() => showcaseSlides[currentIndex.value])
const slideRef = ref(null)
const isTransitioning = ref(false)

let slideTween

const changeSlide = (offset) => {
  if (isTransitioning.value || totalSlides.value <= 1) return

  if (prefersReducedMotion.value) {
    currentIndex.value = (currentIndex.value + offset + totalSlides.value) % totalSlides.value
    return
  }

  const element = slideRef.value
  const direction = offset > 0 ? 1 : -1
  isTransitioning.value = true

  slideTween = $gsap.to(element, {
    autoAlpha: 0,
    x: -18 * direction,
    duration: 0.16,
    ease: 'power2.in',
    onComplete: async () => {
      currentIndex.value = (currentIndex.value + offset + totalSlides.value) % totalSlides.value
      await nextTick()

      $gsap.set(element, { x: 18 * direction })
      slideTween = $gsap.to(element, {
        autoAlpha: 1,
        x: 0,
        duration: 0.2,
        ease: 'power2.out',
        onComplete: () => {
          isTransitioning.value = false
        }
      })
    }
  })
}

onMounted(() => {
  const imageSources = new Set(showcaseSlides.map(slide => slide.image))
  imageSources.delete(currentSlide.value.image)

  imageSources.forEach((source) => {
    const image = new Image()
    image.src = source
  })
})

onBeforeUnmount(() => {
  slideTween?.kill()
})
</script>

<template>
  <section
    id="showcase"
    class="relative overflow-hidden rounded-b-[30px] bg-ink text-white lg:rounded-b-[50px] lg:py-0"
    aria-roledescription="carousel"
    aria-label="Highlighted projects"
  >
    <div class="pointer-events-none">
      <img
        :src="currentSlide.image"
        alt=""
        class="absolute inset-0 size-full scale-105 object-cover object-left-bottom blur-[10px]"
      >
      <div class="absolute inset-0 bg-black/75 mix-blend-multiply"></div>
    </div>

    <ShowcaseControls
      :current="currentIndex + 1"
      :total="totalSlides"
      :disabled="isTransitioning"
      @previous="changeSlide(-1)"
      @next="changeSlide(1)"
    />

    <div ref="slideRef" class="relative">
      <ShowcaseSlide
        :slide="currentSlide"
        role="group"
        aria-roledescription="slide"
        :aria-label="`${currentIndex + 1} of ${totalSlides}`"
      />
    </div>
  </section>
</template>
