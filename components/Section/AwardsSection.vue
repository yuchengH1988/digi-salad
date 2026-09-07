<script setup>
import awardLogo from '~/assets/images/awards.webp'
</script>

<template>
  <section class="relative z-3 mx-auto mb-[-216px] mt-[-216px] max-w-[1346px] rounded-bl-[50px] rounded-tl-[50px] bg-white px-[69px] py-[65px] text-ink max-xl:mx-5 max-md:mb-[-80px] max-md:mt-[-20px] max-md:rounded-[30px] max-md:px-6 max-md:py-12">
    <div class="grid min-h-[302px] grid-cols-[416px_1fr] items-center gap-[37px] max-lg:grid-cols-1">
      <div>
        <AtomSectionTitle title="Awards" align="left" />
        <p class="mt-[25px] text-[16px] leading-7 tracking-[1px]">
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc.
        </p>
      </div>
      <div class="grid grid-cols-2 gap-x-9 gap-y-[19px] max-sm:grid-cols-1">
        <img v-for="index in 4" :key="index" :src="awardLogo" alt="Asia Smart App Awards" class="h-[108px] w-full object-contain">
      </div>
    </div>
  </section>
</template>
