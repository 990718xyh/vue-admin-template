import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

async function setup() {
	let vueApp = createApp(App);
	vueApp.mount("#app");
}

setup();
