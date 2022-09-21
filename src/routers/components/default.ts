import { type RouteRecordRaw } from "vue-router";
const Layout = () => import("~/Layout/index.vue");
/**
 * meta.keepAlive 代表是否要缓存该组件
 */
const Default: RouteRecordRaw[] = [
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
			keepAlive: false,
		},
		component: () => import("~/views/login/index.vue"),
	},
	{
		path: "/home",
		name: "Home",
		meta: {
			show: true,
			title: "首页",
			layout: true,
		},
		component: Layout,
		children: [
			{
				path: "/home",
				name: "Home",
				meta: {
					show: true,
					title: "首页",
				},
				component: () => import("~/views/home.vue"),
			},
		],
	},
	{
		path: "/test",
		name: "Test",
		meta: {
			show: true,
			title: "Test Page",
		},
		component: Layout,
		children: [
			{
				name: "Test1",
				path: "/test/test1",
				component: () => import("~/views/test/test1.vue"),
				meta: {
					show: true,
					title: "测试页面1",
				},
			},
			{
				name: "Test2",
				path: "/test/test2",
				component: () => import("~/views/test/test2.vue"),
				meta: {
					show: true,
					title: "测试页面2",
				},
			},
			{
				name: "TestIndex",
				path: "/test/index",
				component: () => import("~/views/test/index.vue"),
				meta: {
					show: true,
					title: "测试页面",
				},
			},
		],
	},
];

export default Default;
