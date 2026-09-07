<script setup>
defineProps({
  isMenuOpen: { type: Boolean, default: false }
})

const emit = defineEmits(['toggle-menu'])
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-75 text-white">
    <div class="flex items-start px-5 pt-6 md:px-[60px] md:pt-[41px]">
      <a v-show="isMenuOpen" href="#top" class="w-[116px] md:w-[140px]" aria-label="digiSalad home" @click="emit('toggle-menu')">
        <AtomIcon name="icon" is-full class="text-white" />
      </a>
      <div class="ml-auto flex items-center gap-5 md:gap-7">
        <a v-show="!isMenuOpen" href="#showcase" class="hidden h-[41px] items-center rounded-full bg-gradient-to-r from-[#4ee5ea] to-[#26d0a8] px-4 text-[14px] font-bold uppercase tracking-[1.14px] transition-opacity hover:opacity-85 md:flex">
          Start your project
        </a>
        <button type="button" class="mt-[7px] grid h-[30px] w-[30px] place-items-center transition-colors hover:text-accent" :aria-expanded="isMenuOpen" aria-controls="site-menu" :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'" @click="emit('toggle-menu')">
          <span v-if="isMenuOpen" class="relative block size-[22px]">
            <span class="absolute left-0 top-1/2 h-[2px] w-[22px] rotate-45 bg-current"></span>
            <span class="absolute left-0 top-1/2 h-[2px] w-[22px] -rotate-45 bg-current"></span>
          </span>
          <AtomIcon v-else name="menu" class="h-[22px] w-[30px]" />
        </button>
      </div>
    </div>
  </header>
</template>
