'use client'

import { api } from "@/utilities/api";
import { Bell, PencilLine } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';
import { Input } from "./InputBox";

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const { setLoading } = useLoading();
    const { user, isLoading, setUser } = useAuth();

    const [showDropdown, setShowDropdown] = useState(false);
    const [search, setSearch] = useState('');

    const hideAuthButtons = pathname === '/login' || pathname === '/sign-up' || pathname === '/email-sent'

    const handleLogout = async () => {
        setLoading(true);
        try {
            const res = await api('/authentications/logout', {
                method: 'POST',
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message || "Logout failed");
                return;
            }

            setUser(null);
            setTimeout(() => {
                router.push('/');
            }, 2000);

        } catch (err) {
            console.log(err);
            toast.error("Something went wrong");
        } finally {
            setTimeout(() => setLoading(false), 2000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);
    }


    const handleOutsideClick = () => {
        setShowDropdown(false);
    };

    useEffect(() => {
        if (showDropdown) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [showDropdown]);


    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <div className="min-w-[var(--min-width)] max-w-[var(--max-width)] mx-auto py-[1.5rem] px-[5rem] flex items-center justify-between bg-gray-100 shadow-md">
                {/* Logo */}
                <Link href="/">
                    <Image height="40" width="120" src="/logo.png" alt="Logo" className="h-10 w-auto cursor-pointer" />
                </Link>

                {/* Search */}
                <div className="flex-1 flex justify-center px-10">
                    <Input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={handleChange}
                        wrapperClassName="max-w-[30rem]"
                    />
                </div>

                {/* Nav */}
                <nav className="flex items-center space-x-8 relative">
                    <Link href="/blog" className="text-gray-700 hover:text-black font-medium">Blog</Link>
                    <Link href="/help" className="text-gray-700 hover:text-black font-medium">Help & Support</Link>
                    <Link href="/about" className="text-gray-700 hover:text-black font-medium">About</Link>

                    {!hideAuthButtons && (
                        isLoading ? (
                            <div className="w-24 h-10 bg-gray-300 animate-pulse rounded-md"></div>
                        ) : (
                            user ? (
                                <div className="flex items-center gap-[1.5rem] ml-[1rem]">
                                    <div className="relative group cursor-pointer">
                                        <Link href="/post/create" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
                                            <PencilLine className="w-5 h-5 text-gray-700" />
                                        </Link>
                                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap 
                                                        bg-black text-white text-xs rounded px-2 py-1 opacity-0 
                                                        group-hover:opacity-100 transition-opacity duration-200 z-50">
                                        Write post
                                        </div>
                                    </div>

                                    <div className="relative group cursor-pointer">
                                        <Link href="/notifications" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
                                            <Bell className="w-5 h-5 text-gray-700" />
                                        </Link>
                                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap 
                                                        bg-black text-white text-xs rounded px-2 py-1 opacity-0 
                                                        group-hover:opacity-100 transition-opacity duration-200 z-50">
                                            Notifications
                                        </div>
                                    </div>

                                    {/* Avatar + Dropdown */}
                                    <div className="relative">
                                        <Image
                                        src={user.avatar || "/default-avatar.png"}
                                        height={100}
                                        width={100}
                                        alt="Avatar"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setShowDropdown((prev) => !prev);
                                        }}
                                        className="rounded-full object-cover w-10 h-10 cursor-pointer"
                                        />
                                        {showDropdown && (
                                        <div className="absolute right-0 top-12 bg-white shadow-lg rounded-md py-2 w-48 z-50">
                                            <Link
                                            href={`/${user?.displayName}`}
                                            className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            >
                                            Profile
                                            </Link>
                                            <button
                                            onClick={handleLogout}
                                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            >
                                            Logout
                                            </button>
                                        </div>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="flex gap-2">
                                    <Link
                                        href="/login"
                                        className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href="/sign-up"
                                        className="bg-white text-black px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-200 transition-all"
                                    >
                                        Sign Up
                                    </Link>
                                </div>
                            )
                        )
                    )}
                </nav>
            </div>
        </header>
    )
}