<template>
  <div>
    <Hello></Hello>
    <carousel></carousel>
    <div>
      <button class="btn" @click="$router.push({name:'News'})">Перейти к странице всех новостей</button>
    </div>
  </div>
</template>

<script>
import Hello from '../components/Hello.vue';
import carousel from "../components/carousel";
export default {
  name: 'Home',
  components: {
    Hello,
    carousel,
  }

}
</script>

<style scoped >
  .btn a {
    text-decoration: none;
    color: #fff;
  }
  .btn{
    background-color: #2c3e50;
    border: none;
    color: white;
    padding: 10px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
    margin: 50px 0 50px 50%;
    transform: translateX(-50%);
  }
  .btn:hover {
    background-color: darkcyan;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
</style>
