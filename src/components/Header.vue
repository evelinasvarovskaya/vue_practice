<template>
  <header>
    <router-link to="/"><img src="../assets/news.png" alt="logo"></router-link>
    <div id="nav">
      <router-link to="/">Главная страница</router-link> |
      <router-link to="/News">Новости</router-link>
    </div>
  </header>
</template>

<script>
export default{
  data() {}
}
</script>

<style scoped>
header {
  background-color: #2c3e50;
  color: #ffff;
}
img {
  height: 30px;
  display: block;
  position: absolute;
  top: 30px;
  left: 30px;
}
#nav {
  padding: 30px;
}

#nav a.router-link-exact-active {
  color: aquamarine;
}
#nav a {
  font-weight: bold;
  color: #fff;
}
</style>
