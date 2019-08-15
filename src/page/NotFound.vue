<template>
  <div>
    <p>404</p>
    <span>Not Found Error</span>
  </div>
</template>
<script>
import Reply from "../components/Reply";
export default {
  components: {
    Reply
  },
  data: function() {
    return {
      article: null,
      replies: []
    };
  },
  created: function() {
    this.$http
      .get(`detail.php?req_no=${this.$route.params.id}`)
      .then(result => {
        console.log(result.data.detail);
        this.article = result.data.detail.article;
        this.replies = result.data.detail.replies;
      });
  }
};
</script>
<style lang="less">
div {
  margin-top: 6rem;
  text-align: center;
  p {
    font-size: 1rem;
  }
  span {
    font-size: 2rem;
  }
}
</style>