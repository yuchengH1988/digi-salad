<script setup>
import apple from '~/assets/images/food/apple.png'
import cabbage from '~/assets/images/food/cabbage.png'
import cheese from '~/assets/images/food/cheese.png'
import corn from '~/assets/images/food/corn.png'
import cucumbers from '~/assets/images/food/cucumbers.png'
import kiwi from '~/assets/images/food/kiwi.png'
import orange from '~/assets/images/food/orange.png'
import tomato from '~/assets/images/food/tomato.png'
import watermelon from '~/assets/images/food/watermelon.png'

const description = 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.'
const services = [
  { title: 'UX Design', icon: cabbage },
  { title: 'UI Design', icon: tomato },
  { title: 'Website Development', icon: cheese },
  { title: 'Mobile App Development', icon: cucumbers },
  { title: 'Ecommerce', icon: orange },
  { title: 'Customer Loyalty', icon: kiwi },
  { title: 'Digital Transformation', icon: watermelon },
  { title: 'Digital Marketing', icon: corn },
  { title: 'Branding', icon: apple, action: 'Branding' }
]
</script>

<template>
  <section id="services" class="rounded-tr-[50px] bg-accent pb-[433px] pt-[316px] text-white max-md:rounded-tr-[30px] max-md:pb-32 max-md:pt-[170px]">
    <div class="mx-auto max-w-[1134px] px-5">
      <AtomSectionTitle title="Our ingradients" light />
      <p class="text-body-1 mx-auto mt-[43px] max-w-[1007px] text-center">
        Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
      </p>
      <div class="mt-[30px] flex justify-center">
        <AtomCtaButton label="Our services" href="#ingredients" tone="purple" />
      </div>

      <div id="ingredients" class="mt-[85px] grid grid-cols-3 gap-x-[50px] gap-y-[60px] max-lg:gap-x-5 max-md:grid-cols-2 max-sm:grid-cols-1">
        <article v-for="service in services" :key="service.title" class="flex min-h-[409px] flex-col items-center text-center" data-fade="up">
          <div class="grid size-[108px] place-items-center rounded-full bg-white">
            <img :src="service.icon" alt="" class="max-h-[77px] max-w-[82px] object-contain">
          </div>
          <h3 class="text-h-3 mt-5 min-h-[39px] max-w-[280px]">{{ service.title }}</h3>
          <p class="text-body-1 mt-4">{{ description }}</p>
          <AtomCtaButton class="mt-auto" :label="service.action || 'View more'" href="#showcase" tone="outline" pill />
        </article>
      </div>
      <div class="mt-[79px] text-center">
        <a href="#ingredients" class="text-h-3 border-b-[6px] border-yellow px-2">View more digiSalad’s ingradients</a>
      </div>
    </div>
  </section>
</template>
