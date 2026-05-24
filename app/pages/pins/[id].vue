<script setup lang="ts">
// const route = useRoute()

// const id = computed(() => route.params.id as string)
</script>

<template>
  <div class="flex justify-center items-start gap-8">
    <UButton
      to="/"
      icon="i-lucide-arrow-left"
      size="md"
      color="neutral"
      variant="link"
    />

    <div class="flex flex-col md:flex-row w-full xl:w-[70%] md:max-h-[80vh] mr-4 xl:mr-0 border border-[#e9e9e9] rounded-4xl overflow-hidden">
      <div class="flex-1 bg-[#c0a68c]">
        <PinImage
          :width="736"
          alt=""
          src="/pins/pin1.jpeg"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="flex flex-col flex-1 gap-8 p-4 overflow-hidden">
        <PinInteractions />

        <ULink
          class="flex items-center gap-2"
          to="/user/profile"
        >
          <img
            class="w-8 h-8 rounded-full"
            src="/icons/no-avatar.png"
            alt="User avatar"
          >

          <span class="text-sm">
            John Doe
          </span>
        </ULink>

        <PinComments />
      </div>
    </div>
  </div>
</template>
