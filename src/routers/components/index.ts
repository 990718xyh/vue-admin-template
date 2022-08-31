import { type RouteRecordRaw } from "vue-router";

// 自动导入路由文件
let modules = import.meta.glob(["./*.ts", "!./index.ts"], {
	import: "default",
	eager: true,
});

let routerList: RouteRecordRaw[] = [];
for (let path in modules) {
	routerList.push(...(modules[path] as []));
}
// 404页面
const NotFount = {
	path: "/*",
	name: "404",
	meta: {
		title: "404",
		show: false,
	},
	component: () => import("~/views/404.vue"),
};
routerList.push(NotFount);

export default routerList;
