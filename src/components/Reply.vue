<template>
  <div class="container" @onclick="handleMore">
    <b-card>
      <b-media>
        <small>댓글</small>
        <h5 class="mt-0">{{reply.email}}=</h5>
        <p>{{reply.updated_at}}</p>
        <p class="reply">{{reply.contents}}</p>
      </b-media>
    </b-card>
  </div>
</template>
<script>
export default {
  props: {
    reply: Object
  },
  methods: {
    handleMore: function() {}
  }
};
</script>
<style lang="less" scoped>
.container {
  margin-top: 2%;
  margin-bottom: 2%;
}
.reply {
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  line-height: 1;
  height: 1em;
}
</style>;
