<script setup>
const pageRef = ref(null)

useScrollReveal(pageRef, { once: false })
</script>

<template>
  <main ref="pageRef" class="min-h-screen overflow-hidden bg-page font-default">
    <SectionHero />
    <SectionAboutVideo />
    <SectionAwards />
    <SectionServices />
    <SectionFounder />
    <SectionWork />
    <SectionShowcase />
  </main>
</template>
