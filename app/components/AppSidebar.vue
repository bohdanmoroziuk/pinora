<template>
  <aside class="flex flex-col justify-between items-center sticky top-0 w-18 p-4 border-r border-[#e9e9e9]">
    <nav class="flex flex-col items-center gap-6">
      <ULink
        class="w-12 h-12 flex justify-center items-center hover:bg-[#f1f1f1]"
        to="/"
      >
        <AppLogo class="size-6" />
      </ULink>

      <ULink
        class="w-12 h-12 flex justify-center items-center hover:bg-[#f1f1f1]"
        to="/"
      >
        <UIcon
          class="size-5"
          name="i-lucide-home"
        />
      </ULink>

      <ULink
        class="w-12 h-12 flex justify-center items-center hover:bg-[#f1f1f1]"
        to="/"
      >
        <UIcon
          class="size-5"
          name="i-lucide-square-plus"
        />
      </ULink>

      <ULink
        class="w-12 h-12 flex justify-center items-center hover:bg-[#f1f1f1]"
        to="/"
      >
        <UIcon
          class="size-5"
          name="i-lucide-bell"
        />
      </ULink>

      <ULink
        class="w-12 h-12 flex justify-center items-center hover:bg-[#f1f1f1]"
        to="/"
      >
        <UIcon
          class="size-5"
          name="i-lucide-message-circle-more"
        />
      </ULink>
    </nav>

    <ULink
      class="w-12 h-12 flex justify-center items-center hover:bg-[#f1f1f1]"
      to="/"
    >
      <UIcon
        class="size-5"
        name="i-lucide-settings"
      />
    </ULink>
  </aside>
</template>
