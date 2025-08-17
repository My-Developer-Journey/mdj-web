import { api } from "@/utilities/api";
import { PostRequest } from "../interfaces/post";

export const addPost = (data: PostRequest) => {
  return api("/posts/", {
    method: "POST",
    body: JSON.stringify(data),
  });
};