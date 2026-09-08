<script setup>
import aboutDesktop from '~/assets/images/about-video-thumbnail.webp'
import aboutMobile from '~/assets/images/about-video-thumbnail-m.webp'
</script>

<template>
  <section id="about" class="bg-page pb-[286px] pt-10 text-ink max-md:pb-[70px]">
    <div class="mx-auto max-w-[1007px] px-5">
      <AtomSectionTitle title="About digiSalad" />
      <a href="https://youtu.be/IeIRJ9jZ5Ro" target="_blank" rel="noopener noreferrer" class="group relative mt-[71px] block aspect-[960/544] w-full overflow-hidden text-white max-md:mt-10" aria-label="Watch about digiSalad video on YouTube" data-fade="up">
        <BasePicture :src="aboutDesktop" :mobile-src="aboutMobile" alt="digiSalad team illustration" img-class="size-full object-cover transition duration-700 group-hover:scale-[1.02]" />
        <span class="absolute left-1/2 top-1/2 size-[113px] -translate-x-1/2 -translate-y-1/2 rounded-full text-accent transition-transform group-hover:scale-105 max-md:size-20">
          <AtomIcon name="video-play" is-full class="size-full" />
          <span class="absolute left-[43%] top-1/2 -translate-y-1/2 border-y-[20px] border-l-[28px] border-y-transparent border-l-white max-md:border-y-[14px] max-md:border-l-[20px]"></span>
        </span>
      </a>
      <p class="text-body-1 mt-[30px] text-center max-md:text-left">
        Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
      </p>
      <div class="mt-[30px] flex justify-center">
        <AtomCtaButton label="View more" href="#services" />
      </div>
    </div>
  </section>
</template>
