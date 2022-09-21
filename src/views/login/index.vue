<script setup lang="ts">
import { getApiWeek } from "~/api/index";
getApiWeek().then(res => {});
</script>
<template>
	<div class="login">
		<n-card class="card">
			<p class="title">Welcome to Vue Admin Template</p>
			<p class="sub-title">中后台模版</p>
		</n-card>
	</div>
</template>

<style lang="scss" scoped>
.login {
	width: 100vw;
	height: 100vh;
	padding: 24px;
}
.card {
	width: 400px;
	margin: 0 auto;
}
.title {
	text-align: center;
}
</style>
