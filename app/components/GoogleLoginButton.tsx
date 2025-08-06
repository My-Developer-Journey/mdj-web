'use client'

import Image from 'next/image';

const GoogleLoginButton = () => {
    const handleGoogleLogin = () => {
        window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/google`;
    };

    return (
        <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full border border-gray-300 py-[0.75rem] rounded-lg hover:bg-gray-100 transition cursor-pointer"
        >
            <Image height="40" width="120" src="/google-icon.png" alt="Google" className="w-5 h-5 mr-4" />
            <span className="text-sm font-semibold text-gray-700">Continue with Google</span>
        </button>
    );
};

export default GoogleLoginButton;
