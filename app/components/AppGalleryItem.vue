<script setup lang="ts">
const props = defineProps<{
  item: {
    id: number
    media: string
    width: number
    height: number
  }
}>()

const rootStyle = computed(() => {
  return {
    gridRowEnd: `span ${Math.ceil(props.item.height / 100)}`,
  }
})
</script>

<template>
  <div
    class="flex"
    :style="rootStyle"
  >
    <img
      class="w-full rounded-2xl object-cover"
      :src="item.media"
      alt=""
    >
  </div>
</template>
