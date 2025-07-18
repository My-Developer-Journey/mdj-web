import { useGoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = () => {
    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
        const token = tokenResponse.access_token;

        const res = await fetch("http://localhost:8080/api/auth/oauth/google", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ token }),
        });

        const result = await res.json();
        alert("Logged in with Google!");
        },
        onError: () => alert("Google login failed"),
    });

    return (
        <button
            onClick={() => login()}
            className="flex items-center justify-center w-full border border-gray-300 py-[0.75rem] rounded-lg hover:bg-gray-100 transition cursor-pointer"
            >
            <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-4" />
            <span className="text-sm font-semibold text-gray-700">Continue with Google</span>
        </button>
    );
};

export default GoogleLoginButton;