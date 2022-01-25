<template>
  <div class="comments">
    <div v-for="comment in Comments" :key="comment.id" class="wrapper_comment" >
      <div class="comment_title">
        <div class="comment_name">{{comment.user_name}}</div>
        <div class="comment_dates">
          <div class="comment_date">Создано {{moment(comment.created_at).format('DD.MM.YYYY')}}</div>
          <div class="comment_date">Изменено {{moment(comment.updated_at).format('DD.MM.YYYY')}}</div>
        </div>
      </div>
      <div class="comment_desc">{{comment.comment}}</div>
    </div>
  </div>
</template>

<script>
import {instance} from "../services/instance";
import moment from 'moment'

export default {
  name: 'News',
  data() {
    return {
      Comments: [],
      moment: moment,
    };
  },
  methods: {
    async fetchData() {
      const response = await instance.get(`/articles/${this.$route.params.id}/comments`)
      this.Comments = response.data
    }
  },
  beforeMount() {
    this.fetchData()
  },
}
</script>

<style scoped>
  .comments {
    margin-top: 30px;
  }
  .wrapper_comment {
    margin-bottom: 5px;
    border: 2px solid darkcyan;
    border-radius: 5px;
    padding: 3px 20px;
  }

  .comment_title {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
  }
  .comment_name {
    font-weight: bold;
  }
  .comment_dates {
    display: flex;
    justify-content: space-around;
  }
  .comment_date {
    margin: 0 5px;
    font-size: 10px;
    opacity: 0.6;
  }
  .comment_desc {
    margin: 5px 0;
  }
</style>
