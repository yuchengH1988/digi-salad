<script setup>
import founderBackground from '~/assets/images/founder.webp'
import founderBackgroundMobile from '~/assets/images/founder-m.webp'
import founderPortrait from '~/assets/images/founder-photo-4.jpg'
</script>

<template>
  <section id="career" class="relative z-4 mb-[-299px] mt-[-299px] h-[598px] w-[90.28%] overflow-hidden rounded-br-[50px] text-white max-lg:h-auto max-lg:min-h-[650px] max-lg:w-[calc(100%-20px)] max-md:mb-0 max-md:mt-[-70px] max-md:rounded-br-[30px]">
    <BasePicture :src="founderBackground" :mobile-src="founderBackgroundMobile" alt="Hong Kong skyline" img-class="absolute inset-0 size-full scale-[1.02] object-cover blur-[4px]" />
    <div class="absolute inset-0 bg-purple/80"></div>
    <div class="relative mx-auto grid h-full max-w-[1100px] grid-cols-[250px_1fr] items-center gap-[88px] px-6 max-lg:grid-cols-1 max-lg:gap-10 max-lg:py-20">
      <div class="text-center" data-fade="up">
        <img :src="founderPortrait" alt="Tony Ng" class="mx-auto size-[204px] rounded-full object-cover">
        <h2 class="text-h-3 mt-8">Tony Ng</h2>
        <p class="text-body-3 mt-1 italic">Founder &amp; Creative Director</p>
      </div>
      <div data-fade="up">
        <AtomIcon name="left-quote" class="mx-auto mb-4 size-[90px] text-white" />
        <blockquote class="text-quote-1">
          A great digital work isn’t about designing beautiful pages purely. It is about context - how do we deliver the
          <strong class="font-bold text-yellow"> right experience to the right person at the right time.</strong>
          The most important thing is that your work can engage customers at anytime, anywhere and let users experience an entire amazing digital journey.
        </blockquote>
      </div>
    </div>
  </section>
</template>
