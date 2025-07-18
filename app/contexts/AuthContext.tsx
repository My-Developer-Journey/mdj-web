'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type User = {
    email: string;
    userName: string;
    phoneNumber: string;
    avatar?: string;
    bio?: string;
    facebookUrl?: string;
    githubUrl?: string;
    gender: 'MALE' | 'FEMALE' | 'OTHER';
    status: 'ACTIVE' | 'INACTIVE' | 'BANNED';
    role: 'USER' | 'ADMIN' | 'MOD';
};

type AuthContextType = {
    user: User | null;
    isLoading: boolean;
    setUser: (user: User | null) => void;
};

const AuthContext = createContext<AuthContextType>({ user: null, isLoading: true, setUser: () => {} });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, _setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const setUser = (newUser: User | null) => {
        _setUser(newUser);
    };

    useEffect(() => {
        const fetchMe = async () => {
            try {
                const res = await fetch('http://localhost:8080/api/users/profile', {
                    credentials: 'include',
                });

                if (res.ok) {
                    const data = await res.json();
                    setUser(data);
                } else {
                    setUser(null);
                }
            } catch (err) {
                console.error('Error fetching user:', err);
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        };
        fetchMe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, isLoading, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);