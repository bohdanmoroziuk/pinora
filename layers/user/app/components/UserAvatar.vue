<script setup lang="ts">
const {
  src,
  alt = 'User avatar',
  fallback = '/icons/no-avatar.png',
} = defineProps<{
  src?: Nullable<string>
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
