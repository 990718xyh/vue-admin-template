<script lang="ts" setup>
import { RouteList } from "~/routers/content";
import { getMenuList } from "~/routers/menuRouter";
import { ref } from "vue";
import { type MenuOption } from "naive-ui";
import { useRouter } from "vue-router";
// 是否展开菜单  默认展开
let collapsed = ref<boolean>(false);

let menuOption: MenuOption[] = getMenuList(RouteList);
const router = useRouter();

const clickMenu = (key: string, item: MenuOption) => {
	router.push(key);
};
</script>
<template>
	<div>
		<n-menu
			:collapsed="collapsed"
			:collapsed-width="64"
			:collapsed-icon-size="22"
			:options="menuOption"
			:on-update:value="clickMenu"
			children-field="children"
		/>
	</div>
</template>
<style lang="scss" scoped></style>
