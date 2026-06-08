<script setup lang="ts">
import { usePinsStore } from '#layers/pin/app/stores/pins.store'
import { useUsersStore } from '#layers/user/app/stores/users.store'
import { useBoardsStore } from '#layers/board/app/stores/boards.store'

const route = useRoute()
const username = route.params.username

invariant(typeof username === 'string', 400, 'Username not provided')

const usersStore = useUsersStore()
const { user } = storeToRefs(usersStore)
const { loadUserByUsername } = usersStore

await loadUserByUsername(username)

invariant(user, 404, 'User not found')

const pinsStore = usePinsStore()
const { userPins } = storeToRefs(pinsStore)
const { loadUserPins } = pinsStore

await loadUserPins(user.value!.id)

const boardsStore = useBoardsStore()
const { userBoards } = storeToRefs(boardsStore)
const { loadUserBoards } = boardsStore

await loadUserBoards(user.value!.id)
</script>

<template>
  <div
    v-if="user"
    class="flex flex-col items-center gap-4"
  >
    <UserAvatar
      class="w-25 h-25"
      :src="user.avatar"
      :alt="user.fullName"
    />

    <h1 class="text-4xl font-medium">
      {{ user.fullName }}
    </h1>

    <p class="text-muted font-light">
      @{{ user.username }}
    </p>

    <p class="font-medium">
      10 followers · 20 following
    </p>

    <div class="flex items-center gap-8">
      <UButton
        icon="i-lucide-share"
        size="md"
        color="neutral"
        variant="link"
      />

      <div class="flex items-center gap-4">
        <UButton
          class="rounded-3xl"
          size="md"
          color="neutral"
          variant="soft"
        >
          Message
        </UButton>

        <UButton
          class="rounded-3xl"
          size="md"
          color="error"
          variant="solid"
        >
          Follow
        </UButton>
      </div>

      <UButton
        icon="i-lucide-more-horizontal"
        size="md"
        color="neutral"
        variant="link"
      />
    </div>

    <UserProfileTabs :username>
      <template #created>
        <PinGrid :pins="userPins" />
      </template>

      <template #saved>
        <BoardGrid :boards="userBoards" />
      </template>
    </UserProfileTabs>
  </div>
</template>
