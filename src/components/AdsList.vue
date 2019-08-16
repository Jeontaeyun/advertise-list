<template>
  <div v-if="isAds">
    <b-card class="overflow-hidden">
      <div class="sponsered">Sponsered</div>
      <b-row no-gutters>
        <b-col md="6">
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
      isAds: this.postNumber % 4 === 3
    };
  },
  watch: {
    page: function() {
      this.$http
        .get(`ads.php?page=${this.page}&&limit=${this.limit}`)
        .then(result => {
          this.ads = this.ads.concat(result.data.list);
          console.log(this.ads);
        });
    },
    isAds: function() {
      if (isAds) this.page++;
    }
  },
  props: {
    postNumber: String
  },
  mounted() {
    this.$http
      .get(`ads.php?page=${this.page}&&limit=${this.limit}`)
      .then(result => {
        this.ads = this.ads.concat(result.data.list);
      });
  }
};
</script>
<style lang="less" scoped>
.sponsered {
  margin-bottom: 1rem;
  font-weight: bold;
}
</style>
