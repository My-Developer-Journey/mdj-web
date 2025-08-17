import { findAllCategories } from "@/app/services/category.service";
import { findAllTags } from "@/app/services/tag.service";

export async function fetchGlobalData() {
    const [categoriesRes, tagsRes] = await Promise.all([
        findAllCategories(),
        findAllTags()
    ]);

    return {categories: categoriesRes.data, tags: tagsRes.data}
}