<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  isFull: {
    type: Boolean,
    default: false
  }
})

const svgName = computed(() => {
  return props.name.includes('/') ? `#${props.name}` : `#/${props.name}`
})
</script>

<template>
  <svg
    :width="isFull ? '100%' : 24"
    :height="isFull ? '100%' : 24"
    aria-hidden="true"
  >
    <use :href="svgName" fill="currentColor" />
  </svg>
</template>
