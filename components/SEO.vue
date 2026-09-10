<script setup>
const config = useRuntimeConfig()
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  desc: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    default: ''
  }
})

const title = computed(() => props.title || config.public.APP_TITLE)
const description = computed(() => props.desc || config.public.APP_DESC)
const siteUrl = computed(() => String(config.public.APP_URL).replace(/\/$/, ''))
const url = computed(() => props.url
  ? `${siteUrl.value}/${props.url.replace(/^\//, '')}`
  : siteUrl.value)

useSeoMeta({
  title,
  description,
  author: 'digiSalad',
  keywords: 'digital agency, web design, UX design, digital experience, Hong Kong',
  ogTitle: title,
  ogSiteName: title,
  ogUrl: url,
  ogDescription: description,
  ogType: 'website',
  twitterTitle: title,
  twitterDescription: description,
  twitterCard: 'summary'
})

useHead(() => ({
  link: [
    { rel: 'canonical', href: url.value }
  ]
}))
</script>

<template>
  <slot />
</template>
