import { api } from "@/utilities/api";

export const findAllTags = () => {
    return api("/tags/all",
        { method: "GET" }
    );
};