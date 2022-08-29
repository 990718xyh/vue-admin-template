import { createRouter, createWebHashHistory } from "vue-router";
import { type App } from "vue";
import routeGuard from "./guard";
async function initRouter(app: App) {
	const router = createRouter({
		history: createWebHashHistory(),
		routes: [],
	});
	await routeGuard(router);
	app.use(router);
}

export default initRouter;
