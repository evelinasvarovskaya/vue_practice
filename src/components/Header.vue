<template>
  <header>
    <div class="title">
      <div class="navinfo">
        <router-link to="/" class="logo"><img src="../assets/news.png" alt="logo"></router-link>
        <div class="nav">
          <router-link to="/">Главная страница</router-link> |
          <router-link to="/News">Новости</router-link>  |
          <router-link to="/Galery">Галерея изображений</router-link>
        </div>
      </div>
      <form class="search__form ">
        <v-text-field
            v-model="search"
            class="theme--dark theme--light"
            color="white"
        ></v-text-field>
        <button @click=$router.push(searchName)><img src="../../public/images/search.png" alt="search"></button>
      </form>
<!--      <div class="wrapper close">-->
<!--        <div class="card" v-for="post in filteredList" :key="post.id">-->
<!--          <router-link :to="{name:'NewsPage', params: { id: post.id}}">-->
<!--            <small>News: {{ post.name }}</small>-->
<!--&lt;!&ndash;            <small>{{ post.shortDesc }}</small>&ndash;&gt;-->
<!--          </router-link>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </header>
</template>

<script>
import {instance} from "../services/instance";

export default{
  data() {
    return {
      search: '',
      NewsDataList: [],
    };
  },
  // computed: {
  //   todosByTitle() {
  //     return this.todos.filter(item => item.title.indexOf(this.search) !== -1)
  //   },
  // },
  computed: {
    filteredList() {
      return this.NewsDataList.filter(post => {
        return post.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    async fetchData() {
      const response = await instance.get(`/articles`)
      this.NewsDataList = response.data
    },
    searchName(){
      // return {name:'NewsPage', params: { id: this.NewsDataList.name}}
      return  {name:'NewsPage', params: { name: this.NewsDataList.search}}
    }
  },
  beforeMount() {
    this.fetchData()
  },
}

</script>

<style scoped>
header {
  background-color: #2c3e50;
  color: #ffff;
}
img {
  height: 30px;
  /*display: block;*/
  /*position: absolute;*/
  /*top: 30px;*/
  /*left: 30px;*/
}

.navinfo {
  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
}
.nav {
  margin: 30px;
  /*margin-left: 50%;*/
  /*transform: translateX(-50%);*/
  /*text-align: center;*/
}

.nav a.router-link-exact-active {
  color: aquamarine;
}
.nav a {
  font-weight: bold;
  color: #fff;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1300px;
  margin: 0 auto;
}

.theme--light {
  color: white;
}
.theme--dark{
  color: white;
}
.search__form {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 250px;
}

.v-input {
  margin-right: 10px;
}

/*.wrapper {*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  max-width: 444px;*/
/*  flex-wrap: wrap;*/
/*  padding-top: 12px;*/
/*}*/

/*.card {*/
/*  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;*/
/*  max-width: 124px;*/
/*  margin: 12px;*/
/*  transition: .15s all ease-in-out;*/
/*}*/
/*.card:hover {*/
/*   transform: scale(1.1);*/
/* }*/
/*a {*/
/*  text-decoration: none;*/
/*  padding: 12px;*/
/*  color: #fff;*/
/*  font-size: 24px;*/
/*  display: flex;*/
/*  !*flex-direction: column;*!*/
/*  align-items: center;*/
/*}*/
/*a img {*/
/*  height: 100px;*/
/*}*/
/*a small {*/
/*  font-size: 10px;*/
/*  padding: 4px;*/
/*}*/

/*.close {*/
/*  display: none;*/
/*}*/


</style>
