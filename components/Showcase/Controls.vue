<script setup>
defineProps({
  current: { type: Number, required: true },
  total: { type: Number, required: true }
})

defineEmits(['previous', 'next'])
</script>

<template>
  <div class="pointer-events-none absolute inset-0 z-3">
    <AtomCarouselPagination
      class="absolute right-4 top-24 sm:right-8 md:right-[7.92%] lg:top-[170px]"
      :current="current"
      :total="total"
    />

    <button type="button" aria-label="Previous project" class="carousel-button carousel-button--prev pointer-events-auto" @click="$emit('previous')">
      <span class="absolute left-0 top-[2px] size-[53px] rounded-full bg-accent"></span>
      <AtomIcon name="carousel-prev" is-full class="relative h-6 w-[15.5px] rotate-180 text-white" />
    </button>
    <button type="button" aria-label="Next project" class="carousel-button carousel-button--next pointer-events-auto" @click="$emit('next')">
      <span class="absolute left-0 top-[2px] size-[53px] rounded-full bg-accent"></span>
      <AtomIcon name="carousel-next" is-full class="relative h-6 w-[15.5px] text-white" />
    </button>
  </div>
</template>

<style scoped>
.carousel-button {
  position: absolute;
  top: 162px;
  right: 16px;
  display: grid;
  width: 56px;
  height: 56px;
  place-items: center;
  transition: transform 180ms ease, opacity 180ms ease;
}

.carousel-button--next {
  top: 230px;
}

@media (min-width: 480px) {
  .carousel-button {
    right: 32px;
  }
}

@media (min-width: 768px) {
  .carousel-button {
    right: 7.92%;
  }
}

@media (min-width: 1024px) {
  .carousel-button {
    top: 449px;
    transform: translateY(-50%);
  }

  .carousel-button--prev {
    right: auto;
    left: 6.8%;
  }

  .carousel-button--next {
    right: 6.8%;
  }

  .carousel-button:hover {
    transform: translateY(-50%) scale(1.06);
  }

  .carousel-button:active {
    transform: translateY(-50%) scale(0.96);
  }
}
</style>
