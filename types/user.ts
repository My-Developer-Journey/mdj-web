export type User = {
    email: string;
    displayName: string;
    phoneNumber: string;
    avatar?: string;
    bio?: string;
    facebookUrl?: string;
    githubUrl?: string;
    gender: string;
    status: string;
    role: string;
    createdDate: string;
};

export type UserResponse = {
    id: string;
    email: string;
    displayName: string;
    phoneNumber: string;
    avatar?: string;
    bio?: string;
    facebookUrl?: string;
    githubUrl?: string;
    gender: string;
    status: string;
    role: string;
    createdDate: string;
};

export interface Author {
    avatar?: string;
    name?: string;
    posts?: number;
    likes?: number;
}