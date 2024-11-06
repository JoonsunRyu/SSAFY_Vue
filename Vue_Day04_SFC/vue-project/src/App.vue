<template>
  <div>
    <h2>App.vue</h2>
    <MyComponent/>
    <my-component></my-component>
  </div>
</template>

<script setup>
// import MyComponent from './components/MyComponent.vue';  // 상대경로
import MyComponent from '@/components/MyComponent.vue';     // 절대경로
</script>

<script scoped>

</script>