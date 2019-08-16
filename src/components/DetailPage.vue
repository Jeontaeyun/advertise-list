<template>
  <div>
    <span class="left">{{categoryName()}}</span>
    <span class="right">No. {{article.no}}</span>
    <div class="title">{{article.title}}</div>
    <span>{{article.email}}</span> |
    <span>{{article.updated_at}}</span>
    <div class="contents">{{article.contents}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    article: Object,
    category: Array
  },
  methods: {
    categoryName: function() {
      const cate = this.category.filter(
        cat => cat.no === this.article.category_no
      );
      return cate[0].name;
    }
  }
};
</script>
<style lang="less" scoped>
.title {
  font-size: 2rem;
  margin-top: 2rem;
}
.contents {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.left {
  background: #eb7070;
  padding: 0.5% 1%;
  border-radius: 40rem;
  color: white;
}
.right {
  float: right;
}
</style>
