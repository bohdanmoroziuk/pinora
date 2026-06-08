<script setup lang="ts">
defineProps<{
  pinId: string
}>()
</script>

<template>
  <div class="flex flex-col flex-1 gap-4 min-h-0">
    <CommentList :pin-id />

    <CommentForm :pin-id />
  </div>
</template>
