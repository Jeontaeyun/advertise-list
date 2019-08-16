import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../page/Home.vue';
import Detail from '../page/Detail.vue';
import NotFound from '../page/NotFound';

const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', component: Home },
		{ path: '/page/:id', component: Detail },
		{ path: '*', component: NotFound }
	]
});

export default router;
