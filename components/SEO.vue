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
const url = computed(() => props.url ? `${config.public.APP_URL}/${props.url}` : config.public.APP_URL)

useServerSeoMeta({
  title,
  description,
  ogTitle: title,
  ogSiteName: title,
  ogUrl: url,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description
})
useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogSiteName: title,
  ogUrl: url,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description
})
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta
      hid="description"
      name="description"
      :content="description"
    />
  </Head>
</template>
