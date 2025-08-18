import { UserResponse } from "../interfaces/user";

export type AuthContextType = {
    user: UserResponse | null;
    isLoading: boolean;
    setUser: (user: UserResponse | null) => void;
};