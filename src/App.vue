<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>
        <b-col cols="12">
          <div v-for="post in posts" :key="post.id">
            <PostList :post="post" :category="category" />
          </div>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import PostList from "./components/PostList";

export default {
  components: {
    PostList
  },
  data: () => {
    return {
      posts: [],
      ord: "asc",
      page: 1,
      category: []
    };
  },
  created() {
    // 처음 10개 목록을 불러오는 Axios 처리
    const { page, ord } = this;
    this.$http.get(`request.php?page=${page}&&ord=${ord}`).then(result => {
      this.posts = this.posts.concat(result.data.list);
    });

    this.$http.get(`category.php`).then(result => {
      this.category = result.data.list;
      return console.log(this.category);
    });

    this.$http.get(`ads.php?page=1&&limit=1`).then(result => {
      //this.ads = result.data.list;
    });
  },
  methods: {}
};
</script>

<style lang="less" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 760px;
  margin: 0 auto;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

