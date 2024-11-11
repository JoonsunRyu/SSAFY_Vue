<template>
  <div>
    <h2>Pinia 연습하기</h2>
    <!-- 부모 컴포넌트 반복 -->
    <div v-for="(parent, index) in familyInfo" :key="index">
      <ParentPage :parentData="family"/>
    </div>
  </div>
</template>

<script setup>
  import { useCounterStore } from "@/stores/family.js";
  import ParentPage from "@/components/ParentPage.vue";

  const store = useCounterStore();
  const familyInfo = store.familyInfo;
</script>

<style scoped>

</style>