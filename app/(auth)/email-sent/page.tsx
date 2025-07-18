'use client';

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
        <div className="text-center mt-20">
        <h1 className="text-xl font-bold mb-4">Check your email ✉️</h1>
        <p>We’ve sent you a confirmation link. Please verify your email to continue.</p>
        </div>
    );
};

export default EmailSentPage;