<script setup>
import heroDesktop from '~/assets/images/hero.webp'
import heroMobile from '~/assets/images/hero-m.webp'
import salad from '~/assets/images/salad.png'
</script>

<template>
  <section id="top" class="relative h-[1025px] bg-page text-white max-md:h-[760px]">
    <div class="relative h-[940px] overflow-hidden rounded-b-[50px] max-md:h-[690px] max-md:rounded-b-[30px]">
      <BasePicture :src="heroDesktop" :mobile-src="heroMobile" alt="Hong Kong city light trails at night" loading="eager" img-class="absolute inset-0 size-full object-cover" />
      <div class="absolute inset-0 bg-[rgba(12,38,34,0.28)]"></div>

      <div class="absolute left-[15.28%] top-[181px] w-[199px] max-md:left-6 max-md:top-[120px] max-md:w-[145px]">
        <AtomIcon name="icon" is-full class="text-white" />
      </div>
      <div class="absolute left-[15.69%] top-[303px] max-md:left-6 max-md:right-6 max-md:top-[235px]" data-fade="up">
        <h1 class="text-display-1">
          We create<br>
          amazing<br>
          digital experiences<span class="text-coral">.</span>
        </h1>
        <div class="mt-[-24px] h-1 w-[571px] max-w-full bg-accent"></div>
      </div>
      <div class="absolute left-[50px] top-[177px] flex h-[386px] w-6 flex-col items-center max-md:hidden">
        <span class="text-mini-1 origin-center -rotate-90 whitespace-nowrap">Digital agency</span>
        <span class="mt-[109px] h-[113px] w-[2px] bg-white"></span>
      </div>
    </div>

    <div class="absolute left-1/2 top-[772px] flex -translate-x-1/2 flex-col items-center max-md:top-[640px]">
      <img :src="salad" alt="" class="size-[65px]">
      <span class="text-mini-1 mt-3 whitespace-nowrap">Taste us now!</span>
      <span class="mt-3 h-[130px] w-px bg-ink"></span>
    </div>
  </section>
</template>
