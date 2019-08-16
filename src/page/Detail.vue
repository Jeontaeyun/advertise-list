<template>
  <div>
    <detail-page :article="article" />
    <div v-if="replies">
      <reply v-for="reply in replies" :reply="reply" :key="reply.no" />
    </div>
  </div>
</template>
<script>
import Reply from "../components/Reply";
import DetailPage from "../components/DetailPage";
export default {
  components: {
    Reply,
    DetailPage
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
        this.article = result.data.detail.article;
        this.replies = this.replies.concat(result.data.detail.replies);
      });
  }
};
</script>