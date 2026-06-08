<script setup lang="ts">
const state = reactive({
  email: '',
})
</script>

<template>
  <UForm class="flex items-center gap-4 bg-[#f1f1f1] p-1 pr-3 rounded-3xl">
    <UInput
      v-model="state.email"
      class="flex-1"
      variant="none"
      placeholder="Add a comment"
    />

    <EmojiPicker />
  </UForm>
</template>
