<template>
<!--  <div v-if="NewsDataList.slider === 'true'">-->
    <v-carousel hide-delimiters>
      <v-carousel-item
          v-for="item in DataListSlider"
          :key="item.id"
          :src="GetSrc(item.preview_image)">
        <button class="btn">
          <router-link
              :to="{name:'NewsPage', params: { id: item.id}}"
          >Смотреть новость</router-link>
        </button>
      </v-carousel-item>
    </v-carousel>
<!--  </div>-->
</template>

<script>
import {instance} from "../services/instance";

export default {
  data () {
    return {
      NewsDataList: [],
    }
  },
  computed: {
    DataListSlider() {
      return this.NewsDataList.filter(item => item.slider === true)
    },
  },
  methods: {
    async fetchData() {
      const response = await instance.get(`/articles`)
      this.NewsDataList = response.data

      // console.log(response.data)
    },
    GetSrc(src) {
      return `/images/${src}`;
    },
  },
  beforeMount(){
    this.fetchData()
  }
}
</script>

<style scoped>
  .v-carousel {
    width: 800px;
    margin: 30px auto 0;
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
