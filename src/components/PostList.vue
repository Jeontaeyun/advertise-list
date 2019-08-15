<template>
  <div>
    <b-card>
      <b-media>
        <div class="info">
          <small class="right">{{post.category_no}}</small>
          <small>{{post.no}}</small>
        </div>
        <h5 class="mt-0 title">{{post.title}}</h5>

        <p class="content">{{post.contents}}</p>
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
  created: function() {
    const cat = this.category.filter(item => item.no === this.post.category_no);
    console.log(cat);
  }
};
</script>
<style lang="less" scoped>
</style>