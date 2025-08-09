'use client';

import { api } from "@/util/api";
import { UserType } from "@/app/types/account";

export const updateProfile = (data: Partial<UserType>) => {
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
    credentials: "include", // giữ cookie session nếu có
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Upload avatar failed:", errorText);
    throw new Error("Upload failed");
  }

  const { data } = await res.json(); // backend trả về ApiResponse<UserResponse>
  return data; // data chính là UserResponse
};



