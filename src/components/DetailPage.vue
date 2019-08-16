
<template>
  <div>
    <span>
      <span class="left">{{article.category_no}}</span>
      <span class="right">No. {{article.no}}</span>
      <div class="title">{{article.title}}</div>
      <span>{{article.email}}</span> |
      <span>No. {{article.updated_at}}</span>
      <div class="contents">{{article.contents}}</div>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    article: Object
  }
};
</script>
<style>
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
