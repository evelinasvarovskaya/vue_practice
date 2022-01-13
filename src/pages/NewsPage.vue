<template>
  <div>
    <h1> Новость</h1>
    <hr>
    <h2>News</h2>
    <div>Пользователь {{ $route.params.id }}</div>
<!--    <div v-for="NewsData in NewsDataList" :key="NewsData.id" v-if="NewsData.id === $route.params.id">-->
<!--      <lu>{{NewsData.name}}</lu>-->
    </div>
<!--    <button @click="test"></button>-->
</template>

<script>
export default {
  name: 'NewsPage',

  // data() {
  //   return {
  //     NewsDataList: []
  //   };
  // }
  // methods: {
  //   getNewsData() {
  //     fetch("articles.json")
  //         .then(response => response.json())
  //         .then(data => (this.NewsDataList = data));
  //   },
  //   beforeMount(){
  //     this.getNewsData()
  //   }
    // test(){
    //   const test = getarray.find(item => item.id == this.$route.params.id)
    //   console.log(test)
      // if(test) {
      //   this.test = test
      // }
    //
    // },

//     created() {
//       // const film = films.find(NewsData => NewsData.id == this.$route.params.id)
//       const news = this.$route.params.id
//       console.log(news)
//
//       if (news) {
//         this.news = news
//         console.log(news)
//       }
//     }
//   }
// }

  // },
  // mounted() {
  //   console.log(this.getarray)
  // }
}



//   data() {
//     return {
//       // urlNews: './package.json',
//       News: [],
//       errors: [],
//       mounted(){
//       this.getNews()
//       },
//       methods() {
//         async getNews(){
//           try {
//             const response = await fetch(this.urlNews)
//             const result = await response.json()
//             this.News.push(result)
//             console.log(this.News);
//           } catch (error) {
//             this.errors.push(error)
//           }
//         }
//       },
//     }
//   }

</script>
