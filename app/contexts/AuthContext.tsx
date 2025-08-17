'use client';

import { User } from '@/app/interfaces/user';
import { AuthContextType } from '@/app/types/authentication';
import { createContext, useContext, useEffect, useState } from 'react';
import { userProfile } from '../services/user.service';

const AuthContext = createContext<AuthContextType>({ user: null, isLoading: true, setUser: () => { } });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, _setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const setUser = (newUser: User | null) => {
        _setUser(newUser);
    };

    useEffect(() => {
        const fetchMe = async () => {
            try {
                const res = await userProfile();
                setUser(res.data);
            } catch (err) {
                console.error('No user to fetch:', err);
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