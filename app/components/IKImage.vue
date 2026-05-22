<script setup lang="ts">
import { Image } from '@imagekit/vue'

defineProps<{
  src: string
  alt?: string
  width: number
  height: number
}>()

const config = useRuntimeConfig()

const urlEndpoint = config.public.imagekitUrlEndpoint
</script>

<template>
  <Image
    :url-endpoint="urlEndpoint"
    :src="src"
    :transformation="[{ width, height }]"
    :alt="alt"
    loading="lazy"
  />
</template>
