<script setup lang="ts">
import type { Emoji } from '#layers/ui/shared/types/emoji'
import { useCommentsStore } from '#layers/comment/app/stores/comments.store'

const props = defineProps<{
  pinId: string
}>()

const toast = useToast()
const { createComment } = useCommentsStore()

const state = reactive({
  description: '',
})

const resetState = () => {
  state.description = ''
}

const addEmoji = (emoji: Emoji) => {
  state.description = state.description.concat(' ', emoji.i)
}

const handleCommentCreate = async () => {
  try {
    await createComment(props.pinId, toValue(state))
    resetState()
  }
  catch (error) {
    toast.add({
      title: 'Uh oh! Something went wrong.',
      description: getErrorMessage(error),
      color: 'error',
      progress: false,
    })
  }
}
</script>

<template>
  <UForm
    class="flex items-center gap-4 bg-[#f1f1f1] p-1 pr-3 rounded-3xl"
    @submit.enter="handleCommentCreate"
  >
    <UInput
      v-model="state.description"
      class="flex-1"
      variant="none"
      placeholder="Add a comment"
    />

    <EmojiPicker @select="addEmoji" />
  </UForm>
</template>
