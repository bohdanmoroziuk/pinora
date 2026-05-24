<script setup lang="ts">
import UserProfileTabs from '~/components/UserProfileTabs.vue'

const pins: Pin[] = [
  {
    id: 1,
    media: '/pins/pin1.jpeg',
    width: 1260,
    height: 1000,
  },
  {
    id: 2,
    media: '/pins/pin2.jpeg',
    width: 1260,
    height: 1400,
  },
  {
    id: 3,
    media: '/pins/pin3.jpeg',
    width: 1260,
    height: 1400,
  },
]
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <img
      class="w-25 h-25 rounded-full object-cover"
      src="/icons/no-avatar.png"
      alt=""
    >

    <h1 class="text-4xl font-medium">
      John Doe
    </h1>

    <p class="text-muted font-light">
      @johndoe
    </p>

    <p class="font-medium">
      10 followers · 20 following
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
          color="error"
          variant="solid"
        >
          Follow
        </UButton>
      </div>

      <UButton
        icon="i-lucide-more-horizontal"
        size="md"
        color="neutral"
        variant="link"
      />
    </div>

    <UserProfileTabs>
      <template #created>
        <PinGrid :pins />
      </template>

      <template #saved>
        <PinCollectionGrid />
      </template>
    </UserProfileTabs>
  </div>
</template>
