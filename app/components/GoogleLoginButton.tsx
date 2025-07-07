'use client';

import { GoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = () => {
    const handleSuccess = async (credentialResponse: any) => {
        const token = credentialResponse.credential;
        if (!token) return;

        try {
        const res = await fetch("http://localhost:8080/api/auth/oauth/google", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ token }),
        });

        if (!res.ok) {
            const error = await res.json();
            console.error("Google login failed:", error);
            alert(error.message || "Google login failed");
            return;
        }

        const data = await res.json();
        console.log("Google login success:", data);
        alert("Logged in with Google!");
        } catch (err) {
        console.error("Error:", err);
        alert("Something went wrong during Google login");
        }
    };

    return (
        <div className="mt-4 flex justify-center">
            <GoogleLogin onSuccess={handleSuccess} onError={() => alert("Google login failed")} locale='en'/>
        </div>
    );
};

export default GoogleLoginButton;
