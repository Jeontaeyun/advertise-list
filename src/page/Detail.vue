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
import getAxios from "../utils/getAxios";

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
    getAxios.getDetailPage(this);
  },
  created() {
    getAxios.getCategory(this);
  }
};
</script>