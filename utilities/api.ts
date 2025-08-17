import { ApiResponse } from "@/app/interfaces/api";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const api = async <T = any>(
    path: string,
    options: RequestInit = {}
): Promise<ApiResponse<T>> => {
    const url = `${BASE_URL}${path}`;
    const res = await fetch(url, {
        ...options,
        headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
        },
        credentials: "include",
    });

    const json = (await res.json()) as ApiResponse<T>;

    return json;
};