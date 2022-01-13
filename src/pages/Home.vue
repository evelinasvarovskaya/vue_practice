<template>
  <div>
    <Hello></Hello>
    <button @click="$router.push({name:'News'})">Перейти к новостям</button>
  </div>
</template>

<script>
import Hello from '@/components/Hello.vue';
export default {
  name: 'Home',
  components: {
    Hello
  }

}
</script>

<style >
button{
  background-color: #2c3e50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  /*text-decoration: none;*/
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
}
button:hover {
  background-color: darkcyan;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

</style>
