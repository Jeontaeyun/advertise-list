<template>
  <div v-if="isAds">
    <b-card class="overflow-hidden">
      <div class="sponsered">Sponsered</div>
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="img" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="title">
            <b-card-text class="word-break">{{contents}}</b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
import getAxios from "../utils/getAxios";

export default {
  data() {
    return {
      page: 1,
      title: "",
      contents: "",
      img: "",
      isAds: false
    };
  },
  props: {
    postNumber: Number
  },
  created() {
    if (this.postNumber % 4 === 3) {
      this.isAds = true;
      getAxios.getAds(this);
    } else {
      this.isAds = false;
    }
  }
};
</script>
<style lang="less" scoped>
.sponsered {
  margin-bottom: 1rem;
  font-weight: bold;
}
.word-break {
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  line-height: 1;
  height: 3em;
  -webkit-line-clamp: 3;
}
</style>
