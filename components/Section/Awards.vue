<script setup>
import awardLogo from '~/assets/images/awards.webp'
</script>

<template>
  <section class="relative z-3 mx-auto mb-[-80px] mt-[-20px] max-w-[1346px] rounded-[30px] bg-white px-6 py-12 text-ink max-xl:mx-5 lg:mb-[-216px] lg:mt-[-216px] lg:rounded-none lg:rounded-bl-[50px] lg:rounded-tl-[50px] lg:px-[69px] lg:py-[65px]">
    <div class="grid min-h-[302px] grid-cols-1 items-center gap-[37px] lg:grid-cols-[416px_1fr]">
      <div>
        <AtomSectionTitle title="Awards" align="left" />
        <p class="text-body-1 mt-[25px]">
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc.
        </p>
      </div>
      <div class="grid grid-cols-2 gap-x-9 gap-y-[19px] max-sm:grid-cols-1">
        <img v-for="index in 4" :key="index" :src="awardLogo" alt="Asia Smart App Awards" class="h-[108px] w-full object-contain">
      </div>
    </div>
  </section>
</template>
