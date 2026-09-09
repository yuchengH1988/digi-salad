<script setup>
import cabbage from '~/assets/images/food/cabbage.png'
import carrot from '~/assets/images/food/carrot.png'
import cheese from '~/assets/images/food/cheese.png'
import cucumber from '~/assets/images/food/cucumber.png'
import tomato from '~/assets/images/food/tomato.png'
import menuAbout from '~/assets/images/menu/menu-about.webp'
import menuCareer from '~/assets/images/menu/menu-career.webp'
import menuInsights from '~/assets/images/menu/menu-insights.webp'
import menuService from '~/assets/images/menu/menu-service.webp'
import menuWork from '~/assets/images/menu/menu-work.webp'
import hero from '~/assets/images/hero.webp'

const props = defineProps({ open: { type: Boolean, default: false } })
const emit = defineEmits(['close'])
const { $gsap } = useNuxtApp()
const menuRef = ref(null)
const prefersReducedMotion = useReducedMotion()
let previouslyFocusedElement
let menuTimeline

const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

const beforeEnter = (element) => {
  menuTimeline?.kill()
  const cards = element.querySelectorAll('.menu-card')

  $gsap.set(element, { autoAlpha: 0 })
  $gsap.set(cards, { autoAlpha: 0, y: 24 })
}

const enter = (element, done) => {
  const cards = element.querySelectorAll('.menu-card')

  if (prefersReducedMotion.value) {
    $gsap.set([element, ...cards], { autoAlpha: 1, y: 0 })
    done()
    return
  }

  menuTimeline = $gsap.timeline({ onComplete: done })
    .to(element, {
      autoAlpha: 1,
      duration: 0.18,
      ease: 'power1.out'
    })
    .to(cards, {
      autoAlpha: 1,
      y: 0,
      duration: 0.45,
      ease: 'power3.out',
      stagger: 0.1
    }, 0.18)
}

const leave = (element, done) => {
  menuTimeline?.kill()

  if (prefersReducedMotion.value) {
    done()
    return
  }

  menuTimeline = $gsap.timeline({ onComplete: done }).to(element, {
    autoAlpha: 0,
    duration: 0.16,
    ease: 'power1.in'
  })
}

const cancelMenuTransition = () => {
  menuTimeline?.kill()
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    emit('close')
    return
  }

  if (event.key !== 'Tab') return

  const focusableElements = [...menuRef.value.querySelectorAll(focusableSelector)]
  const firstElement = focusableElements[0]
  const lastElement = focusableElements.at(-1)

  if (!firstElement || !lastElement) return

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault()
    lastElement.focus()
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault()
    firstElement.focus()
  }
}

watch(() => props.open, async (isOpen) => {
  if (isOpen) {
    previouslyFocusedElement = document.activeElement
    await nextTick()
    menuRef.value?.querySelector(focusableSelector)?.focus()
  } else {
    await nextTick()
    previouslyFocusedElement?.focus()
    previouslyFocusedElement = null
  }
})

onBeforeUnmount(() => {
  menuTimeline?.kill()
  previouslyFocusedElement?.focus()
})

const menuItems = [
  { label: 'About us', eyebrow: 'Empowering brands', href: '#about', image: menuAbout, icon: cabbage, tone: 'bg-accent', cardClass: 'lg:h-[210px]', iconClass: 'h-[64px] w-[48px] lg:h-[62px] lg:w-[42px]', dot: 'bg-coral' },
  { label: 'Works', eyebrow: 'Case studies', href: '#showcase', image: menuWork, icon: tomato, tone: 'bg-coral', cardClass: 'lg:h-[320px]', iconClass: 'h-[64px] w-[64px] lg:h-[61px] lg:w-[61px]', dot: 'bg-accent' },
  { label: 'Careers', eyebrow: 'Be cool with us', href: '#career', image: menuCareer, icon: cheese, tone: 'bg-yellow', cardClass: 'lg:h-[430px]', iconClass: 'h-[48px] w-[92px] lg:h-[47px] lg:w-[92px]', dot: 'bg-coral' },
  { label: 'Insights', eyebrow: 'Our strategies', href: '#work', image: menuInsights, icon: cucumber, tone: 'bg-[#26d0a8]', cardClass: 'lg:h-[282px]', iconClass: 'h-[72px] w-[32px] lg:h-[79px] lg:w-[25px]', dot: 'bg-coral' },
  { label: 'Services', eyebrow: 'Areas of expertise', href: '#services', image: menuService, icon: carrot, tone: 'bg-purple', cardClass: 'lg:h-[320px]', iconClass: 'h-[64px] w-[48px] lg:h-[62px] lg:w-[42px]', dot: 'bg-coral' }
]

const menuColumns = [
  menuItems.slice(0, 2),
  menuItems.slice(2, 4),
  [
    menuItems[4],
    {
      label: 'Contact',
      eyebrow: 'Start your journey with us',
      href: '#showcase',
      tone: 'bg-white',
      cardClass: 'lg:h-[210px]',
      dot: 'bg-coral',
      isContact: true
    }
  ]
]
</script>

<template>
  <Transition
    :css="false"
    @before-enter="beforeEnter"
    @enter="enter"
    @enter-cancelled="cancelMenuTransition"
    @leave="leave"
    @leave-cancelled="cancelMenuTransition"
  >
    <aside
      v-if="open"
      id="site-menu"
      ref="menuRef"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      class="fixed inset-0 z-100 flex items-start justify-center overflow-x-hidden overflow-y-auto bg-accent text-white lg:items-center"
      @keydown="handleKeydown"
    >
      <img :src="hero" alt="" class="pointer-events-none fixed inset-0 size-full object-cover opacity-25">
      <div class="pointer-events-none fixed inset-0 bg-[linear-gradient(180deg,#585880_3.61%,#26C6D0_95.7%)] opacity-60"></div>
      <button
        type="button"
        class="pointer-events-auto fixed right-4 top-4 z-[110] grid size-11 touch-manipulation place-items-center text-white transition-colors hover:text-accent lg:right-12 lg:top-7"
        aria-label="Close menu"
        @click="emit('close')"
      >
        <span class="relative block size-[22px]">
          <span class="absolute left-0 top-1/2 h-[2px] w-[22px] rotate-45 bg-current"></span>
          <span class="absolute left-0 top-1/2 h-[2px] w-[22px] -rotate-45 bg-current"></span>
        </span>
      </button>
      <a
        href="#top"
        class="fixed left-5 top-5 z-[105] h-[42px] w-24 text-white lg:left-20 lg:top-6 lg:h-[53px] lg:w-[120px]"
        aria-label="digiSalad home"
        @click="emit('close')"
      >
        <AtomIcon name="icon" is-full />
      </a>
      <nav class="menu-canvas relative mx-auto grid min-h-full w-full content-start grid-cols-1 gap-4 px-5 py-24 sm:grid-cols-2 sm:gap-6 lg:flex lg:min-h-0 lg:w-auto lg:min-w-[80vw] lg:items-start lg:gap-12 lg:py-10" aria-label="Primary">
        <div
          v-for="(column, columnIndex) in menuColumns"
          :key="columnIndex"
          class="contents lg:flex lg:flex-col lg:gap-12"
          :class="[
            columnIndex === 1 ? 'lg:min-w-[22.1vw]' : 'lg:min-w-[29vw] lg:pt-[60px]'
          ]"
        >
          <a
            v-for="item in column"
            :key="item.label"
            :href="item.href"
            class="menu-card group relative flex overflow-hidden rounded-[30px] p-7 sm:flex-col lg:min-h-0"
            :class="[
              item.cardClass,
              item.isContact ? 'text-ink sm:justify-center' : 'text-white sm:justify-end'
            ]"
            @click="emit('close')"
          >
            <div class="absolute inset-0" :class="item.tone"></div>
            <img v-if="item.image" :src="item.image" alt="" class="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105">
            <div class="relative z-1 flex sm:flex-col gap-6  items-start"
              :class="[
                columnIndex === 0 ? 'lg:gap-5 lg:flex-row' : 'lg:flex-col lg:gap-0'
              ]">
              <img v-if="item.icon" :src="item.icon" alt="" class="shrink-0 object-contain"
              :class="[
                item.iconClass, columnIndex === 0 ? 'lg:mb-0' : 'lg:mb-3']">
              <span class="menu-copy block">
                <span class="text-mini-2 block">{{ item.eyebrow }}</span>
                <strong class="text-h-3 relative mt-1 inline-flex" :class="item.isContact ? 'text-accent' : ''">{{ item.label }}
                  <span class="absolute -right-4 bottom-2 size-[10px] rounded-full" :class="item.dot"></span>
                </strong>
              </span>
            </div>
          </a>
        </div>
      </nav>
    </aside>
  </Transition>
</template>
