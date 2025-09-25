import { api } from "@/utilities/api";
import { PostRequest } from "../types/post";

export const addPost = (data: PostRequest, file: File | null = null) => {
  const formData = new FormData();

  if (data.scheduledPublishDate && !data.scheduledPublishDate.includes("T")) {
    data.scheduledPublishDate = `${data.scheduledPublishDate}T00:00:00`;
  }

  formData.append(
    "request",
    new Blob([JSON.stringify(data)], { type: "application/json" })
  );

  if (file) {
    formData.append("file", file);
  }

  return api("/posts", {
    method: "POST",
    body: formData,
  });
};

export const checkDraftExist = async () => {
  return api("/posts/draft", {
    method: "GET"
  });
};

export const updatePost = (postId: string, data: PostRequest, file: File | null = null) => {
  const formData = new FormData();

  if (data.scheduledPublishDate && !data.scheduledPublishDate.includes("T")) {
    data.scheduledPublishDate = `${data.scheduledPublishDate}T00:00:00`;
  }

  formData.append(
    "request",
    new Blob([JSON.stringify(data)], { type: "application/json" })
  );

  if (file) {
    formData.append("file", file);
  }

  return api(`/posts/${postId}`, {
    method: "PUT",
    body: formData,
  });
};

export const getUserPosts = async () => {
  return api("/posts/me", {
    method: "GET"
  });
};