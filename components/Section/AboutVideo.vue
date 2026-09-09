<script setup>
import aboutDesktop from '~/assets/images/about-video-thumbnail.webp'
import aboutMobile from '~/assets/images/about-video-thumbnail-m.webp'
</script>

<template>
  <section id="about" class="pb-[70px] pt-[125px] text-ink lg:pb-[286px]">
    <BaseContainer class="max-w-[1007px]">
      <AtomSectionTitle title="About digiSalad" wave-class="w-[340px] lg:w-[369px]" />
      <BaseYouTubeVideo
        video-id="IeIRJ9jZ5Ro"
        title="Watch about digiSalad video"
        class="mt-10 lg:mt-[71px]"
        data-fade="up"
      >
        <BasePicture :src="aboutDesktop" :mobile-src="aboutMobile" alt="digiSalad team illustration" width="1600" height="901" sizes="(min-width: 1024px) 1007px, 100vw" img-class="size-full object-cover transition duration-700 group-hover:scale-[1.02]" />
      </BaseYouTubeVideo>
      <p data-fade="up" class="text-body-1 mt-[30px] text-left lg:text-center">
        Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
      </p>
      <div class="mt-[30px] flex justify-center">
        <AtomCtaButton label="View more" href="#services" />
      </div>
    </BaseContainer>
  </section>
</template>
