<script setup lang="ts">
import { usePinsStore } from '#layers/pin/app/stores/pins.store'

const route = useRoute()
const pinStore = usePinsStore()

const { pin } = storeToRefs(pinStore)
const { loadPinById } = pinStore

const id = route.params.id

invariant(typeof id === 'string', 400, 'Id not provided')

await loadPinById(id)

invariant(pin.value != null, 404, 'Pin not found')
</script>

<template>
  <div
    v-if="pin"
    class="flex justify-center items-start gap-8"
  >
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
          :src="pin.media"
          :width="736"
          alt=""
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
