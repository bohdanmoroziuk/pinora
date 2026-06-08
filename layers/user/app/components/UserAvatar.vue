<script setup lang="ts">
const {
  src,
  alt = 'User avatar',
  fallback = '/icons/no-avatar.png',
} = defineProps<{
  src?: string | null
  alt?: string
  fallback?: string
}>()
</script>

<template>
  <img
    class="rounded-full object-cover"
    :src="src || fallback"
    :alt
  >
</template>
