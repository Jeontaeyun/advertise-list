<template>
  <div>
    <PostList></PostList>
  </div>
</template>

<script>
import axios from "axios";
import PostList from "./components/PostList";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
const { API_DOMAIN: apiDomain } = process.env;
axios.defaults.baseURL = apiDomain;
console.log(axios.get("/request.php?page=1&&ord=asc"));
export default {
  components: {
    PostList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
