<script setup>
const props = defineProps({
  label: { type: String, required: true },
  href: { type: String, default: '' },
  tone: {
    type: String,
    default: 'accent',
    validator: value => ['accent', 'purple', 'outline'].includes(value)
  },
  pill: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false }
})

const tag = computed(() => props.href ? 'a' : 'button')

const toneClasses = {
  accent: 'bg-accent text-white hover:bg-purple',
  purple: 'bg-purple text-white hover:bg-ink',
  outline: 'border-white text-white hover:bg-white hover:text-accent'
}
</script>

<template>
  <component
    :is="tag"
    :href="href || undefined"
    :type="tag === 'button' ? 'button' : undefined"
    :disabled="tag === 'button' ? disabled : undefined"
    :aria-disabled="disabled || undefined"
    :tabindex="disabled ? -1 : undefined"
    class="text-btn-1 group inline-flex items-center justify-center gap-5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current disabled:pointer-events-none disabled:opacity-50"
    :class="[
      pill ? 'h-[58px] rounded-full border-2 px-8 lg:text-dt/btn/2' : 'h-[86px] px-6',
      toneClasses[tone]
    ]"
    @click="disabled && $event.preventDefault()"
  >
    <span>{{ label }}</span>
    <span v-if="!pill" class="h-[2px] w-[52px] bg-current transition-transform group-hover:translate-x-1"></span>
  </component>
</template>
