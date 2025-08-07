import { UserType } from "./account";

export type AuthContextType = {
    user: UserType | null;
    isLoading: boolean;
    setUser: (user: UserType | null) => void;
};