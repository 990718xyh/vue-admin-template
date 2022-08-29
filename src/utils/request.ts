import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
let instance = axios.create({
	// axios基础路径
	baseURL: "",
	// 响应超时时间 20s
	timeout: 20000,
});

// 请求拦截
instance.interceptors.request.use((config: AxiosRequestConfig) => {
	let token = "11";
	config.headers = {
		...config.headers,
		"Content-Type": "application/json;charset=utf-8",
	};
	if (token) {
		config.headers["access-token"] = token;
	}
	return config;
});

// 响应拦截
instance.interceptors.response.use((res: AxiosResponse) => {
	return res;
});

export default instance;
