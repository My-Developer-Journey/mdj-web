'use client';

import { createContext, useContext, useState } from 'react';

type LoadingContextType = {
    isLoading: boolean;
    setLoading: (loading: boolean) => void;
};

const LoadingContext = createContext<LoadingContextType>({
    isLoading: false,
    setLoading: () => {},
});

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState(false);

    const setLoading = (loading: boolean) => {
        setIsLoading(loading);
    };

    return (
        <LoadingContext.Provider value={{ isLoading, setLoading }}>
        {children}
        {isLoading && (
            <div className="fixed inset-0 z-[9999] bg-white/70 backdrop-blur-sm flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-var[--primary-black]" />
            </div>
        )}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => useContext(LoadingContext);
