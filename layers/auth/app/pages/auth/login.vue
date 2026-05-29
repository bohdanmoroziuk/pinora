<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})

const state = reactive({
  email: '',
  password: '',
})

const error = ref('')
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-8 p-8 rounded-3xl shadow-sm">
    <img
      class="size-9"
      src="/icons/logo.png"
      alt="Logo"
    >

    <h1 class="font-normal">
      Login to your account
    </h1>

    <UForm class="w-full flex flex-col gap-4">
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
  </div>
</template>
