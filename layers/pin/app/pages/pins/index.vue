<script setup lang="ts">
import { usePinsStore } from '#layers/pin/app/stores/pins.store'

const pinsStore = usePinsStore()
const { pins } = storeToRefs(pinsStore)
const { loadPins } = pinsStore

await callOnce('pins', loadPins)
</script>

<template>
  <PinGrid :pins />
</template>
