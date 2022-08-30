import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
// 创建全局axiosPost请求头默认值
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";

let instance = axios.create({
	// axios基础路径
	baseURL: "",
	// 响应超时时间 20s
	timeout: 20000,
});

// 请求拦截
instance.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		let token = "11";
		config.headers = {
			...config.headers,
			"Content-Type": "application/json;charset=utf-8",
		};
		if (token) {
			config.headers["access-token"] = token;
		}
		return config;
	},
	err => {
		console.log(err);
		return Promise.reject(err);
	}
);

// 响应拦截
instance.interceptors.response.use(
	(res: AxiosResponse) => {
		return res.data;
	},
	err => {
		return Promise.reject(err);
	}
);
/**
 * @desc 封装axios GET、POST、PUT、DELETE请求
 */
const service = {
	/**
	 * GET请求 T和D代表请求发送的数据 R代表响应时接受的数据
	 * @param url 请求完整地址
	 * @param params 请求参数
	 * @param config 请求的额外配置
	 * @link 额外配置查看：https://axios-http.com/zh/docs/instance
	 * @returns 返回一个Promise
	 * @example
	 *  interface GetApiParams {
	 *    name:string,
	 *    password:string
	 *  }
	 *  interface GetResData {
	 *    data:any,
	 *    code:number,
	 *    msg:string | null
	 *  }
	 *  service.get<GetApiParams,GetResData>("http://127.0.0.1/api/login",{name: "张三01",password: "2password"}).then((res)=>{
	 *    // ...
	 *    console.log(res.data);
	 *  }).catch((err)=>{
	 *    // ...
	 *  })
	 */
	get<T, R = any, D = T>(url: string, params: T, config?: AxiosRequestConfig) {
		return instance.get<T, R, D>(url, {
			params,
			...config,
		});
	},
	/**
	 * POST请求 T和D代表请求发送的数据 R代表响应时接受的数据
	 * @param url 请求完整地址
	 * @param data 请求参数
	 * @param config 请求的额外配置
	 * @link 额外配置查看：https://axios-http.com/zh/docs/instance
	 * @returns 返回一个Promise
	 * @example
	 *  interface PostApiData {
	 *    id:number,
	 *    name:string
	 *  }
	 *  service.post<PostApiData>("http://127.0.0.1/api/edit/user",{id:12,name:"李四"}).then((res)=>{
	 *    // ...
	 *  }).catch((err)=>{
	 *    // ...
	 *  })
	 */
	post<T, R = any, D = T>(url: string, data: D, config?: AxiosRequestConfig) {
		return instance.post<T, R, D>(url, data, { ...config });
	},
	/**
	 * PUT请求 T和D代表请求发送的数据 R代表响应时接受的数据
	 * @param url 请求完整地址
	 * @param data 请求参数
	 * @param config 请求的额外配置
	 * @link 额外配置查看：https://axios-http.com/zh/docs/instance
	 * @returns 返回一个Promise
	 * @example
	 *  interface PutApiData {
	 *    id:number,
	 *    name:string
	 *  }
	 *  service.put<PutApiData>("http://127.0.0.1/api/edit/user",{id:12,name:"李四"}).then((res)=>{
	 *    // ...
	 *  }).catch((err)=>{
	 *    // ...
	 *  })
	 */
	put<T, R = any, D = T>(url: string, data: D, config?: AxiosRequestConfig) {
		return instance.put<T, R, D>(url, data, { ...config });
	},
	/**
	 * DELETE请求 T和D代表请求发送的数据 R代表响应时接受的数据
	 * @param url 请求完整地址
	 * @param params 请求参数
	 * @param config 请求的额外配置
	 * @link 额外配置查看：https://axios-http.com/zh/docs/instance
	 * @returns 返回一个Promise
	 * @example
	 *  interface DelApiParams {
	 *    id:number
	 *  }
	 *
	 *  service.delete<DelApiParams>("http://127.0.0.1/api/delete/user",{id:1231}).then((res)=>{
	 *    // ...
	 *  }).catch((err)=>{
	 *    // ...
	 *  })
	 */
	delete<T, R = any, D = T>(url: string, params: T, config?: AxiosRequestConfig) {
		return instance.delete<T, R, D>(url, {
			params,
			...config,
		});
	},
	all: axios.all,
	spread: axios.spread,
};

export default service;
