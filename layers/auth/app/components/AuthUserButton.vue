<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import { useAuthStore } from '#layers/auth/app/stores/auth.store'

const toast = useToast()

const authStore = useAuthStore()
const { authUser, isAuthenticated } = storeToRefs(authStore)
const { logoutUser } = authStore

const goToProfilePage = () => {
  return navigateTo(`/users/${authUser.value!.username}`)
}

const handleUserLogout = async () => {
  try {
    await logoutUser()
    await navigateTo('/auth/login')
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

const items = ref<DropdownMenuItem[]>([
  {
    label: 'Profile',
    onSelect: goToProfilePage,
  },
  {
    label: 'Settings',
  },
  {
    label: 'Logout',
    onSelect: handleUserLogout,
  },
])
</script>

<template>
  <div
    v-if="isAuthenticated"
    class="hidden sm:flex items-center gap-4"
  >
    <UserAvatar
      :src="authUser!.avatar"
      :alt="authUser!.fullName"
      class="w-9 h-9"
    />

    <UDropdownMenu
      :items="items"
      :content="{
        align: 'start',
        side: 'bottom',
        sideOffset: 8,
      }"
      :ui="{
        content: 'w-24',
      }"
    >
      <UIcon
        name="i-lucide-chevron-down"
        class="size-6 cursor-pointer"
      />
    </UDropdownMenu>
  </div>

  <ULink
    v-else
    class="leading-none text-nowrap text-muted px-4 py-2 rounded-4xl hover:bg-[#f1f1f1]"
    to="/auth/login"
  >
    Login / Sign up
  </ULink>
</template>
