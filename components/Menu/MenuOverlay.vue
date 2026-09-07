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
  { label: 'About us', eyebrow: 'Empowering brands', href: '#about', image: menuAbout, icon: cabbage, tone: 'bg-accent', position: 'menu-about', dot: 'bg-coral' },
  { label: 'Works', eyebrow: 'Case studies', href: '#showcase', image: menuWork, icon: tomato, tone: 'bg-coral', position: 'menu-works', dot: 'bg-accent' },
  { label: 'Careers', eyebrow: 'Be cool with us', href: '#career', image: menuCareer, icon: cheese, tone: 'bg-yellow', position: 'menu-careers', dot: 'bg-coral' },
  { label: 'Insights', eyebrow: 'Our strategies', href: '#work', image: menuInsights, icon: cucumber, tone: 'bg-[#26d0a8]', position: 'menu-insights', dot: 'bg-coral' },
  { label: 'Services', eyebrow: 'Areas of expertise', href: '#services', image: menuService, icon: carrot, tone: 'bg-purple', position: 'menu-services', dot: 'bg-coral' }
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
          <div class="absolute inset-0" :class="item.tone"></div>
          <img :src="item.image" alt="" class="menu-background absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105">
          <img :src="item.icon" alt="" class="menu-art absolute object-contain">
          <span class="menu-copy absolute">
            <span class="block text-[16px] uppercase tracking-[1.8px]">{{ item.eyebrow }}</span>
            <strong class="relative mt-1 block text-[32px] uppercase leading-none tracking-[3.64px]">{{ item.label }}
              <div class="absolute right-0 bottom-1 size-[10px] rounded-full" :class="[item.dot]"></div>
            </strong>
          </span>
        </a>

        <a href="#showcase" class="menu-contact absolute overflow-hidden rounded-[30px] bg-white text-ink max-xl:relative max-xl:inset-auto max-xl:aspect-[4/3]" @click="emit('close')">
          <span class="absolute bottom-[67px] left-[42px] right-5">
            <span class="block text-[16px] uppercase tracking-[1.8px]">Start your journey with us</span>
            <strong class="inline-flex relative mt-1 text-[32px] uppercase leading-none tracking-[3.64px] text-accent">Contact
              <div class="absolute -right-4 bottom-1 size-[10px] rounded-full bg-coral"></div>
            </strong>
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

.menu-about .menu-art { left: 37px; top: 74px; width: 42px; height: 62px; }
.menu-about .menu-copy { left: 106px; top: 82px; width: 207px; }
.menu-works .menu-art { left: 28px; top: 198px; width: 61px; height: 61px; }
.menu-works .menu-copy { left: 106px; top: 194px; width: 150px; }
.menu-careers .menu-art { left: 31px; top: 240px; width: 92px; height: 47px; }
.menu-careers .menu-copy { left: 37px; top: 315px; width: 184px; }
.menu-insights .menu-art { left: 37px; top: 73px; width: 25px; height: 79px; }
.menu-insights .menu-copy { left: 31px; top: 167px; width: 191px; }
.menu-services .menu-art { left: 48px; top: 123px; width: 36px; height: 67px; }
.menu-services .menu-copy { left: 42px; top: 205px; width: 195px; }

@media (max-width: 1279px) {
  .menu-card,
  .menu-contact {
    width: auto;
    height: auto;
  }

  .menu-card .menu-art {
    left: 28px;
    top: auto;
    bottom: 48px;
    width: 42px;
    height: 62px;
  }

  .menu-card .menu-copy {
    left: 92px;
    top: auto;
    right: 24px;
    bottom: 48px;
    width: auto;
  }
}
</style>
