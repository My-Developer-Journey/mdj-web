import { PostRequest } from "../interfaces/post";

export const defaultPostValues: PostRequest = {
    title: "",
    content: "",
    contentJson: {},
    authorId: "your-author-id",
    categoryIds: [],
    tagIds: [],
    postStatus: "DRAFT",
    scheduledPublishDate: "",
};