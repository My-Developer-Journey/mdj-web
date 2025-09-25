import { UserResponse } from "./user";

export type AuthContextType = {
    user: UserResponse | null;
    isLoading: boolean;
    setUser: (user: UserResponse | null) => void;
};

export interface SignUp {
    email: string;
    displayName: string;
    gender: string;
    password: string;
    phoneNumber: string;
    confirmedPassword: string;
    role: number;
};