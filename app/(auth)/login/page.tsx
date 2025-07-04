'use client'

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center mt-[3rem]">
      <Link href="/">
        <img src="/logo.png" alt="Logo" className="h-10 w-auto cursor-pointer" />
      </Link>

      <div className="border border-gray-300 w-[30rem] my-[2rem] rounded-xl px-[2.5rem] pt-[3rem] pb-[3rem]">
        <h1 className="text-[2rem] font-bold mb-6 text-center">Welcome Back!</h1>

        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="password" className="text-sm font-semibold">Password</label>
              <Link href="/forgot-password" className="text-sm text-[var(--primary-black)] hover:underline">Forgot password?</Link>
            </div>
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

          <button
            type="submit"
            className="w-full bg-[var(--primary-black)] text-[var(--primary-white)] py-2 rounded-md hover:bg-gray-800 transition-all cursor-pointer"
          >
            Log in
          </button>
        </form>
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
