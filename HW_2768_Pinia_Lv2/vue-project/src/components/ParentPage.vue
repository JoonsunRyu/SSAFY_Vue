<template>
  <div>
    <div>
      <h3>부모 컴포넌트</h3>
      <p>{{ parentData.father }}, {{ parentData.mother }}</p>
    </div>
    <ChildPage />
  </div>
</template>

<script setup>
  import ChildPage from "@/components/ChildPage.vue";

  defineProps({
    parentData: {
      type: Object,
      required: true,
    }
  })
</script>

<style scoped>

</style>