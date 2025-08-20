'use client';

import { InputProps } from "@/app/types/input";
import { Trash2, Upload } from "lucide-react";
import NextImage from "next/image";
import React, { useRef } from "react";

export const FileInput: React.FC<InputProps & { preview?: string | null, onRemove?: () => void }> = ({
    error,
    wrapperClassName = '',
    className = '',
    onChange,
    preview,
    onRemove,
    ...props
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const image = new Image();

            image.onload = () => {
                const width = image.width;
                const height = image.height;
                const aspectRatio = width / height;

                const isWideEnough = width >= 1000;
                const isAspectRatioOk = Math.abs(aspectRatio - 16 / 9) <= 0.05;

                if (isWideEnough && isAspectRatioOk) {
                    if (onChange) onChange(e);
                } else {
                    if (inputRef.current) inputRef.current.value = "";
                }
            };

            image.src = URL.createObjectURL(file);
        }
    };

    const handleRemoveImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        if (inputRef.current) inputRef.current.value = "";
        if (onRemove) onRemove();
    };

    const handleClickBox = () => {
        if (inputRef.current) inputRef.current.click();
    };

    return (
        <div className={`flex flex-col gap-2 w-full ${wrapperClassName}`}>
            <div
                className={`relative border-2 border-dashed rounded-md cursor-pointer transition-all overflow-hidden
                ${error ? 'border-red-500' : 'border-gray-300 hover:border-black'}
                ${className} group`}
                onClick={handleClickBox}
            >
                {preview ? (
                    <div className="relative w-full h-[12rem] bg-[var(--primary-black)] flex items-center justify-center rounded-md">
                        <NextImage
                            src={preview}
                            alt="Preview"
                            width={500}
                            height={500}
                            className="max-h-full max-w-full object-contain"
                        />
                        <button
                            onClick={handleRemoveImage}
                            className="absolute top-2 right-2 bg-red-500 bg-opacity-60 hover:bg-opacity-80 text-white rounded-full p-2 transition-all opacity-0 group-hover:opacity-100 z-50 cursor-pointer hover:shadow-sm hover:shadow-red-400"
                            title="Remove image"
                        >
                            <Trash2 className="w-4 h-4 text-white" />
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center w-full h-[12rem]">
                        <Upload className="w-8 h-8 text-gray-500 mb-2" />
                        <span className="text-sm text-gray-700">
                            Choose a file or drag and drop
                        </span>
                        <p className="text-xs text-gray-500 mt-1">
                            PNG, JPG, or JPEG (Max size: 2MB). Min width: 1200px | Ratio: 16:9.
                        </p>
                    </div>
                )}

                <input
                    ref={inputRef}
                    type="file"
                    className="hidden"
                    accept="image/png,image/jpeg,image/jpg"
                    onChange={handleFileChange}
                    {...props}
                />
            </div>

            {error && <span className="text-sm text-red-500">{error}</span>}
        </div>
    );
};