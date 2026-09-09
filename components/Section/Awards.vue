<script setup>
import awardLogo from '~/assets/images/awards.webp'
</script>

<template>
  <section data-fade="right" class="relative z-3 mx-auto mb-[-80px] mt-[-20px] max-w-[1346px] px-6 py-12 text-ink lg:mb-[-216px] lg:mt-[-216px] lg:px-[69px] lg:py-[65px]">
    <div class="absolute -z-1 inset-y-0 left-0 right-[min(0px,-50vw+673px)] rounded-[50px] rounded-tr-none bg-white"></div>
    <div class="relative z-[2] grid min-h-[302px] grid-cols-1 items-center gap-[37px] lg:grid-cols-[416px_1fr]">
      <div>
        <AtomSectionTitle title="Awards" align="left" wave-class="w-[180px] lg:w-[200px]" />
        <p class="text-body-1 mt-[25px]" data-fade="up">
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc.
        </p>
      </div>
      <div class="grid grid-cols-2 gap-x-9 gap-y-[19px] max-sm:grid-cols-1" data-fade="up" data-fade-stagger="0.1">
        <img v-for="index in 4" :key="index" data-fade-item :src="awardLogo" alt="Asia Smart App Awards" width="4096" height="1561" class="h-[108px] w-full object-contain">
      </div>
    </div>
  </section>
</template>
