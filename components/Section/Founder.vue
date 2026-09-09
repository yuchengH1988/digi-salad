<script setup>
import founderBackground from '~/assets/images/founder.webp'
import founderBackgroundMobile from '~/assets/images/founder-m.webp'
import founderPortrait from '~/assets/images/founder-photo.webp'
</script>

<template>
  <section id="career" class="relative z-4 mb-0 mt-[-70px] h-auto min-h-[650px] w-full overflow-hidden rounded-tl-none text-white lg:mb-[-299px] lg:mt-[-299px] lg:h-[598px] lg:min-h-0 lg:w-[90.28%] rounded-[50px]">
    <BasePicture  :src="founderBackground" :mobile-src="founderBackgroundMobile" alt="Hong Kong skyline" width="2000" height="802" sizes="100vw" img-class="absolute inset-0 size-full scale-[1.02] object-cover blur-[4px]" />
    <div class="absolute inset-0 bg-purple/80"></div>
    <div class="relative mx-auto grid px-5 h-full max-w-[1100px] grid-cols-1 items-center gap-10 py-20 lg:grid-cols-[260px_1fr] lg:gap-[88px] lg:py-0">
      <div class="text-center" data-fade="up">
        <img :src="founderPortrait" alt="Tony Ng" width="612" height="612" class="mx-auto size-[204px] object-cover">
        <h2 class="text-h-4 mt-8">Tony Ng</h2>
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
