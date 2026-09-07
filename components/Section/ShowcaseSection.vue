<script setup>
import projectImage from '~/assets/images/showcase-project.webp'

const totalSlides = 4
const currentSlide = ref(0)

const changeSlide = (offset) => {
  currentSlide.value = (currentSlide.value + offset + totalSlides) % totalSlides
}
</script>

<template>
  <section id="showcase" class="relative h-[1077px] overflow-hidden rounded-b-[50px] bg-ink text-white max-lg:h-auto max-lg:min-h-0 max-lg:rounded-b-[30px] max-lg:py-24">
    <img :src="projectImage" alt="" class="absolute inset-0 size-full scale-110 object-cover opacity-25 blur-[8px]">
    <div class="absolute inset-0 bg-black/55"></div>

    <AtomCarouselPagination class="absolute right-[7.92%] top-[170px] z-3 max-lg:right-6 max-lg:top-8" :current="currentSlide + 1" :total="totalSlides" />

    <button type="button" aria-label="Previous project" class="carousel-button left-[6.8%]" @click="changeSlide(-1)">
      <span class="absolute left-0 top-[2px] size-[53px] rounded-full bg-accent"></span>
      <AtomIcon name="carousel-prev" is-full class="relative h-6 w-[15.5px] rotate-180 text-white" />
    </button>
    <button type="button" aria-label="Next project" class="carousel-button right-[6.8%]" @click="changeSlide(1)">
      <span class="absolute left-0 top-[2px] size-[53px] rounded-full bg-accent"></span>
      <AtomIcon name="carousel-next" is-full class="relative h-6 w-[15.5px] text-white" />
    </button>

    <Transition name="showcase-slide" mode="out-in">
      <div :key="currentSlide" class="relative mx-auto h-[1077px] max-w-[1440px] max-lg:grid max-lg:h-auto max-lg:grid-cols-1 max-lg:gap-12 max-lg:px-5 max-lg:py-24">
        <div class="absolute left-[14.1%] top-[194px] size-[540px] max-lg:relative max-lg:left-auto max-lg:top-auto max-lg:size-auto" data-fade="up">
          <img :src="projectImage" alt="LP Club mobile app project" class="aspect-square w-full rounded-[30px] object-cover">
          <AtomCtaButton class="absolute left-[311px] top-[488px] !h-[140px] !w-[300px] max-lg:static max-lg:mt-5 max-lg:!h-[86px] max-lg:!w-auto" label="View project" href="#" />
        </div>

        <div class="absolute left-[56.11%] top-[256px] w-[432px] max-lg:relative max-lg:left-auto max-lg:top-auto max-lg:w-auto" data-fade="up">
          <p class="text-mini-1 pl-[6px]">Highlighted showcase</p>
          <div class="relative mt-[20px] h-[41px]">
            <h2 class="text-h-2 pl-[6px]">
              LP Club Mobile App<span class="text-coral">.</span>
            </h2>
            <span class="absolute bottom-0 left-0 h-[2px] w-[401px] max-w-full bg-accent"></span>
          </div>
          <p class="text-body-2 mt-[38px]">
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
  top: 449px;
  z-index: 3;
  display: grid;
  width: 56px;
  height: 56px;
  place-items: center;
  transform: translateY(-50%);
  transition: transform 180ms ease, opacity 180ms ease;
}

.carousel-button:hover {
  transform: translateY(-50%) scale(1.06);
}

.carousel-button:active {
  transform: translateY(-50%) scale(0.96);
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

@media (max-width: 1023px) {
  .carousel-button {
    top: auto;
    bottom: 24px;
    transform: none;
  }

  .carousel-button:hover,
  .carousel-button:active {
    transform: none;
  }
}
</style>
