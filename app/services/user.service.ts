import { User } from "@/app/interfaces/user";
import { api } from "@/utilities/api";

export const updateProfile = (data: Partial<User>) => {
  return api("/users/profile", {
    method: "PUT",
    body: JSON.stringify(data),
  });
};

export const uploadAvatar = (file: File, email: string) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("email", email);

  return api("/users/profile/avatar", {
    method: "PUT",
    body: formData,
  });
};

export const userProfile = () => {
  return api("/users/profile", {
    method: "GET",
  });
};


