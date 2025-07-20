'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const EmailSentPage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const from = searchParams.get('from');

    useEffect(() => {
        if (from !== 'signup' && from !== 'login') {
        router.replace('/login');
        }
    }, [from, router]);

    return (
        <div className="text-center mt-[10rem]">
            <h1 className="text-[2rem] font-bold mb-4">Check your email</h1>
            <p>We’ve sent you a confirmation link. Please verify your email to continue.</p>
            
            <div className="mt-[4rem] flex justify-center">
                <Image
                src="/email-png.png"
                alt="Email Illustration"
                width={200}
                height={200}
                />
            </div>
            <div className="mt-10">
                <button
                    onClick={() => window.location.href = '/login'}
                    className="px-6 py-2 bg-[var(--primary-black)] text-[var(--primary-white)] rounded-md hover:bg-gray-800 transition-all cursor-pointer"
                >
                    Back to Login
                </button>
            </div>
        </div>
    );
};

export default EmailSentPage;