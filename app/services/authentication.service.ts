import { api } from "@/utilities/api";
import { SignUp } from "../interfaces/authentication";

export const signIn = (data: { email: string; password: string }) => {
    return api("/api/authentications/sign-in", {
        method: "POST",
        body: JSON.stringify(data),
    });
};

export const signUp = (data: SignUp) => {
    return api("/api/authentications/sign-up", {
        method: "POST",
        body: JSON.stringify(data),
    });
};

export const signOut = () => {
    return api("/api/authentications/logout", {
        method: "POST",
    });
};