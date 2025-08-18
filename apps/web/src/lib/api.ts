import axios from "axios";
import { env } from "./env";

export const api = axios.create({
	baseURL: env.VITE_SERVER_URL,
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
});

api.interceptors.response.use(
	(res) => res,
	(err) => {
		const message = err.response?.data?.error || err.message;
		return Promise.reject(new Error(message));
	},
);
