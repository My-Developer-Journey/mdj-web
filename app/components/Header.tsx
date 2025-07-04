'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    const hideAuthButtons = pathname === '/login' || pathname === '/sign-up';

    return (
        <header className="py-[1.5rem] px-[5rem] bg-gray-100 flex items-center justify-between">
            <Link href="/">
                <img src="/logo.png" alt="Logo" className="h-10 w-auto cursor-pointer" />
            </Link>

            <div className="flex-1 flex justify-center px-10">
                <input
                type="text"
                placeholder="Search..."
                className="w-full max-w-[30rem] bg-[var(--primary-white)] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
            </div>

            <nav className="flex items-center space-x-8">
                <Link href="/blog" className="text-gray-700 hover:text-black font-medium">Blog</Link>
                <Link href="/help" className="text-gray-700 hover:text-black font-medium">Help & Support</Link>
                <Link href="/about" className="text-gray-700 hover:text-black font-medium">About</Link>
                {!hideAuthButtons && (
                <div className='flex flex-row gap-[0.5rem]'>
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
                )}
            </nav>
        </header>
    );
}
