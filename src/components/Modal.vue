<template>
  <div>
    <button @onClick="handleFilter">필터</button>
    <div v-if="isView">구라</div>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  data() {
    return {
      isView: false,
      selectedCategory: null
    };
  },
  methods: {
    handleFilter: function() {
      return (this.isView = true);
    }
  }
};
</script>
<style lang="less" scoped>
</style>