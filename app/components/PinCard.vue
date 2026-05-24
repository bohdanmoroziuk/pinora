<script setup lang="ts">
const props = defineProps<{
  pin: Pin
}>()

const pinWidth = 375
const pinHeight = (pinWidth * props.pin.height) / props.pin.width

const rootStyle = computed(() => {
  return {
    gridRowEnd: `span ${Math.ceil(props.pin.height / 100)}`,
  }
})

const goToPinPage = () => {
  navigateTo(`/pins/${props.pin.id}`)
}
</script>

<template>
  <div
    class="flex cursor-pointer relative group"
    :style="rootStyle"
  >
    <PinImage
      :src="pin.media"
      :width="pinWidth"
      :height="pinHeight"
      class="w-full rounded-2xl object-cover"
      alt=""
    />

    <div
      class="hidden group-hover:flex flex-col justify-between items-end rounded-2xl p-4 absolute inset-0 bg-black/30"
      @click="goToPinPage"
    >
      <UButton
        class="rounded-3xl"
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
