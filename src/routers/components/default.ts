import { type RouteRecordRaw } from "vue-router";
/**
 * meta.keepAlive 代表是否要缓存该组件
 */
const Defaule: RouteRecordRaw[] = [
	{
		path: "/",
		name: "default",
		redirect: "/login",
	},
	{
		path: "/login",
		name: "Login",
		meta: {
			title: "登录",
		},
		component: () => import("~/views/login.vue"),
	},
	{
		path: "/home",
		name: "Home",
		meta: {
			title: "首页",
			keepAlive: true,
		},
		component: () => import("~/views/home.vue"),
	},
];

export default Defaule;
