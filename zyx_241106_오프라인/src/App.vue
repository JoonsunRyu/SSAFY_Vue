<template>
  <div>
    <h2>App.vue 파일임</h2>
    <button :class="{dark:!flag[0], light:flag[0]}" @click="show(0)">0번 컴포넌트</button>
    <button :class="{dark:!flag[1], light:flag[1]}" @click="show(1)">1번 컴포넌트</button>
    <button :class="{dark:!flag[2], light:flag[2]}" @click="show(2)">2번 컴포넌트</button>
    <main-page v-show="flag[0]"></main-page>
    <Main2Page v-show="flag[1]"/>
    <Main3Page v-show="flag[2]"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MainPage from "./components/MainPage.vue";
import Main2Page from "./components/Main2Page.vue";
import Main3Page from "./components/Main3Page.vue";

const flag = ref([true, true, true])
const show = function (idx) {
  flag.value[idx] = !flag.value[idx];
}

</script>

<style scoped>
.light {
  background-color: lightblue;
}

.dark {
  background-color: brown;
}
</style>