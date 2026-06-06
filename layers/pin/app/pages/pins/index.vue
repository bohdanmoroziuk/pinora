<script setup lang="ts">
import { useRouteQuery } from '@vueuse/router'
import { usePinsStore } from '#layers/pin/app/stores/pins.store'

const pinsStore = usePinsStore()
const { feedPins } = storeToRefs(pinsStore)
const { loadFeedPins } = pinsStore

const boardId = useRouteQuery<string | undefined>('boardId', undefined)

const filter = computed(() => {
  return {
    boardId: boardId.value,
  }
})

watch(filter, async (filter) => {
  await loadFeedPins(filter)
}, {
  immediate: true,
  deep: true,
})
</script>

<template>
  <PinGrid :pins="feedPins" />
</template>
