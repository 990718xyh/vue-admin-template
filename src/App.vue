<script setup lang="ts">
import { zhCN, dateZhCN, darkTheme } from "naive-ui";
</script>

<template>
	<n-config-provider :theme="darkTheme" :locale="zhCN" :date-locale="dateZhCN">
		<n-message-provider>
			<router-view v-slot="{ Component, route }">
				<keep-alive>
					<component :is="Component" :key="route.fullPath" v-if="route.meta.keepAlive" />
				</keep-alive>
				<component :is="Component" :key="route.fullPath" v-if="!route.meta.keepAlive" />
			</router-view>
		</n-message-provider>
	</n-config-provider>
</template>

<style scoped lang="scss">
.test {
	color: $bg;
}
</style>
