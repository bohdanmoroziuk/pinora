<script setup lang="ts">
import { formatTimeAgo } from '@vueuse/core'
import type { Board } from '#layers/board/shared/types/board'

defineProps<{
  board: Board
}>()
</script>

<template>
  <ULink
    as="div"
    class="mb-8 cursor-pointer"
    :to="{ path: '/pins', query: { boardId: board.id } }"
  >
    <PinImage
      class="w-full object-cover rounded-2xl"
      :src="board.coverMedia!"
    />

    <div class="flex flex-col gap-2">
      <h2 class="font-medium">
        {{ board.title }}
      </h2>

      <p class="text-xs text-muted">
        {{ board.pinsCount }} pins · {{ formatTimeAgo(new Date(board.createdAt)) }}
      </p>
    </div>
  </ULink>
</template>
