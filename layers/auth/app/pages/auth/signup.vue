<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})

const state = reactive({
  name: '',
  username: '',
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
      Create an account
    </h1>

    <UForm class="w-full flex flex-col gap-4">
      <UFormField
        label="name"
        name="name"
      >
        <UInput
          v-model="state.name"
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
  </div>
</template>
