import service from "~/utils/request";
interface ApiWeek {
	version: string;
	appid: string;
	appsecret: string;
}
export function getApiWeek() {
	return service.get<ApiWeek>("http://www.tianqiapi.com/api", {
		version: "v9",
		appid: "23035354",
		appsecret: "8YvlPNrz",
	});
}
