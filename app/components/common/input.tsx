import React from 'react';
import { InputProps } from '../../types/input';


export const Input: React.FC<InputProps> = ({ label, error, className = '', wrapperClassName = '', ...props }) => {
    return (
        <div className={`flex flex-col gap-1 w-full ${wrapperClassName}`}>
        {label && <label className="font-medium text-sm">{label}</label>}
        
        <input
            {...props}
            className={`bg-white px-4 py-2 border rounded-sm focus:outline-none focus:ring-1 
            ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-black'}
            ${className}
            `}
        />

        {error && <span className="text-sm text-red-500">{error}</span>}
        </div>
    );
};
