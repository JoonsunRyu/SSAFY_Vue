<script setup>
import {RouterLink, RouterView} from 'vue-router'

</script>


<template>
  
  <div>
    <h2>Quiz 퀴즈</h2>
    <p>여기는 퀴즈의 나라! 놀라운 퀴즈들이 기다리고 있어요. 지금 바로 도전해보세요!</p>
    
    <div>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/quiz">Quiz</RouterLink>
    </div>
    <RouterView />
  </div>
</template>


<style scoped>

</style>
