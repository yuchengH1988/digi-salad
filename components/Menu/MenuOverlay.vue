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

defineProps({ open: { type: Boolean, default: false } })
const emit = defineEmits(['close'])

const menuItems = [
  { label: 'About us', eyebrow: 'Empowering brands', href: '#about', image: menuAbout, icon: cabbage, tone: 'bg-accent/85', position: 'menu-about' },
  { label: 'Works', eyebrow: 'Case studies', href: '#showcase', image: menuWork, icon: tomato, tone: 'bg-coral/80', position: 'menu-works' },
  { label: 'Careers', eyebrow: 'Be cool with us', href: '#career', image: menuCareer, icon: cheese, tone: 'bg-yellow/90', position: 'menu-careers' },
  { label: 'Insights', eyebrow: 'Our strategies', href: '#work', image: menuInsights, icon: cucumber, tone: 'bg-[#20d3a7]/85', position: 'menu-insights' },
  { label: 'Services', eyebrow: 'Areas of expertise', href: '#services', image: menuService, icon: carrot, tone: 'bg-purple/85', position: 'menu-services' }
]
</script>

<template>
  <Transition enter-active-class="transition duration-500 ease-out" enter-from-class="-translate-y-full" enter-to-class="translate-y-0" leave-active-class="transition duration-300 ease-in" leave-from-class="translate-y-0" leave-to-class="-translate-y-full">
    <aside v-if="open" id="site-menu" class="fixed inset-0 z-50 overflow-y-auto bg-accent text-white" aria-label="Site menu">
      <img :src="hero" alt="" class="fixed inset-0 size-full object-cover opacity-25">
      <div class="fixed inset-0 bg-gradient-to-b from-purple/80 via-accent/75 to-accent/95"></div>

      <nav class="menu-canvas relative mx-auto mt-[92px] h-[752px] w-[1158px] max-xl:mt-[120px] max-xl:grid max-xl:h-auto max-xl:w-auto max-xl:max-w-[900px] max-xl:grid-cols-2 max-xl:gap-5 max-xl:px-5 max-md:grid-cols-1 max-md:pb-12" aria-label="Primary">
        <a
          v-for="item in menuItems"
          :key="item.label"
          :href="item.href"
          class="menu-card group absolute overflow-hidden rounded-[30px] max-xl:relative max-xl:inset-auto max-xl:aspect-[4/3] max-xl:size-auto"
          :class="item.position"
          @click="emit('close')"
        >
          <img :src="item.image" alt="" class="absolute inset-0 size-full object-cover opacity-45 transition-transform duration-700 group-hover:scale-105">
          <span class="absolute inset-0" :class="item.tone"></span>
          <span class="menu-copy absolute bottom-[47px] left-[106px] right-7 max-md:left-7">
            <img :src="item.icon" alt="" class="absolute bottom-[-1px] left-[-58px] max-h-[61px] w-[42px] object-contain max-md:hidden">
            <span class="block text-[16px] uppercase tracking-[1.8px]">{{ item.eyebrow }}</span>
            <strong class="mt-1 block text-[32px] uppercase leading-none tracking-[3.64px]">{{ item.label }}<span class="ml-1 text-coral">.</span></strong>
          </span>
        </a>

        <a href="#showcase" class="menu-contact absolute overflow-hidden rounded-[30px] bg-white text-ink max-xl:relative max-xl:inset-auto max-xl:aspect-[4/3]" @click="emit('close')">
          <span class="absolute bottom-[67px] left-[42px] right-5">
            <span class="block text-[16px] uppercase tracking-[1.8px]">Start your journey with us</span>
            <strong class="mt-1 block text-[32px] uppercase leading-none tracking-[3.64px] text-accent">Contact<span class="ml-1 text-coral">.</span></strong>
          </span>
        </a>
      </nav>
    </aside>
  </Transition>
</template>

<style scoped>
.menu-about { left: 0; top: 60px; width: 380px; height: 210px; }
.menu-works { left: 0; top: 310px; width: 380px; height: 320px; }
.menu-careers { left: 422px; top: 0; width: 290px; height: 430px; }
.menu-insights { left: 422px; top: 470px; width: 290px; height: 282px; }
.menu-services { left: 754px; top: 60px; width: 380px; height: 320px; }
.menu-contact { left: 754px; top: 420px; width: 380px; height: 210px; }
.menu-about .menu-copy,
.menu-works .menu-copy { bottom: 59px; }

@media (max-width: 1279px) {
  .menu-card,
  .menu-contact {
    width: auto;
    height: auto;
  }
}
</style>
