import clsx from "clsx";
import React from "react";

type ButtonVariant = "black" | "gray" | "red";

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    className?: string;
    children: React.ReactNode;
}

export default function AppButton({
    variant = "black",
    className,
    children,
    ...props
}: AppButtonProps) {
    const baseStyle =
        "py-2 rounded-md transition-all cursor-pointer font-medium";

    const variantStyle = {
        black: "bg-[var(--primary-black)] text-[var(--primary-white)] hover:bg-gray-800",
        gray: "bg-gray-400 text-white hover:bg-gray-500",
        red: "bg-red-600 text-white hover:bg-red-700",
    };

    return (
        <button
        {...props}
        className={clsx(baseStyle, variantStyle[variant], className)}
        >
        {children}
        </button>
    );
}
