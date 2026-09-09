<script setup>
import { showcaseSlides } from '~/data/showcase'

const currentIndex = ref(0)
const totalSlides = computed(() => showcaseSlides.length)
const currentSlide = computed(() => showcaseSlides[currentIndex.value])

const changeSlide = (offset) => {
  currentIndex.value = (currentIndex.value + offset + totalSlides.value) % totalSlides.value
}
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

    <Transition name="showcase-slide" mode="out-in">
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

<style scoped>
.showcase-slide-enter-active,
.showcase-slide-leave-active {
  transition: opacity 220ms ease, transform 220ms ease;
}

.showcase-slide-enter-from {
  opacity: 0;
  transform: translateX(18px);
}

.showcase-slide-leave-to {
  opacity: 0;
  transform: translateX(-18px);
}
</style>
