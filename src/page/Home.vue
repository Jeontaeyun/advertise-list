<template>
  <div>
    <div>
      <span @click="onChangeOrd" :class="{active: ord==='asc'}">오름차순</span>
      <span @click="onChangeOrd" :class="{active: ord==='desc'}">내림차순</span>
    </div>
    <PostList v-for="post in posts" :post="post" :key="post.id" />
    <AdsList />
  </div>
</template>

<script>
import PostList from "../components/PostList";
import AdsList from "../components/AdsList";

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
  mounted() {
    // 처음 10개 목록을 불러오는 Axios 처리
    const { page, ord } = this;
    this.$http.get(`request.php?page=${page}&&ord=${ord}`).then(result => {
      this.posts = this.posts.concat(result.data.list);
    });

    this.$http.get(`category.php`).then(result => {
      this.category = result.data.list;
    });

    this.$http.get(`ads.php?page=1&&limit=1`).then(result => {
      //this.ads = result.data.list;
    });

    // 인피니트 스크롤링 구현하는 방법
    window.onscroll = () => {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        this.$http.get(`request.php?page=${page}&&ord=${ord}`).then(result => {
          this.posts = this.posts.concat(result.data.list);
        });
      }
    };
  },
  methods: {
    onChangeOrd: function(e) {
      const ordIndex = e.target;
      if (ordIndex.textContent === "오름차순") {
        this.ord = "asc";
      } else if (ordIndex.textContent === "내림차순") {
        this.ord = "desc";
      }
    }
  }
};
</script>

<style lang="less" scoped>
span.active {
  color: #eb7070;
}
</style>

