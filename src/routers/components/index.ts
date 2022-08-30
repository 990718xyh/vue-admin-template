import { type RouteRecordRaw } from "vue-router";

// 自动导入路由文件
const modules = import.meta.glob(["./*.ts", "!./index.ts"], {
	import: "default",
	eager: true,
});

let routerList: RouteRecordRaw[] = [];
for (let path in modules) {
	routerList.push(...(modules[path] as []));
}

export default routerList;
