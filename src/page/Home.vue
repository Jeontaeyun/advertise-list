<template>
  <div>
    <div class="command">
      <modal v-on:filterSave="checkFilter" :filter="filter" :category="category" />
      <span @click="onChangeOrd" :class="{active: ord}">오름차순</span>
      <span @click="onChangeOrd" :class="{active: !ord}">내림차순</span>
    </div>
    <div v-for="(post,index) in posts" :key="index">
      <router-link class="link" :to="{path: '/page/'+ post.no}">
        <post-list :post="post" :category="category" />
      </router-link>
      <ads-list :postNumber="index" />
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList";
import AdsList from "../components/AdsList";
import Modal from "../components/Modal";
import getAxios from "../utils/getAxios";

export default {
  components: {
    PostList,
    AdsList,
    Modal
  },
  data: () => {
    return {
      posts: [],
      ord: true,
      page: 1,
      category: [],
      filter: []
    };
  },
  //Axios와 같이 데이터가 변경되ㅣ어 API를 호출해야 할 때 watch를 사용하는 것이 좋다.
  watch: {
    ord: function() {
      this.page = 1;
      this.posts = [];
      getAxios.getPostList(this);
    },
    page: function() {
      if (this.page !== 1) {
        getAxios.getPostList(this);
      }
    }
  },
  created() {
    getAxios.getCategory(this);
  },
  mounted() {
    // 처음 10개 목록을 불러오는 Axios 처리
    getAxios.getPostList(this);

    // 인피니트 스크롤링 구현하는 방법
    window.onscroll = () => {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        this.page++;
      }
    };
  },
  methods: {
    checkFilter: function(data) {
      this.checked = [];
      this.checked = this.checked.concat(data);
    },
    onChangeOrd: function(e) {
      const ordIndex = e.target;
      if (ordIndex.textContent === "오름차순") {
        this.ord = true;
      } else if (ordIndex.textContent === "내림차순") {
        this.ord = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
span.active {
  color: #eb7070;
}

.command {
  display: flex;
  flex-direction: row;
  div {
    flex: 0.84;
  }
  span {
    flex: 0.08;
    text-align: right;
  }
}

.link {
  text-decoration: none;
  color: black;
}
</style>

