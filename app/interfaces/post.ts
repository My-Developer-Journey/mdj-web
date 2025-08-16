export interface PostRequest {
    title: string;
    content: string;
    contentJson: Record<string, unknown>;
    authorId: string;
    categoryIds?: string[];
    tagIds?: string[];
    postStatus?: "DRAFT" | "PUBLISHED" | "SCHEDULED";
    scheduledPublishDate: string;
}