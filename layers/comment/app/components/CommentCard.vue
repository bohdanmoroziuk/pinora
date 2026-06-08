<script setup lang="ts">
import { formatTimeAgo } from '@vueuse/core'
import type { CommentDetails } from '#layers/comment/shared/types/comment'

defineProps<{
  comment: CommentDetails
}>()
</script>

<template>
  <div class="flex gap-4">
    <UserAvatar
      :src="comment.user.avatar"
      :alt="comment.user.fullName"
      class="w-8 h-8"
    />

    <div class="flex flex-col gap-1">
      <p class="text-[14px] font-bold">
        {{ comment.user.fullName }}
      </p>
      <p class="text-[14px]">
        {{ comment.description }}
      </p>
      <p class="text-[12px] text-muted">
        {{ formatTimeAgo(new Date(comment.createdAt)) }}
      </p>
    </div>
  </div>
</template>
