<script setup>
import projectImage from '~/assets/images/showcase-project.webp'

const totalSlides = 4
const currentSlide = ref(0)

const changeSlide = (offset) => {
  currentSlide.value = (currentSlide.value + offset + totalSlides) % totalSlides
}
</script>

<template>
  <section id="showcase" class="relative overflow-hidden rounded-b-[30px] bg-ink text-white lg:rounded-b-[50px] lg:py-0">
    <div class="pointer-events-none">
    <img
      :src="projectImage"
      alt=""
      class="absolute inset-0 size-full scale-105 object-cover object-left-bottom blur-[10px]"
    >
    <div class="absolute inset-0 bg-black/75 mix-blend-multiply"></div>
    </div>
    <AtomCarouselPagination class="absolute right-4 top-24 z-3 sm:right-8 md:right-[7.92%] lg:top-[170px]" :current="currentSlide + 1" :total="totalSlides" />

    <button type="button" aria-label="Previous project" class="carousel-button carousel-button--prev" @click="changeSlide(-1)">
      <span class="absolute left-1 top-[2px] size-[53px] rounded-full bg-accent"></span>
      <AtomIcon name="carousel-prev" is-full class="relative h-6 w-[15.5px] rotate-180 text-white" />
    </button>
    <button type="button" aria-label="Next project" class="carousel-button carousel-button--next" @click="changeSlide(1)">
      <span class="absolute left-0 top-[2px] size-[53px] rounded-full bg-accent"></span>
      <AtomIcon name="carousel-next" is-full class="relative h-6 w-[15.5px] text-white" />
    </button>
    <Transition name="showcase-slide" mode="out-in">
      <div :key="currentSlide" class="mx-auto flex h-auto max-w-[1440px] flex-col px-5 py-24 lg:flex-row lg:px-20 xl:pl-[min(14vw,160px)] xl:pr-36 lg:pt-[200px] lg:pb-[248px]">
        <div class="relative pr-20 lg:pr-0 max-w-[480px] mx-auto lg:max-w-none lg:w-2/5 xl:w-1/2" data-fade="up">
          <img :src="projectImage" alt="LP Club mobile app project" class="aspect-square w-full rounded-[30px] object-cover">
          <AtomCtaButton class="absolute !h-[86px] !w-auto right-[-20px] -bottom-16 lg:right-[calc(50%-150px)] xl:-right-20 lg:-bottom-20 xl:bottom-[-100px] lg:!h-[140px] lg:!w-[300px]" label="View project" href="#" />
        </div>

        <div class="relative pt-[100px] lg:py-12 pb-12 xl:py-15 lg:px-12 xl:pr-0 xl:pl-[72px] lg:w-3/5 xl:w-1/2 lg:max-w-none max-w-[620px] mx-auto" data-fade="up">
          <p class="text-mini-1 pl-[6px]">Highlighted showcase</p>
          <div class="relative mt-[20px] h-[41px]">
            <h2 class="z-[1] inline-block relative text-h-3 pl-[6px]">
              LP Club Mobile App
              <span ref="dotRef" class="absolute -right-6 lg:-right-8 -bottom-0.5 lg:bottom-1 size-[10px] rounded-full bg-coral" />
            </h2>
            <span class="absolute bottom-[6px] left-0 h-2 w-[344px] lg:w-[401px] max-w-full bg-accent"></span>
          </div>
          <p class="text-body-2 mt-10">
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
          </p>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.carousel-button {
  position: absolute;
  top: 162px;
  z-index: 3;
  display: grid;
  width: 56px;
  height: 56px;
  place-items: center;
  transform: none;
  transition: transform 180ms ease, opacity 180ms ease;
}

.carousel-button--prev {
  right: 16px;
}

.carousel-button--next {
  right: 16px;
  top: 230px;
}

.carousel-button:hover {
  transform: none;
}

.carousel-button:active {
  transform: none;
}

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

@media (min-width: 480px) {
  .carousel-button--prev {
    right: 32px;
  }

  .carousel-button--next {
    right: 32px;
  }
}

@media (min-width: 768px) {
  .carousel-button--prev {
    right: 7.92%;
  }

  .carousel-button--next {
    right: 7.92%;
  }
}

@media (min-width: 1024px) {
  .carousel-button {
    top: 449px;
    transform: translateY(-50%);
  }

  .carousel-button--prev {
    right: auto;
    left: 6.8%;
  }

  .carousel-button--next {
    right: 6.8%;
  }

  .carousel-button:hover {
    transform: translateY(-50%) scale(1.06);
  }

  .carousel-button:active {
    transform: translateY(-50%) scale(0.96);
  }
}
</style>
