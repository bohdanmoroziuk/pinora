<script setup lang="ts">
import { Image } from '@imagekit/vue'

const props = defineProps<{
  src: string
  alt?: string
  width?: number
  height?: number
}>()

const config = useRuntimeConfig()

const urlEndpoint = config.public.imagekitUrlEndpoint

const transformation = computed(() => {
  return [{
    ...(props.width && { width: props.width }),
    ...(props.height && { height: props.height }),
  }]
})
</script>

<template>
  <Image
    :url-endpoint
    :transformation
    :src
    :alt
    loading="lazy"
  />
</template>
