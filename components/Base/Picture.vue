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
    default: 'lazy',
    validator: value => ['eager', 'lazy'].includes(value)
  },
  width: {
    type: [Number, String],
    default: undefined
  },
  height: {
    type: [Number, String],
    default: undefined
  },
  sizes: {
    type: String,
    default: ''
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
      :width="width"
      :height="height"
      :sizes="sizes || undefined"
      decoding="async"
      :class="imgClass"
    >
  </picture>
</template>
