<script setup lang="ts">
import { usePinsStore } from '#layers/pin/app/stores/pins.store'

const pinsStore = usePinsStore()
const { feedPins } = storeToRefs(pinsStore)
const { loadFeedPins } = pinsStore

await callOnce('feed-pins', loadFeedPins)
</script>

<template>
  <PinGrid :pins="feedPins" />
</template>
