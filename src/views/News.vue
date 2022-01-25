<template>
  <div>
    <h1>Новости</h1>
    <v-container>
      <div v-for="NewsData in NewsDataList" :key="NewsData.id" class="news-data" >
        <div class="news-name">
          <div>
            <h2>{{NewsData.name}}</h2>
          </div>
          <div>
            <span class="date">{{moment(NewsData.created_at).format('DD.MM.YYYY')}}</span>
          </div>
        </div>
        <div class="news-img">
          <img :src="'/images/' + NewsData.preview_image">
        </div>
        <div>
          <div class="news-shortDesc">
            <span>{{NewsData.shortDesc}}</span>
          </div>
        </div>
        <button class="btn">
          <router-link
              :to="{name:'NewsPage', params: { id: NewsData.id}}"
          >Подробнее о новости</router-link>
        </button>

<!--        <button @click="getId(NewsData)"> eouhbrpebf</button>-->
      </div>
    </v-container>
  </div>
</template>

<script>
import {instance} from "../services/instance";
import moment from 'moment'

export default {
  name: 'News',
  data() {
    return {
      NewsDataList: [],
      moment: moment
    };
  },
  methods: {
    // getNewsData() {
    //   fetch("articles.json")
    //       .then(response => response.json())
    //       .then(data => (this.NewsDataList = data));
    // },
    // getId(NewsData){
    //   const obj = NewsData
    //   console.log(obj)
    //   const test = NewsData.id
    //   console.log(test)
    //   const newsId = `https://localhost:8081/News/${NewsData.id}`
    //   console.log(newsId)
    // },

    async fetchData() {
      const response = await instance.get(`/articles`)
      this.NewsDataList = response.data

      console.log(response.data)
    }

  },
  beforeMount(){
    // this.getNewsData()
    this.fetchData()
  },
}
</script>

<style scoped>
  div{
    /*margin-left: 50%;*/
    /*transform: translateX(-50%);*/
    text-align: center;
  }
  .container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1300px;
    justify-content: space-between;
  }
  .news-data {
    margin-bottom: 30px;
    width: 410px;
    border: 2px solid darkcyan;
  }
  .news-name {
    margin-top: 15px;
  }
  .news-shortDesc {
    margin-top: 15px;
  }
  h1{
    font-size: 40px;
    margin-top: 30px;
  }

  img {
    width: 100%;
    height: 270px;

  }

  .btn a {
    text-decoration: none;
    color: #fff;
  }
  .btn {
    margin: 15px 0;
    padding: 6px 10px;
    background-color: #2c3e50;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
  }

  .btn:hover {
    background-color: darkcyan;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }

</style>
