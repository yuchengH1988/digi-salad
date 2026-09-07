<script setup>
defineProps({
  current: { type: Number, required: true },
  total: { type: Number, required: true }
})

const formatNumber = value => String(value).padStart(2, '0')
</script>

<template>
  <div class="text-mini-3 relative h-[47px] w-[54px] text-white" aria-live="polite">
    <span class="absolute left-0 top-0">{{ formatNumber(current) }}</span>
    <AtomIcon name="carousel-slash" is-full class="absolute left-[10px] top-[7px] size-[34px] text-accent" />
    <span class="absolute bottom-0 right-0">{{ formatNumber(total) }}</span>
  </div>
</template>
