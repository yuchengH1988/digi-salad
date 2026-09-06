<script setup>
const { $gsap } = useNuxtApp()
const mainRef = ref(null)

onMounted(() => {
  if (mainRef.value) {
    $gsap.fromTo(
      mainRef.value,
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 0.5
      }
    )
  }
})
</script>

<template>
  <div ref="mainRef" class="layout opacity-0">
    <div class="fixed inset-0 z-[-2] bg-bgc"></div>
    <slot />
    <div id="subField" class="relative z-[500]">
    </div>
    <div id="cookieField" class="relative z-[1000]">
    </div>
    <div id="sideField" class="relative z-[1001]">
    </div>
    <div id="modalsField" class="relative z-[1002]">
    </div>
    <div id="loadingField" class="relative z-[1005]">
    </div>
  </div>
</template>
