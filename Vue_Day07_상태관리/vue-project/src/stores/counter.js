import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // 상태
  const count = ref(10)

  // getter
  const doubleCount = computed(() => count.value * 2)

  // Action
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
