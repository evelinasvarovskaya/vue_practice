<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<style>
/** {*/
/*  background-color: #2c3e50;*/
/*  color: white;*/
/*}*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}


</style>
<script>
import Header from "./components/Header";
export default {
  name: 'App',
  components: {Header}
}
</script>
