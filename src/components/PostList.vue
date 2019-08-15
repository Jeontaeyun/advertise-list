<template>
  <div v-once>
    <b-card>
      <b-media>
        <div class="info">
          <small class="right">{{post.category_no}}</small>
          <small>{{post.no}}</small>
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
.content {
  margin-top: 2%;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  line-height: 1;
  height: 3em;
  -webkit-line-clamp: 3;
}
</style>