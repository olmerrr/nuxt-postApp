<template>
  <div class="error-page">
    <h1 class="title">404</h1>
    <p class="description">Page not found</p>
    <p>Back to <a href="/">Main page</a></p>
  </div>
</template>

<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  padding: 10px;
  text-decoration: none;
  color: red;
  transition: background-color 300ms linear;
  border-radius: 4px;
}

.error-page a:hover,
.error-page a:active {
  color: #fff;
  background-color: red;
  
}
.error-page .title {
  font-size: 140px;
  font-weight: 700;
  color: red;
}
.description {
    font-size: 46px;
    font-weight: 500;
    margin-bottom: 22px;
}
</style>
