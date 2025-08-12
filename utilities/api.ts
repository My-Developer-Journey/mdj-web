const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const api = async (
    path: string,
    options: RequestInit = {}
): Promise<Response> => {
    const url = `${BASE_URL}${path}`;
    const res = await fetch(url, {
        ...options,
        headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
        },
        credentials: "include",
    });

    return res;
};
