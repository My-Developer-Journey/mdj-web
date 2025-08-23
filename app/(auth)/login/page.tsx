'use client'

import { signIn } from "@/app/services/authentication.service";
import { userProfile } from "@/app/services/user.service";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import GoogleLoginButton from "../../components/common/GoogleLoginButton";
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';

const Login = () => {
  const router = useRouter();
  const { setUser } = useAuth();
  const { setLoading } = useLoading();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const loginResult = await signIn({ email, password });

      if (
        loginResult.message ===
        "Internal server error: Your account is not verified. A new verification email has been sent."
      ) {
        router.push("/email-sent?from=login");
        return;
      }

      const userData = await userProfile();

      setUser(userData.data);
      setLoginError("");

      console.log(userData.data);

      if (userData.data?.role === "ADMIN") {
        router.push("/admin/");
      } else {
        router.push("/");
      }
    } catch (err) {
      if (err instanceof Error) {
        setLoginError(err.message);
      } else if (typeof err === "object" && err !== null && "message" in err) {
        setLoginError(String((err as { message: string }).message));
      } else {
        setLoginError("Something went wrong!");
      }

      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-[8rem] flex flex-col justify-center items-center">
      <div className="border border-gray-300 w-[30rem] mb-[2rem] rounded-xl px-[2.5rem] pt-[3rem] pb-[3rem]">
        <h1 className="text-[2rem] font-bold mb-1 text-center">Welcome Back!</h1>
        <h1 className="text-[0.875rem] font-medium mb-6 text-center text-gray-500">Enter your email and password to access your account</h1>

        <form onSubmit={handleLogin}>
          <div className="mb-[1rem]">
            <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-[0.5rem]">
            <label htmlFor="email" className="block text-sm font-semibold mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-[1rem]">
            <p
              className={`text-sm text-red-500 transition-all duration-200 font-semibold ${loginError ? "visible" : "invisible"
                } truncate max-w-full`}
            >
              {loginError || "placeholder"}
            </p>
            <Link href="/forgot-password" className="text-sm text-[var(--primary-black)] hover:underline">Forgot password?</Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--primary-black)] text-[var(--primary-white)] py-2 rounded-md hover:bg-gray-800 transition-all cursor-pointer"
          >
            Log in
          </button>
        </form>

        <div className="flex items-center my-[1rem]">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm font-medium">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <GoogleLoginButton />

        <div className="mt-[1.5rem] flex flex-col justify-center items-center">
          <h1>
            Don’t have an account?{" "}
            <Link href="/sign-up" className="text-[var(--primary-black)] hover:underline font-bold">
              Sign up
            </Link>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Login
