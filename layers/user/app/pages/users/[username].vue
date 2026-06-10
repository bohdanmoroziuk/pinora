<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'
import { usePinsStore } from '#layers/pin/app/stores/pins.store'
import { useUsersStore } from '#layers/user/app/stores/users.store'
import { useBoardsStore } from '#layers/board/app/stores/boards.store'

const toast = useToast()
const route = useRoute()
const username = route.params.username

invariant(typeof username === 'string', 400, 'Username not provided')

const usersStore = useUsersStore()
const { userProfile } = storeToRefs(usersStore)
const { loadUserProfileByUsername, toggleUserFollow } = usersStore

const followButtonProps = computed<Partial<ButtonProps>>(() => {
  if (userProfile.value?.isFollowing) {
    return {
      label: 'Unfollow',
      color: 'neutral',
    }
  }

  return {
    label: 'Follow',
    color: 'error',
  }
})

const handleUserFollowToggle = async () => {
  if (!userProfile.value) return

  try {
    await toggleUserFollow(userProfile.value.username)
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

await loadUserProfileByUsername(username)

invariant(userProfile, 404, 'User not found')

const pinsStore = usePinsStore()
const { userPins } = storeToRefs(pinsStore)
const { loadUserPins } = pinsStore

await loadUserPins(userProfile.value!.id)

const boardsStore = useBoardsStore()
const { userBoards } = storeToRefs(boardsStore)
const { loadUserBoards } = boardsStore

await loadUserBoards(userProfile.value!.id)
</script>

<template>
  <div
    v-if="userProfile"
    class="flex flex-col items-center gap-4"
  >
    <UserAvatar
      class="w-25 h-25"
      :src="userProfile.avatar"
      :alt="userProfile.fullName"
    />

    <h1 class="text-4xl font-medium">
      {{ userProfile.fullName }}
    </h1>

    <p class="text-muted font-light">
      @{{ userProfile.username }}
    </p>

    <p class="font-medium">
      {{ userProfile.followersCount }} followers · {{ userProfile.followingCount }} following
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
          variant="solid"
          v-bind="followButtonProps"
          @click="handleUserFollowToggle"
        />
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
