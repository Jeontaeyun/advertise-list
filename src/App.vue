<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>
        <b-col cols="12">
          <router-view></router-view>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>

