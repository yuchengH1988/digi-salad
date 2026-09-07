<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  mobileSrc: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  imgClass: {
    type: String,
    default: ''
  },
  loading: {
    type: String,
    default: 'lazy'
  }
})
</script>

<template>
  <picture>
    <source v-if="mobileSrc" media="(max-width: 767px)" :srcset="mobileSrc">
    <img
      :src="src"
      :alt="alt"
      :loading="loading"
      decoding="async"
      :class="imgClass"
    >
  </picture>
</template>
