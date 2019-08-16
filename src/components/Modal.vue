<template>
  <div>
    <button @click="handleFilter">필터</button>
    <div v-if="isView">
      <div class="background"></div>
      <div class="modalw">
        <span @click="handleCancle">X</span>
        <p>필터</p>
        <input type="checkbox" name="cate" value="1" />카테고리1
        <input type="checkbox" name="cate" value="2" />카테고리2
        <input type="checkbox" name="cate" value="3" />카테고리3
        <button>저장</button>
      </div>
    </div>
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
    },
    handleCancle: function() {
      return (this.isView = false);
    }
  }
};
</script>
<style lang="less" scoped>
.background {
  position: fixed;
  top: 0;
  right: 0;
  background: #000;
  opacity: 0.7;
  width: 100%;
  height: 100vh;
  z-index: 10;
}
.modalw {
  position: fixed;
  top: 50%;
  right: 50%;
  z-index: 20;
  padding: 1rem 4%;
  background: white;
  transform: translate(50%, -50%);
  span {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0.2rem 0.6rem;
  }
  p {
    font-size: 1.2rem;
    font-weight: 600;
  }
  input {
    margin-right: 2%;
    &:last-of-type {
      margin-right: 0;
    }
  }
  button {
    display: block;
    float: right;
  }
}
</style>