import type { TApiResponse } from "@devopage/shared";

export function unwrapApiResponse<T>(res: { data: TApiResponse<T> }): T {
	if (res.data.success) return res.data.data;
	throw new Error(res.data.error);
}
