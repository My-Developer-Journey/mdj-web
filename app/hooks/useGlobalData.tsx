import useSWR from "swr";
import { fetchGlobalData } from "../services/global.service";

export function useGlobalData() {
    const { data, error } = useSWR("globalData", fetchGlobalData);

    return {
        categories: data?.categories || [],
        tags: data?.tags || [],
        error
    };
}