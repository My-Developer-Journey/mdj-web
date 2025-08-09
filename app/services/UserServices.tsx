'use client';

import { api } from "@/util/api";
import { UserType } from "@/app/types/account";

export const updateProfile = (data: Partial<UserType>) => {
  return api("/users/profile", {
    method: "PUT",
    body: JSON.stringify(data),
  });
};


