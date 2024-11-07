<template>
  <div>
    <ParentPage/>
  </div>
</template>


<script setup>
  import ChildPage from "./components/ChildPage.vue";
  import ParentPage from "./components/ParentPage.vue";
</script>


<style scoped>
  div {
    border-style: solid;
    border-width: 0.5px;
    margin: 1%;
    padding: 1%;
  }
</style>
