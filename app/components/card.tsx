import React from 'react';

export const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={`rounded-xl bg-white shadow-[0_0_12px_rgba(0,0,0,0.25)] ${className}`}>
        {children}
    </div>
);

export const CardContent = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={`p-4 ${className}`}>
        {children}
    </div>
);