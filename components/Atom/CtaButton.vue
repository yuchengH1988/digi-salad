<script setup>
defineProps({
  label: { type: String, required: true },
  href: { type: String, default: '#' },
  tone: { type: String, default: 'accent' },
  pill: { type: Boolean, default: false }
})
</script>

<template>
  <a
    :href="href"
    class="text-btn-1 group inline-flex items-center justify-center gap-5 transition-colors"
    :class="[
      pill ? 'h-[58px] rounded-full border-2 px-8 lg:text-dt/btn/2' : 'h-[86px] px-6',
      tone === 'outline' ? 'border-white text-white hover:bg-white hover:text-accent' : tone === 'purple' ? 'bg-purple text-white hover:bg-ink' : 'bg-accent text-white hover:bg-purple'
    ]"
  >
    <span>{{ label }}</span>
    <span v-if="!pill" class="h-[2px] w-[52px] bg-current transition-transform group-hover:translate-x-1"></span>
  </a>
</template>
