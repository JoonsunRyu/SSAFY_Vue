<script setup>
</script>

<template>
  <div class="app-container">
    <!-- Header 영역 -->
    <header class="header">
      <h1 class="title">명함 관리 페이지</h1>
      <p>명함을 관리하는 페이지입니다. 여기에 명함 목록이 표시됩니다.</p>
    </header>

    <!-- Main 영역 -->
    <main class="main-content">
      <div id="article">

      </div>
    </main>

    <!-- Footer 영역 -->
    <footer class="footer">
      <p class="copyright">  ⓒ 2024 My Business Cards</p>
    </footer>
  </div>
</template>

<style scoped>
  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .header {
    padding: 0px 20px 20px 20px;
    text-align: center;
  }

  .title {
    background-color: rgb(0, 132, 255);
    color: white;
    padding: 40px 25px 40px 25px;
    display: inline-block;
  }

  .main-content {
    flex: 1;
    padding: 20px;
    background-color: #fff;
  }

  .footer {
    background-color: #f4f4f4;
    padding: 10px;
    text-align: center;
    border-top: 2px solid #ddd;
  }

  .copyright {
    vertical-align: bottom;
    padding-top: 20px;
    margin: 5px;
  }
</style>
