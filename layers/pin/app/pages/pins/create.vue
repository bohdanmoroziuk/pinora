<script setup lang="ts">
const state = reactive({
  title: '',
  description: '',
  link: '',
  board: '',
  tags: '',
})

const boardItems = ref([
  'Board 1',
  'Board 2',
  'Board 3',
])
</script>

<template>
  <div>
    <header class="border-t border-b border-[#e9e9e9] py-4 flex items-center justify-between">
      <h1 class="text-xl font-medium">
        Create Pin
      </h1>

      <UButton
        class="rounded-3xl"
        size="md"
        color="error"
        variant="solid"
      >
        Save
      </UButton>
    </header>

    <main class="mt-8 flex flex-col xl:flex-row items-center xl:items-start mb-16 xl:mb-0 justify-center gap-16">
      <div class="bg-[#e9e9e9] cursor-pointer text-lg flex items-center justify-center rounded-3xl border-2 border-dashed border-[#ddd] w-full xs:w-93.75 h-143.5 p-4 relative">
        <div class="flex flex-col items-center gap-4">
          <UIcon name="i-lucide-upload" />
          <p>
            Choose a file
          </p>
        </div>

        <p class="absolute bottom-8 text-sm text-center text-muted">
          We recommend using high quality .jpg files less than 20 MB or
          .mp4 files less than 200 MB.
        </p>
      </div>

      <UForm class="flex flex-col gap-8 w-full md:w-146">
        <UFormField
          label="Title"
          name="title"
        >
          <UInput
            v-model="state.title"
            placeholder="Add a title"
            class="w-full"
          />
        </UFormField>

        <UFormField
          label="Description"
          name="description"
        >
          <UTextarea
            v-model="state.description"
            placeholder="Add a description"
            class="w-full"
            :rows="6"
            autoresize
          />
        </UFormField>

        <UFormField
          label="Link"
          name="link"
        >
          <UInput
            v-model="state.link"
            placeholder="Add a link"
            class="w-full"
          />
        </UFormField>

        <UFormField
          label="Board"
          name="board"
        >
          <USelect
            v-model="state.board"
            :items="boardItems"
            placeholder="Choose a board"
            class="w-full"
          />
        </UFormField>

        <UFormField
          label="Tagged topics"
          name="tags"
          help="Don't worry, people won't see your tags"
        >
          <UInput
            v-model="state.tags"
            placeholder="Add tags"
            class="w-full"
          />
        </UFormField>

        <UButton
          type="submit"
          block
        >
          Submit
        </UButton>
      </UForm>
    </main>
  </div>
</template>
