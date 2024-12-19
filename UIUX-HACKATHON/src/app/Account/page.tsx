"use client";
import Image from "next/image";
import Link from "next/link";
import rectangle from "@/app/pictures/Rectangle 1.png";
import logo from "@/app/pictures/Meubel House_Logos-05.png";
import text from "@/app/Pictures/Group 56 (3).png";
import { useState } from "react";
import Footer from "../components/Footer.tsx/Footer";

export default function Account() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <main>
      <div className="flex flex-col items-center justify-between">
        {/* Background Image Section */}
        <div className="relative w-full h-[316px] sm:h-[250px] lg:h-[316px]">
          <div className="absolute inset-0 -z-10">
            <Image
              src={rectangle}
              alt="background image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Logo and Heading Section */}
          <div>
            <div>
              <Image
                src={logo}
                alt="Logo"
                className="mx-auto mt-[61px] sm:mt-[30px]"
              />
            </div>

            <div className="w-full sm:w-[285px] h-auto mx-auto text-center">
              <h1 className="text-[32px] sm:text-[48px] mt-[16px]">
                My Account
              </h1>
              <div className="w-[174px] h-[24px] mx-auto mt-[10px]">
                <Image src={text} alt="Text" className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-6 md:px-8 md:py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Login Section */}
          <div className="bg-white p-4 md:p-8  sm:ml-[100px]">
            <h1 className="text-lg md:text-2xl font-bold mb-6">Log In</h1>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">
                Username or email address
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full h-[50px] md:h-[60px] border border-gray-400 rounded-lg px-4"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder=""
                className="w-full h-[50px] md:h-[60px] border border-gray-400 rounded-lg px-4"
              />
            </div>
            <div className="flex items-center mb-6">
              <input
                id="rememberMe"
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
                className="w-5 h-5 border-gray-300 rounded focus:ring-2"
              />
              <label
                htmlFor="rememberMe"
                className="ml-3 text-sm font-semibold"
              >
                Remember me
              </label>
            </div>
            <div className="flex items-center justify-between">
              <button className="w-full md:w-[200px] h-[40px] md:h-[50px] border-black border-[1px]  hover:bg-gray-700 rounded-lg font-semibold">
                Log In
              </button>
              <Link
                href="/forgot-password"
                className="text-sm hover:underline ml-4"
              >
                Lost Your Password?
              </Link>
            </div>
          </div>

          {/* Register Section */}
          <div className="bg-white p-4 md:p-8  sm:mr-[100px]">
            <h1 className="text-lg md:text-2xl font-bold mb-6">Register</h1>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">
                Email address
              </label>
              <input
                type="email"
                placeholder=""
                className="w-full h-[50px] md:h-[60px] border border-gray-400 rounded-lg px-4"
              />
            </div>
            <p className="text-sm text-gray-600 mb-6">
              A link to set a new password will be sent to your email address.
            </p>
            <p className="text-sm text-gray-600 mb-6">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <span className="font-bold">privacy policy</span>.
            </p>
            <button className="w-[215px] h-[64px] md:h-[50px] border-black border-[1px] hover:bg-gray-700 rounded-lg font-semibold">
              Register
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
