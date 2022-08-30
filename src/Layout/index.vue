<script lang="ts" setup>
import Header from "./components/Header.vue";
import Menu from "./components/menu.vue";
</script>
<template>
	<div>
		<n-layout has-sider style="height: 100vh">
			<!-- 左侧菜单 -->
			<n-layout-sider :native-scrollbar="false" content-style="padding: 24px;"> <Menu /></n-layout-sider>
			<n-layout>
				<n-layout-header>
					<!-- 顶部面包屑 下拉菜单 -->
					<Header />
				</n-layout-header>
				<n-layout-content content-style="padding: 24px;" class="layout-content">
					<!-- Layout路由出口 -->
					<router-view v-slot="{ Component, route }">
						<keep-alive>
							<component :is="Component" :key="route.fullPath" v-if="route.meta.keepAlive" />
						</keep-alive>
						<component :is="Component" :key="route.fullPath" v-if="!route.meta.keepAlive" />
					</router-view>
				</n-layout-content>
			</n-layout>
		</n-layout>
	</div>
</template>

<style lang="scss" scoped>
// header 高度
$layout-height: 60px;
.n-layout-header {
	height: $layout-height;
	line-height: $layout-height;
}

:deep(.layout-content) {
	height: calc(100vh - $layout-height);
}
</style>
