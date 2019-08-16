<template>
  <div>
    <detail-page :article="article" :category="category" />
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
      article: {},
      replies: [],
      category: []
    };
  },
  mounted() {
    this.$http
      .get(`detail.php?req_no=${this.$route.params.id}`)
      .then(result => {
        // Vue에서 객체를 반응형으로 삽입해주는 방법
        this.article = Object.assign(
          {},
          this.article,
          result.data.detail.article
        );
        this.replies = this.replies.concat(result.data.detail.replies);
      });
  },
  created() {
    this.$http.get(`category.php`).then(result => {
      this.category = this.category.concat(result.data.list);
    });
  }
};
</script>