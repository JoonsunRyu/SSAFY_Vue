<template>
  <div>
    <h3>역대순위</h3>
  </div>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import axios from "axios";

  const movieList = ref([]);

  onMounted(() => {
    const api_key = import.meta.env.VITE_TMDB_API_KEY
    const url = `https://api.themoviedb.org/3/movie/top_rated`
    // const params
  })


  
</script>

<style scoped>

</style>