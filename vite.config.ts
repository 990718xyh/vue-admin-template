import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import path from "path";

export default defineConfig({
	plugins: [
		vue(),
		// 自动引入插件
		AutoImport({
			imports: [
				"vue",
				{
					"naive-ui": [],
				},
			],
		}),
		Components({
			resolvers: [NaiveUiResolver()],
		}),
	],
	base: "./",
	resolve: {
		// 别名
		alias: {
			"~": path.resolve(__dirname, "src"),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/styles/global.scss";`,
			},
		},
	},
	server: {
		open: true,
	},
});
