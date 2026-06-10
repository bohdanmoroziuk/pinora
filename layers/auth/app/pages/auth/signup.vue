<script setup lang="ts">
import type { SignupInput } from '#layers/auth/app/types/auth'
import { getErrorMessage } from '~~/layers/core/shared/utils/error'
import { useAuthStore } from '#layers/auth/app/stores/auth.store'

definePageMeta({
  layout: 'auth',
})

const authStore = useAuthStore()
const { authUser } = storeToRefs(authStore)
const { signupUser } = authStore

const error = ref('')

const handleUserSignup = async (input: SignupInput) => {
  try {
    await signupUser(input)
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
      Create an account
    </h1>

    <SignupForm
      :error
      @submit="handleUserSignup"
    />
  </div>
</template>
