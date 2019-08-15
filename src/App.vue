<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>
        <b-col cols="12">
          <div>
            <span @click="onChangeOrd">오름차순</span>
            <span @click="onChangeOrd">내림차순</span>
          </div>
          <PostList v-for="post in posts" :post="post" :key="post.id" />
          <AdsList />
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import PostList from "./components/PostList";
import AdsList from "./components/AdsList";

export default {
  components: {
    PostList,
    AdsList
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
      this.page = this.page + 1;
    });

    this.$http.get(`category.php`).then(result => {
      this.category = result.data.list;
    });

    this.$http.get(`ads.php?page=1&&limit=1`).then(result => {
      //this.ads = result.data.list;
    });

    window.onscroll = () => {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        this.$http.get(`request.php?page=${page}&&ord=${ord}`).then(result => {
          this.posts = this.posts.concat(result.data.list);
          this.page = this.page + 1;
        });
      }
    };
  },
  methods: {
    onChangeOrd: function(e) {
      const ordIndex = e.target;
      if (ordIndex.textContent === "오름차순") {
        this.ord = "asc";
        console.log(this.ord);
      } else if (ordIndex.textContent === "내림차순") {
        this.ord = "desc";
        console.log(this.ord);
      }
    }
  }
};
</script>

<style lang="less" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>

