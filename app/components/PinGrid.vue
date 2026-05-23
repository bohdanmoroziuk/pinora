<script setup lang="ts">
defineProps<{
  pins: Pin[]
}>()
</script>

<template>
  <div class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 auto-rows-[10px] gap-4">
    <PinCard
      v-for="pin in pins"
      :key="pin.id"
      :pin
    />
  </div>
</template>
