<template>
  <div class="container" @click="handleMore">
    <b-card>
      <b-media>
        <small>댓글</small>
        <h5 class="mt-0">{{reply.email}}=</h5>
        <p>{{reply.updated_at}}</p>
        <p v-bind:class="{more: more}">{{reply.contents}}</p>
      </b-media>
    </b-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      more: true
    };
  },
  props: {
    reply: Object
  },
  methods: {
    handleMore: function() {
      return (this.more = !this.more);
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  margin-top: 2%;
  margin-bottom: 2%;
}

.more {
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  width: 100%;
  line-height: 1;
  height: 1.05rem;
}
</style>;
