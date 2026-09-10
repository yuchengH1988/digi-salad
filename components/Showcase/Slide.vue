<script setup>
defineProps({
  slide: { type: Object, required: true }
})
</script>

<template>
  <div class="mx-auto flex h-auto max-w-[1440px] flex-col px-5 py-24 lg:flex-row lg:px-20 lg:pb-[248px] lg:pt-[200px] xl:pl-[min(14vw,160px)] xl:pr-36">
    <div class="relative mx-auto max-w-[480px] pr-20 lg:w-2/5 lg:max-w-none lg:pr-0 xl:w-1/2">
      <img :src="slide.image" :alt="slide.imageAlt" width="2400" height="2400" decoding="async" class="aspect-square w-full rounded-[30px] object-cover">
      <AtomCtaButton
        class="absolute -bottom-16 right-[-20px] !h-[86px] !w-auto lg:-bottom-20 lg:right-[calc(50%-150px)] lg:!h-[140px] lg:!w-[300px] xl:-right-20 xl:bottom-[-100px]"
        label="View project"
        :href="slide.href"
      />
    </div>

    <div class="relative mx-auto max-w-[620px] pb-12 pt-[100px] lg:w-3/5 lg:max-w-none lg:px-12 lg:py-12 xl:w-1/2 xl:py-15 xl:pl-[72px] xl:pr-0">
      <p class="text-mini-1 pl-[6px]">{{ slide.eyebrow }}</p>
      <div class="relative mt-5 h-[41px]">
        <h2 class="max-sm:text-[24px] text-h-3 relative z-1 inline-block pl-[6px]">
          {{ slide.title }}
          <span class="absolute bottom-1 sm:-bottom-0.5 -right-6 size-[10px] rounded-full bg-coral lg:-right-8 lg:bottom-1" />
        </h2>
        <span class="absolute bottom-3 sm:bottom-[6px] left-0 h-2 w-[305px] sm:w-[344px] max-w-full bg-accent lg:w-[401px]"></span>
      </div>
      <p class="text-body-2 mt-10">{{ slide.description }}</p>
    </div>
  </div>
</template>
