import type { TApiResponse } from "@devopage/shared";
import axios from "axios";
import { env } from "./env";

export class ApiError extends Error {
	status?: number;
	constructor(message: string, status?: number) {
		super(message);
		this.name = "ApiError";
		this.status = status;
	}
}

export const api = axios.create({
	baseURL: env.VITE_SERVER_URL,
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
});

api.interceptors.response.use(
	(res) => res,
	(error: unknown) => {
		if (axios.isAxiosError<TApiResponse<unknown>>(error)) {
			const data = error.response?.data;
			if (data && !data.success) {
				return Promise.reject(new ApiError(data.error));
			}
		}
		return Promise.reject(new ApiError("Internal Server Error"));
	},
);
