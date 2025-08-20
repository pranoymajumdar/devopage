import axios from "axios";

export class ApiError extends Error {
  status?: number;
  constructor(message: string, status?: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.response.use(
  (res) => res,
  (error: unknown) => {
    if (axios.isAxiosError(error)) {
      const data = error.response?.data;
      if (data) {
        return Promise.reject(new ApiError(data));
      }
      return Promise.reject(new ApiError("Internal Server Error"));
    }

    return Promise.reject(new ApiError("Internal Server Error"));
  },
);
