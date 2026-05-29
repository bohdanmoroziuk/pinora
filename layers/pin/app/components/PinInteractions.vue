<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-2">
      <UButton
        icon="i-mdi-heart-outline"
        size="md"
        color="error"
        variant="link"
      />

      <p>
        273
      </p>

      <UButton
        icon="i-lucide-share"
        size="md"
        color="neutral"
        variant="link"
      />

      <UButton
        icon="i-lucide-more-horizontal"
        size="md"
        color="neutral"
        variant="link"
      />
    </div>

    <UButton
      class="rounded-3xl"
      size="md"
      color="error"
      variant="solid"
    >
      Save
    </UButton>
  </div>
</template>
