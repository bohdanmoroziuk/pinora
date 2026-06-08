<script setup lang="ts">
import type { LoginInput } from '#layers/auth/app/types/auth'

defineProps<{
  error?: string
}>()

const emit = defineEmits<{
  submit: [input: LoginInput]
}>()

const state = reactive<LoginInput>({
  email: '',
  password: '',
})

const submit = () => {
  emit('submit', state)
}
</script>

<template>
  <UForm
    class="w-full flex flex-col gap-4"
    @submit="submit"
  >
    <UFormField
      label="Email"
      name="email"
    >
      <UInput
        v-model="state.email"
        type="email"
        class="w-full"
      />
    </UFormField>

    <UFormField
      label="Password"
      name="password"
    >
      <UInput
        v-model="state.password"
        class="w-full"
        type="password"
      />
    </UFormField>

    <UButton
      class="rounded-3xl"
      type="submit"
      block
    >
      Login
    </UButton>

    <p class="text-sm text-center">
      Don't have an account? <ULink to="/auth/signup">Sign up</ULink>
    </p>

    <p
      v-if="error"
      class="text-error text-center"
    >
      {{ error }}
    </p>
  </UForm>
</template>
