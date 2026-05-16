<template>
  <aside class="flex flex-col justify-between items-center sticky top-0 w-18 p-4 border-r border-[#e9e9e9]">
    <nav class="flex flex-col items-center gap-6">
      <ULink
        class="w-12 h-12 flex justify-center items-center hover:bg-[#f1f1f1]"
        to="/"
      >
        <img
          class="w-6 h-6"
          src="/icons/logo.png"
          alt="Logo"
        >
      </ULink>

      <ULink
        class="w-12 h-12 flex justify-center items-center hover:bg-[#f1f1f1]"
        to="/"
      >
        <img
          src="/icons/home.svg"
          alt=""
        >
      </ULink>

      <ULink
        class="w-12 h-12 flex justify-center items-center hover:bg-[#f1f1f1]"
        to="/"
      >
        <img
          src="/icons/create.svg"
          alt=""
        >
      </ULink>

      <ULink
        class="w-12 h-12 flex justify-center items-center hover:bg-[#f1f1f1]"
        to="/"
      >
        <img
          src="/icons/updates.svg"
          alt=""
        >
      </ULink>

      <ULink
        class="w-12 h-12 flex justify-center items-center hover:bg-[#f1f1f1]"
        to="/"
      >
        <img
          src="/icons/messages.svg"
          alt=""
        >
      </ULink>
    </nav>

    <ULink
      class="w-12 h-12 flex justify-center items-center hover:bg-[#f1f1f1]"
      to="/"
    >
      <img
        src="/icons/settings.svg"
        alt=""
      >
    </ULink>
  </aside>
</template>
