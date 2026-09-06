<script setup>
const props = defineProps({
  error: Object
})
const { error } = toRefs(props)
</script>

<template>
  <div>
    <NuxtLoadingIndicator color="#110AFF" />
    <LayoutHeader />
    <Error :error="error" />
  </div>
</template>
