<template>
  <div>
    <h3>UserView</h3>
    <!-- 바로 접근하는 건 권장 X -->
    <p>{{ $route.params.id }}</p>  <!-- 여기서 -->

    <!-- 이렇게 하자 -->
    <p>{{ userId }}</p>  <!-- 여기로 갈 때는 바뀌지 않음 -->
                         <!-- 이미 불러온 페이지에 대해 컴포넌트만 바꾸는 것이므로 (새로고침 X) -->
    <p>{{ userId2 }}</p>
    <hr>
    <button @click="goHome">홈으로</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';

  const route = useRoute();
  const router = useRouter();
  
  const userId = ref(route.params.id)
  const userId2 = ref(route.params.id)
  watch(() => route.params.id, (newId) => {
    userId.value = newId
  })

  const goHome = function () {
    // 직접 URL 경로를 작성할 수 있음
    // router.push('/')

    // 이름으로도 호출할 수 있음       // '뒤로가기' 눌러보면서
    // router.push({name: 'about'})  // push와 replace의
    router.replace({name: 'home'})   // 차이점 확실히 알아두기
  }

  onBeforeRouteLeave(() => {
    const answer = confirm("정말로 떠나실 건가요?");
    console.log(answer)
    // if (!answer) return false;
    return answer
  })

onBeforeRouteUpdate((to) => {
    userId2.value = to.params.id
  })



</script>

<style scoped>

</style>