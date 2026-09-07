<script setup>
import iconsDesktop from '~/assets/images/icons.webp'
import iconsMobile from '~/assets/images/icons-m.webp'
</script>

<template>
  <section id="work" class="bg-white pb-[80px] pt-[386px] text-ink md:min-h-[1432px]">
    <div class="mx-auto max-w-[1040px] px-5">
      <AtomSectionTitle title="Our brand experience" />
      <p class="text-body-2 mx-auto mt-[41px] max-w-[1007px] text-center">
        Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
      </p>
      <BasePicture :src="iconsDesktop" :mobile-src="iconsMobile" alt="digiSalad client brands" img-class="mt-[18px] w-full object-contain" />
    </div>
  </section>
</template>
