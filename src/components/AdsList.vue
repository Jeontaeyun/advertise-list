<template>
  <div v-if="isAds">
    <b-card class="overflow-hidden">
      <b-row no-gutters>
        <b-col md="6">
          <div>Sponsered</div>
          <b-card-img src="https://picsum.photos/300/300/?image=20" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="Horizontal Card">
            <b-card-text>
              This is a wider card with supporting text as a natural lead-in to additional content.
              This content is a little bit longer.
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 1,
      limit: 1,
      ads: [],
      isAds: this.postNumber % 4 === 0
    };
  },
  watch: {
    page: function() {
      this.$http
        .get(`ads.php?page=${this.page}&&limit=${this.limit}`)
        .then(result => {});
    }
  },
  props: {
    postNumber: String
  },
  mounted() {
    this.$http
      .get(`ads.php?page=${this.page}&&limit=${this.limit}`)
      .then(result => {});
  },
  methods: {}
};
</script>
<style lang="less" scoped>
</style>
