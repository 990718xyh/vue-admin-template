import { type Router } from "vue-router";
export default function (router: Router) {
	// 路由跳转前
	router.beforeEach((to, from, next) => {
		next();
	});
	// 路由跳转后
	router.afterEach((to, from) => {});
}
