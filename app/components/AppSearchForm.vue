<script setup lang="ts">
const emit = defineEmits<{
  submit: [search: string]
}>()

const state = reactive({
  search: '',
})

const resetState = () => {
  state.search = ''
}

const submit = () => {
  emit('submit', state.search)
  resetState()
}
</script>

<template>
  <UForm
    class="flex-1"
    @submit.enter="submit"
  >
    <UInput
      v-model.trim="state.search"
      class="w-full"
      icon="i-lucide-search"
      size="md"
      variant="outline"
      placeholder="Search"
    />
  </UForm>
</template>
