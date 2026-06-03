<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const isLoggedIn = ref(true)

const items = ref<DropdownMenuItem[]>([
  {
    label: 'Profile',
  },
  {
    label: 'Settings',
  },
  {
    label: 'Logout',
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
      <img
        class="w-4 h-4 cursor-pointer"
        src="/icons/arrow.svg"
        alt=""
      >
    </UDropdownMenu>
  </div>

  <ULink
    v-else
    class="leading-none text-nowrap text-muted px-4 py-2 rounded-4xl hover:bg-[#f1f1f1]"
    to="/"
  >
    Login / Sign up
  </ULink>
</template>
