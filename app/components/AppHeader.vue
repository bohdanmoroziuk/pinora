<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const changeSearchQuery = (search: string) => {
  if (route.path === '/pins') {
    router.replace({
      ...route,
      query: {
        ...route.query,
        search,
      },
    })
  }
  else {
    router.push({
      path: '/pins',
      query: {
        ...route.query,
        search,
      },
    })
  }
}
</script>

<template>
  <header class="flex items-center gap-4 py-4">
    <AppSearchForm @submit="changeSearchQuery" />

    <AppUserButton />
  </header>
</template>
