<template>
  <div>
    <span>{{article.category_no}}</span>
    <span>No. {{article.no}}</span>
    <div>{{article.title}}</div>
    <span>{{article.email}}</span> |
    <span>No. {{article.updated_at}}</span>
    <div>{{article.contents}}</div>
    <div v-if="replies">
      <Reply v-for="reply in replies" :reply="reply" :key="reply.no" />
    </div>
  </div>
</template>
<script>
import Reply from "../components/Reply";
export default {
  components: {
    Reply
  },
  data() {
    return {
      article: null,
      replies: []
    };
  },
  mounted() {
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