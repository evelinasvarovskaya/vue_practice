<template>
  <div>
    <h3 class="form_title">Введите ваш комментарий:</h3>
    <div class="comment_form">
      <div class="form-group">
        <label>Имя: </label>
        <label>Комментарий: </label>
      </div>
      <div class="form-group">
        <input type="text" v-model="name" placeholder="Введите ваше имя" class="form" >
        <input type="text" class="form" v-model="comment" placeholder="Введите ваш комментарий" >
      </div>
    </div>
    <button type="submit" class="btn" v-on:click="addComment" >Добавить комментарий</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:'',
      comment:'',
    };
  },
  methods: {
    addComment(e) {
      e.preventDefault();
      if (this.name !== '' && this.comment !== '') {
        this.$emit('addComment', { name: this.name, comment: this.comment });
        this.name = '';
        this.comment = '';
      } else {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }
    },
  }
}
</script>

<style scoped>
  .comment_form {
    /*border: 2px solid darkcyan;*/
    margin-top: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
  }
  .form{
    border: 2px solid darkcyan;
    border-radius: 5px;
    width: 430px;
    margin-bottom: 20px;
    padding-left: 10px;
  }
  .form_title {
    margin:40px 0 15px;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    margin-right: 30px;
  }

  label {
    margin-bottom: 20px;
  }
  .btn a {
    text-decoration: none;
    color: #fff;
  }
  .btn {
    position: absolute;
    margin-top: 15px;
    left: 470px;
    /*top: 50px;*/
    padding: 5px 10px;
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
