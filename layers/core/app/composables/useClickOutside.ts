import type { Ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'

type EventType = 'click' | 'touchend'

export const useClickOutside = <T extends HTMLElement>(
  element: Ref<T | null>,
  callback: (event: MouseEvent | TouchEvent) => void,
  events: EventType[] = ['click', 'touchend'],
) => {
  const listener = (event: MouseEvent | TouchEvent) => {
    const target = event.target as Node | null

    if (!element.value) return
    if (!target) return
    if (element.value.contains(target)) return

    callback(event)
  }

  onMounted(() => {
    events.forEach((eventName) => {
      document.addEventListener(eventName, listener)
    })
  })

  onUnmounted(() => {
    events.forEach((eventName) => {
      document.removeEventListener(eventName, listener)
    })
  })
}
