'use client'

import Image from "next/image";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../contexts/AuthContext';
import { useLoading } from '../contexts/LoadingContext';

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const { setLoading } = useLoading();
    const { user, isLoading, setUser } = useAuth();

    const [showDropdown, setShowDropdown] = useState(false)

    const hideAuthButtons = pathname === '/login' || pathname === '/sign-up' || pathname === '/email-sent'

    const handleLogout = async () => {
    setLoading(true);
    try {
        const res = await fetch('http://localhost:8080/api/authentications/logout', {
            method: 'POST',
            credentials: 'include'
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
            <div className="min-w-[80rem] max-w-[100rem] mx-auto py-[1.5rem] px-[5rem] flex items-center justify-between bg-gray-100 shadow-md">
                {/* Logo */}
                <Link href="/">
                    <Image height="40" width="120" src="/logo.png" alt="Logo" className="h-10 w-auto cursor-pointer" />
                </Link>

                {/* Search */}
                <div className="flex-1 flex justify-center px-10">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full max-w-[30rem] bg-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
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
                                <div className="relative">
                                    <Image
                                        src={user.avatar || '/default-avatar.png'}
                                        height="40" width="120"
                                        alt="Avatar"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setShowDropdown(prev => !prev);
                                        }}
                                        className="w-10 h-10 rounded-full cursor-pointer"
                                    />
                                    {showDropdown && (
                                        <div className="absolute right-0 top-12 bg-white shadow-lg rounded-md py-2 w-48 z-50">
                                            <Link href={`/${user?.displayName}`} className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</Link>
                                            <button
                                                onClick={handleLogout}
                                                className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    )}
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