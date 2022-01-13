<template>
  <div>
    <h1>Новости</h1>
    <ul v-for="NewsData in NewsDataList" :key="NewsData.id" class="news-data" v-bind:getarray="NewsDataList">
      <li class="news-name">
        <div>
          <span>{{NewsData.name}}</span>
        </div>
        <div>
          <span class="date">{{NewsData.date}}</span>
        </div>
      </li>
      <li class="news-img">
        <span>{{NewsData.preview_image}}</span>
      </li>
      <button>
        <router-link
            :to="{name:'NewsPage', params: { id: NewsData.id}}"
        >Подробнее о новости</router-link>
      </button>

      <button @click="getId(NewsData)"> eouhbrpebf</button>
      <hr>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      NewsDataList: []
    };
  },
  methods: {
    getNewsData() {
      fetch("articles.json")
          .then(response => response.json())
          .then(data => (this.NewsDataList = data));
    },
    getId(NewsData){
      const obj = NewsData
      console.log(obj)
      const test = NewsData.id
      console.log(test)
      const newsId = `https://localhost:8081/News/${NewsData.id}`
      console.log(newsId)
    }

  },
  beforeMount(){
    this.getNewsData()
  },
}
</script>

<style scoped>
h1{
  font-size: 40px;
}

button{
  padding: 10px 15px;
  display: inline-block;

}
a {
  text-decoration: none;
  color: #fff;

}

</style>
