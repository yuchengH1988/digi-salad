<script setup>
const props = defineProps({
  isMenuOpen: { type: Boolean, default: false }
})

const emit = defineEmits(['toggle-menu'])

const isPastHero = ref(false)
const isScrolledHeader = computed(() => isPastHero.value && !props.isMenuOpen)
let heroObserver

const handleHomeClick = () => {
  if (props.isMenuOpen) {
    emit('toggle-menu')
  }
}

onMounted(() => {
  const hero = document.querySelector('#top')

  if (!hero) return

  heroObserver = new IntersectionObserver(([entry]) => {
    isPastHero.value = !entry.isIntersecting && entry.boundingClientRect.bottom <= 0
  })
  heroObserver.observe(hero)
})

onBeforeUnmount(() => {
  heroObserver?.disconnect()
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-75  transition-colors duration-300"
    :class="isScrolledHeader ? 'bg-white/90' : 'bg-transparent'"
  >
    <div class="flex items-center justify-between px-5 md:px-10 lg:pl-20 lg:pr-15 h-20 lg:h-[100px]">
      <a
        href="#top"
        class="w-24 transition-[opacity,color] duration-300 md:w-[120px] h-auto"
        :class="[
          isMenuOpen || isPastHero ? 'visible opacity-100' : 'invisible opacity-0',
          isScrolledHeader ? 'text-accent' : 'text-white'
        ]"
        aria-label="digiSalad home"
        @click="handleHomeClick"
      >
        <AtomIcon name="icon" is-full />
      </a>
      <div class="ml-auto flex items-center gap-5 md:gap-7">
        <a v-show="!isMenuOpen" href="#showcase" class="text-btn-2 hidden h-[41px] items-center rounded-full bg-gradient-to-r from-[#4ee5ea] to-[#26d0a8] px-4 transition-opacity hover:opacity-85 md:flex text-white">
          Start your project
        </a>
        <button
          type="button"
          class="grid h-[30px] w-[30px] place-items-center transition-colors hover:text-accent"
          :class="isScrolledHeader ? 'text-purple' : 'text-white'"
          :aria-expanded="isMenuOpen"
          aria-controls="site-menu"
          :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
          @click="emit('toggle-menu')"
        >
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
