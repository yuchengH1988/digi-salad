<script setup>
import heroDesktop from '~/assets/images/hero.webp'
import heroMobile from '~/assets/images/hero-m.webp'
import salad from '~/assets/images/salad.png'
</script>

<template>
  <section id="top" class="relative h-[var(--windowVh,100vh)] text-white">
    <div class="absolute inset-0 overflow-hidden rounded-b-[30px] lg:rounded-b-[50px]">
      <BasePicture :src="heroDesktop" :mobile-src="heroMobile" alt="Hong Kong city light trails at night" loading="eager" width="1920" height="1080" sizes="100vw" img-class="absolute inset-0 size-full object-cover" />
      <div class="absolute inset-0 bg-[rgba(12,38,34,0.28)]"></div>
    </div>
    <div class="relative h-[var(--windowVh,100vh)]">
      <div class="absolute left-15 md:left-24 top-[17.39%] w-[145px] lg:left-[15.28%] lg:top-[19.26%] lg:w-[199px]">
        <AtomIcon name="icon" is-full class="text-white" />
      </div>
      <div class="absolute left-15 md:left-24 top-[34.06%] lg:left-[15.69%] lg:top-[32.23%]" data-fade="up">
        <h1 class="text-h-1 relative">
          We create<br>
          amazing<br>
          digital <span class="block sm:inline-block">experiences</span>
          <span class="absolute -right-4 bottom-4 size-[10px] rounded-full bg-coral lg:bottom-5"></span>
        </h1>
        <div class="mt-[-18px] lg:mt-[-24px] h-1 w-[250px] sm:w-[410px] lg:w-[571px] max-w-full bg-accent"></div>
      </div>
      <div class="absolute left-4 lg:left-[3.6%] top-[35.5%] h-[386px] w-6 flex-col items-center flex">
        <span class="text-mini-1 origin-center -rotate-90 whitespace-nowrap">Digital agency</span>
        <span class="mt-[109px] h-[113px] w-[2px] bg-white"></span>
      </div>
    </div>

    <div class="absolute left-1/2 flex -translate-x-1/2 flex-col items-center bottom-[-86px]">
      <img :src="salad" alt="" width="130" height="130" class="size-[65px]">
      <span class="text-mini-1 mt-3 whitespace-nowrap">Taste us now!</span>
      <span class="mt-3 h-[44px] w-px bg-white"></span>
      <span class="mt-0 h-[86px] w-px bg-ink"></span>
    </div>
  </section>
</template>
