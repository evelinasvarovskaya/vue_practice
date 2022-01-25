<template>
  <div>
    <h1> Новость {{ $route.params.id }}</h1>
    <v-container>
      <hr>
      <div v-if="NewsDataList">
        <div class="title">
          <div class="news-name">
            <div>
              <h2>{{NewsDataList.name}}</h2>
            </div>
            <div>
              <span class="news-date">{{moment(NewsDataList.created_at).format('DD.MM.YYYY')}}</span>
            </div>
          </div>
        </div>
        <div class="news-img">
          <img :src="'/images/' + NewsDataList.full_image">
        </div>
        <div class="news-desc">
          <span>{{NewsDataList.desc}}</span>
        </div>
      </div>
      <comment></comment>
<!--      <button class="btn">-->
<!--        <router-link :to="{name:'News'}">Перейти к новостям</router-link>-->
<!--      </button>-->
<!--      <comments></comments>-->
<!--      <NewComment v-on:addComment="addComment"></NewComment>-->
    </v-container>
  </div>
</template>

<script>
import {instance} from "../services/instance";
import moment from 'moment'
// import comments from "../components/comments";
// import NewComment from "../components/NewComment"
import comment from "../components/commentForm";

export default {
  name: 'News',
  components: {
    comment: comment,
    // comments:comments,
    // NewComment: NewComment,
  },
  data() {
    return {
      NewsDataList: [],
      moment: moment,
    };
  },
  methods: {
    async fetchData() {
      const response = await instance.get(`/articles/${this.$route.params.id}`)
      this.NewsDataList = response.data
    }
  },
  beforeMount() {
    this.fetchData()
  },
}
</script>


<style scoped>
  img{
    width: 100%;
  }
  .container{
    width: 800px;
  }
  .title{
    margin-top: 30px;
    text-align: left;;
  }
  h1 {
    margin-top: 30px;
    text-align: center;
  }

  .news-date{
    font-size: 13px;
  }
  .news-desc {
    margin: 30px 0;
  }
  /*.btn a {*/
  /*  text-decoration: none;*/
  /*  color: #fff;*/
  /*}*/
  /*.btn {*/
  /*  position: absolute;*/
  /*  left: 30px;*/
  /*  top: 50px;*/
  /*  padding: 10px 15px;*/
  /*  background-color: #2c3e50;*/
  /*  border: none;*/
  /*  color: white;*/
  /*  text-align: center;*/
  /*  text-decoration: none;*/
  /*  display: inline-block;*/
  /*  font-size: 16px;*/
  /*  border-radius: 5px;*/
  /*}*/
  /*.btn:hover {*/
  /*  background-color: darkcyan;*/
  /*  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);*/
  /*}*/
</style>
