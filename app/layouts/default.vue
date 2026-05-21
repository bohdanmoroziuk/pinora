<template>
  <div class="flex gap-4 w-full min-h-screen">
    <AppSidebar />

    <main class="flex-1 mr-4">
      <AppHeader />

      <slot />
    </main>
  </div>
</template>
