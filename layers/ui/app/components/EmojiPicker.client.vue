<script setup lang="ts">
const Picker = defineAsyncComponent(() => import('vue3-emoji-picker'))

const emit = defineEmits<{
  select: [emoji: Emoji]
}>()

defineSlots<{
  trigger(props: {
    isOpen: boolean
    toggle: (value?: boolean) => void
  }): unknown
}>()

const root = useTemplateRef('root')

const [isOpen, toggle] = useToggle()

const hidePicker = () => {
  toggle(false)
}

const onEmojiSelect = (emoji: Emoji) => {
  emit('select', emoji)
  hidePicker()
}

useClickOutside(root, hidePicker)
</script>

<template>
  <div
    ref="root"
    class="relative"
  >
    <div
      v-if="isOpen"
      class="absolute right-0 bottom-8"
    >
      <Picker
        native
        @select="onEmojiSelect"
      />
    </div>

    <slot
      name="trigger"
      :is-open="isOpen"
      :toggle="toggle"
    >
      <div
        class="cursor-pointer text-xl"
        @click="toggle()"
      >
        😊
      </div>
    </slot>
  </div>
</template>

<style src="vue3-emoji-picker/css" />
