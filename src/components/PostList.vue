<template>
  <div class="main" v-once>
    <b-card>
      <b-media>
        <div class="info">
          <small class="left">{{post.category_no}}</small>
          <small class="right">No. {{post.no}}</small>
        </div>
        <h5 class="mt-0 title">{{post.title}}</h5>
        <div class="user-create">
          <small>{{post.email}}</small> |
          <small>{{post.updated_at}}</small>
        </div>
        <div class="content">
          <p>{{post.contents}}</p>
        </div>
      </b-media>
    </b-card>
  </div>
</template>
<script>
export default {
  props: {
    post: Object,
    category: Array
  },
  created: function() {}
};
</script>
<style lang="less" scoped>
// 공통되게 변수를 저장할 수 없을까 ?
.main {
  margin: 10px auto;
  .content {
    margin-top: 2%;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    line-height: 1;
    height: 3em;
    -webkit-line-clamp: 3;
  }
  .info {
    border-bottom: 1px solid grey;
    padding-bottom: 1%;
    margin-bottom: 1%;

    .right {
      float: right;
    }
    .left {
      background: #eb7070;
      padding: 0.5% 1%;
      margin-left: 1%;
      border-radius: 40rem;
      color: white;
    }
  }
}
</style>