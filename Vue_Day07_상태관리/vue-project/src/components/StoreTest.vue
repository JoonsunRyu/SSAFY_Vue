<template>
  <!-- 기록용(App.vue 내용) -->
  <div>
    <h2>StoreTest</h2>
    <!-- State에 저장되어 있는 count 보고 싶어 -->
    <p>state: {{ store.count }}</p>
    
    <!-- Getters 쓰고 싶어 -->
    <p>getter : {{ store.doubleCount }}</p>
    <button @click="store.increment()">증가</button>  <!-- 중앙 저장소에 있는 -->
    <button @click="increment2">증가2</button>        <!-- 데이터를 변화시키는 것 -->
  </div>
</template>

<script setup>
  import { useCounterStore } from './stores/counter';
  const store = useCounterStore();
  console.log(store.count)

const increment2 = function () {
    store.increment()
  }
</script>