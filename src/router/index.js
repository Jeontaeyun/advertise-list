import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../page/Home.vue';
import DetailPage from '../page/DetailPage.vue';
import NotFound from '../page/NotFound';

const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', component: Home },
		{ path: '/page/:id', component: DetailPage },
		{ path: '*', component: NotFound }
	]
});

export default router;
