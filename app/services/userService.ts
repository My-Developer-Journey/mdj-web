'use client';

import { User } from "@/app/interfaces/user";
import { api } from "@/utilities/api";

export const updateProfile = (data: Partial<User>) => {
  return api("/users/profile", {
    method: "PUT",
    body: JSON.stringify(data),
  });
};

export const uploadAvatar = async (file: File, email: string) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("email", email);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/profile/avatar`, {
    method: "PUT",
    body: formData,
    credentials: "include",
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Upload avatar failed:", errorText);
    throw new Error("Upload failed");
  }

  const { data } = await res.json();
  return data;
};



