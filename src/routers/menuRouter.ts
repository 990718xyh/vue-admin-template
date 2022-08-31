import { type RouteRecordRaw } from "vue-router";
import { type MenuOption } from "naive-ui";

export function getMenuList(list: RouteRecordRaw[]): MenuOption[] {
	let _result: MenuOption[] = [];
	list.forEach(items => {
		let children: MenuOption[] = [];
		if (items.children && items.children.length > 0 && !items.meta?.layout) {
			children = getMenuList(items.children);
		}
		let menu = {
			label: items.meta?.title,
			key: items.path,
			children: children.length > 0 ? children : undefined,
		};
		if (items.meta?.show) {
			_result.push(menu);
		}
	});
	return _result;
}
