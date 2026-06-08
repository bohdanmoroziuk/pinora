<script setup lang="ts">
import type { SignupInput } from '#layers/auth/app/types/auth'

defineProps<{
  error?: string
}>()

const emit = defineEmits<{
  submit: [input: SignupInput]
}>()

const state = reactive<SignupInput>({
  fullName: '',
  username: '',
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
      label="Name"
      name="name"
    >
      <UInput
        v-model="state.fullName"
        class="w-full"
      />
    </UFormField>

    <UFormField
      label="Username"
      name="username"
    >
      <UInput
        v-model="state.username"
        class="w-full"
      />
    </UFormField>

    <UFormField
      label="Email"
      name="email"
    >
      <UInput
        v-model="state.email"
        class="w-full"
      />
    </UFormField>

    <UFormField
      label="Password"
      name="password"
    >
      <UInput
        v-model="state.password"
        type="password"
        class="w-full"
      />
    </UFormField>

    <UButton
      class="rounded-3xl"
      type="submit"
      block
    >
      Signup
    </UButton>

    <p class="text-sm text-center">
      Already have an account? <ULink to="/auth/login">Login</ULink>
    </p>

    <p
      v-if="error"
      class="text-error text-center"
    >
      {{ error }}
    </p>
  </UForm>
</template>
