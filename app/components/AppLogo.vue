<script setup lang="ts">
const { productName, logoUrl } = useAppConfig()
</script>

<template>
  <img
    :src="logoUrl"
    :alt="productName"
  >
</template>
