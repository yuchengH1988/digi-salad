<script setup>
defineProps({
  title: { type: String, required: true },
  light: { type: Boolean, default: false },
  align: { type: String, default: 'center' }
})
</script>

<template>
  <div :class="align === 'left' ? 'items-start' : 'items-center'" class="flex flex-col">
    <h2 class="text-h-1" :class="light ? 'text-white' : 'text-ink'">
      {{ title }}<span class="ml-2 text-coral">.</span>
    </h2>
    <AtomIcon name="wave" is-full class="mt-2 h-[13px] w-[191px] text-accent" />
  </div>
</template>
