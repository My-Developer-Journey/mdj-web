import { User } from "../interfaces/user";

export type AuthContextType = {
    user: User | null;
    isLoading: boolean;
    setUser: (user: User | null) => void;
};

export type SignUp = {
    email: string;
    displayName: string;
    gender: string;
    password: string;
    phoneNumber: string;
    confirmedPassword: string;
    role: number;
};