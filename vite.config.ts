import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

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
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/styles/global.scss";`,
			},
		},
	},
});
