<script setup lang="ts">
import type { LoginInput } from '#layers/auth/server/types/auth'
import { useAuthStore } from '#layers/auth/app/stores/auth.store'

definePageMeta({
  layout: 'auth',
})

const error = ref('')

const authStore = useAuthStore()
const { authUser } = storeToRefs(authStore)
const { loginUser } = authStore

const handleUserLogin = async (input: LoginInput) => {
  try {
    await loginUser(input)
    await navigateTo(`/users/${authUser.value!.username}`)
  }
  catch (e) {
    error.value = getErrorMessage(e)
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-8 p-8 rounded-3xl shadow-sm">
    <AppLogo class="size-9" />

    <h1 class="font-normal">
      Login to your account
    </h1>

    <LoginForm
      :error
      @submit="handleUserLogin"
    />
  </div>
</template>
