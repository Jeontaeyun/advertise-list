import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueRouter from 'vue-router';
import router from './router';
// Dotenv로 Git에 API 도메인 방지
const { API_DOMAIN: apiDomain } = process.env;

// axios 사용을 편리하게 하기 위해 baseURL 설정 및 axio 전역 설정
axios.defaults.baseURL = apiDomain;
Vue.prototype.$http = axios;

// Bootstrap을 전역적으로 사용해주는 코드
Vue.use(BootstrapVue);
// Vue 라우터를 써주는 코드
Vue.use(VueRouter);

new Vue({
	el: '#app',
	render: (h) => h(App),
	router
});
