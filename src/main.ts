import { createApp } from "vue";
import "./style.css";
// 引入scss公共样式
import "./styles/index.scss";
import App from "./App.vue";
import { createPinia } from "pinia";
import initRouter from "./routers/index";

async function setup() {
	let vueApp = createApp(App);
	// pinia初始化
	vueApp.use(createPinia());
	// 记载vue-router
	await initRouter(vueApp);
	// 实例挂载
	vueApp.mount("#app");
}

setup();
