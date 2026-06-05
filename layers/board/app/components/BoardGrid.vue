<script setup lang="ts">
import type { Board } from '#layers/board/shared/types/board'

defineProps<{
  boards: Board[]
}>()
</script>

<template>
  <div class="w-full grid grid-cols-7 gap-4">
    <BoardCard
      v-for="board of boards"
      :key="board.id"
      :board
    />
  </div>
</template>
