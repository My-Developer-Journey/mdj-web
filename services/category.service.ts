import { api } from "@/utilities/api";

export const findAllCategories = () => {
    return api("/categories/all",
        { method: "GET" }
    );
};