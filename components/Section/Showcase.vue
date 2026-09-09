<script setup>
import { showcaseSlides } from '~/data/showcase'

const { $gsap } = useNuxtApp()
const prefersReducedMotion = useReducedMotion()
const currentIndex = ref(0)
const totalSlides = computed(() => showcaseSlides.length)
const currentSlide = computed(() => showcaseSlides[currentIndex.value])

const changeSlide = (offset) => {
  currentIndex.value = (currentIndex.value + offset + totalSlides.value) % totalSlides.value
}

let slideTween

const beforeSlideEnter = (element) => {
  slideTween?.kill()
  $gsap.set(element, prefersReducedMotion.value
    ? { autoAlpha: 1, x: 0 }
    : { autoAlpha: 0, x: 18 })
}

const slideEnter = (element, done) => {
  if (prefersReducedMotion.value) {
    done()
    return
  }

  slideTween = $gsap.to(element, {
    autoAlpha: 1,
    x: 0,
    duration: 0.22,
    ease: 'power2.out',
    onComplete: done
  })
}

const slideLeave = (element, done) => {
  slideTween?.kill()

  if (prefersReducedMotion.value) {
    done()
    return
  }

  slideTween = $gsap.to(element, {
    autoAlpha: 0,
    x: -18,
    duration: 0.22,
    ease: 'power2.in',
    onComplete: done
  })
}

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
      @previous="changeSlide(-1)"
      @next="changeSlide(1)"
    />

    <Transition
      :css="false"
      mode="out-in"
      @before-enter="beforeSlideEnter"
      @enter="slideEnter"
      @leave="slideLeave"
    >
      <ShowcaseSlide
        :key="currentSlide.id"
        :slide="currentSlide"
        role="group"
        aria-roledescription="slide"
        :aria-label="`${currentIndex + 1} of ${totalSlides}`"
      />
    </Transition>
  </section>
</template>
