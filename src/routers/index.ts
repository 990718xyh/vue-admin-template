import { createRouter, createWebHashHistory } from "vue-router";
import { type App } from "vue";
import routeGuard from "./guard";
import { RouteList } from "./content";

function initRouter(app: App) {
	const router = createRouter({
		history: createWebHashHistory(),
		routes: RouteList,
	});
	routeGuard(router);
	app.use(router);
}

export default initRouter;
