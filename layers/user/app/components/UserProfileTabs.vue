<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'

const route = useRoute()
const router = useRouter()

const items = ref<TabsItem[]>([
  {
    label: 'Created',
    value: 'created',
    slot: 'created',
  },
  {
    label: 'Saved',
    value: 'saved',
    slot: 'saved',
  },
])

const active = computed({
  get() {
    return (route.query.tab as string) || 'created'
  },
  set(tab) {
    router.push({
      path: '/user/profile',
      query: { tab },
      hash: '#tabs',
    })
  },
})
</script>

<template>
  <UTabs
    v-model="active"
    :items="items"
    color="neutral"
    variant="link"
    class="w-full"
  >
    <template #created>
      <div class="mt-3">
        <slot name="created" />
      </div>
    </template>

    <template #saved>
      <div class="mt-3">
        <slot name="saved" />
      </div>
    </template>
  </UTabs>
</template>
