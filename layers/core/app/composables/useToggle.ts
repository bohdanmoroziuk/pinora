import { shallowRef } from 'vue'

export const useToggle = (initialValue = false) => {
  const _value = shallowRef(initialValue)

  const toggle = (value?: boolean) => {
    if (value === undefined) {
      _value.value = !_value.value
    }
    else {
      _value.value = value
    }
  }

  return [_value, toggle] as const
}
