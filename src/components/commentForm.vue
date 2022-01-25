<template>
  <div>
    <comments></comments>
    <NewComment v-on:addComment="addComment"></NewComment>
  </div>
</template>


<script>
import comments from "./comments";
import NewComment from "./NewComment";
import {instance} from "../services/instance";

export default {
  components: {
    comments:comments,
    NewComment: NewComment,
  },
  methods: {
    async addComment(data) {
      await instance.post(`articles/${this.$route.params.id}/comments`, {
        user_name: data.name,
        comment: data.comment,
      });
      window.location.reload()
    },
  }
}

</script>
