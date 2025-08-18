export type TApiResponse<T> =
	| {
			success: true;
			data: T;
	  }
	| { success: false; error: string };
