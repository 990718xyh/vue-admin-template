import { createRouter, createWebHashHistory } from "vue-router";
import { type App } from "vue";
import routeGuard from "./guard";
import routes from "./components/index";

function initRouter(app: App) {
	const router = createRouter({
		history: createWebHashHistory(),
		routes,
	});
	routeGuard(router);
	app.use(router);
}

export default initRouter;
