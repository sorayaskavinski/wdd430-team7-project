'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }
 
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/home")  
  }

  return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-md mx-auto px-4 sm:px-0">

          <div className="flex flex-col w-full">
            <label htmlFor="email" className="mb-2 text-left text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="font-normal w-full px-4 py-2 rounded-md border border-white/30 bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          <div className="flex flex-col w-full">

            <label htmlFor="password" className="mb-2 text-left text-white">
              Password
            </label>

            <div className="relative w-full flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="font-normal w-full px-4 py-2 rounded-md border border-white/30 bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 pr-10"
              />
              <span onClick={togglePassword} id="togglePassword" className="absolute right-3 cursor-pointer flex items-center h-full">
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="text-white/70"
                  >
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                    <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                  </svg>
                  ) : (
                                      <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="text-white/70"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                  </svg>
                  )
                }
              </span>
            </div>
          </div>

          <div className="w-full">
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-white/30 text-white font-bold hover:bg-white/40 cursor-pointer transition"
            >
            LOG IN
            </button>
          </div>

          <Link href="/register" className="underline text-lg">Create User</Link>
        </form>
  )
}
