<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import { useAuthStore } from '#layers/auth/app/stores/auth.store'

const toast = useToast()

const authStore = useAuthStore()
const { isLoggedIn } = storeToRefs(authStore)
const { logoutUser } = authStore

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
    v-if="isLoggedIn"
    class="hidden sm:flex items-center gap-4"
  >
    <UserAvatar class="w-9 h-9" />

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
