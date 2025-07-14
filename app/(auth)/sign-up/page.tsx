'use client'

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from 'react-toastify';
import GoogleLoginButton from "../../components/GoogleLoginButton";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmedPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/api/authentications/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          userName,
          gender,
          password,
          phoneNumber,
          confirmedPassword,
          role: 1
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        console.log(result)
        console.log(JSON.stringify({
          email,
          userName,
          gender,
          password,
          phoneNumber,
          confirmedPassword,
          role: 1
        }))
        toast.error(result.message || "Sign up failed");
        return;
      }

      toast.success(result.message || "Sign up successful. Please verify your email!");

    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="mt-[8rem] flex flex-col justify-center items-center">
      <Link href="/">
        <img src="/logo.png" alt="Logo" className="h-10 w-auto cursor-pointer" />
      </Link>

      <div className="border border-gray-300 w-[30rem] my-[2rem] rounded-xl px-[2.5rem] pt-[3rem] pb-[3rem]">
        <h1 className="text-[2rem] font-bold mb-6 text-center">Create an account!</h1>

        <form className="space-y-5" onSubmit={handleSignUp}>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1">Email*</label>
            <input
              type="email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">UserName*</label>
            <input
              type="text"
              id="userName"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="diemyolo"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Phone number*</label>
            <input
              type="text"
              id="phoneNumber"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="0123456789"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Gender*</label>
            <select
              id="gender"
              required
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="0">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-semibold mb-1">Password*</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                required
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="confirmedPassword" className="text-sm font-semibold mb-1">Confirmed Password*</label>
            <div className="relative">
              <input
                type={showConfirmedPassword ? "text" : "password"}
                id="confirmedPassword"
                required
                placeholder="••••••••"
                onChange={(e) => setConfirmedPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirmedPassword(prev => !prev)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                {showConfirmedPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--primary-black)] text-[var(--primary-white)] py-2 rounded-md hover:bg-gray-800 transition-all cursor-pointer"
          >
            Sign up
          </button>
        </form>

        <h1 className="text-center my-[0.5rem]">or</h1>
        <GoogleLoginButton />

        <div className="mt-[1.5rem] flex flex-col justify-center items-center">
          <h1>
            Already have an account?{" "}
            <Link href="/login" className="text-[var(--primary-black)] hover:underline font-bold">
              Sign in
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignUp;