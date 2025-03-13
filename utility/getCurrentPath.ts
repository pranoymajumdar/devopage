import { headers } from "next/headers";

export const getCurrentPath = async (): Promise<string> => {
  const headersList = await headers();
  const fullUrl = headersList.get("referer") || "";
  console.log(headersList);
  try {
    const url = new URL(fullUrl);
    return url.pathname;
  } catch (error) {
    return "/";
  }
};
