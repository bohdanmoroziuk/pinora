<script setup lang="ts">
import { useCommentsStore } from '#layers/comment/app/stores/comments.store'

const props = defineProps<{
  pinId: string
}>()

const commentsStore = useCommentsStore()
const { comments } = storeToRefs(commentsStore)
const { loadComments } = commentsStore

watch(() => props.pinId, async (pinId) => {
  await loadComments(pinId)
}, {
  immediate: true,
})

const root = useTemplateRef('root')

const scrollToTop = async () => {
  await nextTick()

  root.value?.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

watch(
  () => comments.value.length,
  async (newLength, oldLength) => {
    if (newLength === 0) {
      return
    }

    if (oldLength === 0 || newLength > oldLength) {
      await scrollToTop()
    }
  })
</script>

<template>
  <div
    ref="root"
    class="flex flex-col flex-1 gap-4 overflow-y-auto"
  >
    <p v-if="comments.length">
      {{ comments.length }} comments
    </p>

    <p v-else>
      No comments
    </p>

    <CommentCard
      v-for="comment of comments"
      :key="comment.id"
      :comment
    />
  </div>
</template>
