<script setup lang="ts">
const props = defineProps<{
  item: {
    id: number
    media: string
    width: number
    height: number
  }
}>()

const imageWidth = 375
const imageHeight = (imageWidth * props.item.height) / props.item.width

const rootStyle = computed(() => {
  return {
    gridRowEnd: `span ${Math.ceil(props.item.height / 100)}`,
  }
})

const goToPinPage = () => {
  navigateTo(`/pins/${props.item.id}`)
}
</script>

<template>
  <div
    class="flex cursor-pointer relative group"
    :style="rootStyle"
  >
    <IKImage
      :src="item.media"
      :width="imageWidth"
      :height="imageHeight"
      class="w-full rounded-2xl object-cover"
      alt=""
    />

    <div
      class="hidden group-hover:flex flex-col justify-between items-end rounded-2xl p-4 absolute inset-0 bg-black/30"
      @click="goToPinPage"
    >
      <UButton
        size="md"
        color="error"
        variant="solid"
      >
        Save
      </UButton>

      <div class="flex items-center gap-2">
        <UButton
          size="md"
          icon="i-lucide-share"
          variant="solid"
        />

        <UButton
          size="md"
          icon="i-lucide-more-horizontal"
          color="info"
          variant="solid"
        />
      </div>
    </div>
  </div>
</template>
