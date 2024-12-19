
import Image from "next/image";
import Link from "next/link";
import rectangle from "@/app/pictures/Rectangle 1.png";
import logo from "@/app/pictures/Meubel House_Logos-05.png";
import text from "@/app/Pictures/Group 56 (1).png";
import product from "@/app/pictures/Mask group.png";
import bin from "@/app/pictures/Vector (5).png";
import Footer from "../components/Footer.tsx/Footer";
import { useState } from "react";

export default function Cart() {

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
          <div className="w-[180px] sm:w-[200px] lg:w-[233px] mx-auto mt-8 sm:mt-10 lg:mt-14">
            <div>
              <Image src={logo} alt="Logo" className="m-auto" />
            </div>
            <div className="text-center mt-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug">
                Cart
              </h1>
              <div className="mt-6 sm:mt-8">
                <Image src={text} alt="Text" className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="  flex flex-col-reverse sm:flex-row w-full sm:h-[525px] lg:px-[100px]  justify-center mt-8">
        {/* Cart Items List */}
        <div className="flex-1 w-full sm:w-[60%]  p-4">
          <ul className="w-full h-[55px] flex justify-between items-center px-4 sm:px-10 bg-[#FFF9E5]  md:gap:[50px]">
            <li className="lg:ml-[80px] ">Product</li>
            <li >Price</li>
            <li className="lg:block hidden">Quantity</li>
            <li className="lg:block hidden">Subtotal</li>
            <li></li>
          </ul>
          <div className="w-full h-auto mt-4 bg-white">
            <ul className="flex justify-between items-center gap-4 sm:gap-10">
              <li className="flex items-center gap-3 sm:gap-6 text-[#9F9F9F]">
                <Image
                  src={product}
                  alt="product"
                  className="w-[80px] h-[80px] sm:w-[106px] sm:h-[106px] bg-[#FBEBB5] rounded-lg"
                />
                Asgaard sofa
              </li>
              <li className="text-[#9F9F9F] ">Rs. 250,000.00</li>
              <li className="w-[32px] h-[32px]  justify-center items-center border-[1px] rounded-[10px] lg:flex hidden ">
                1
              </li>
              <li className="lg:block hidden">Rs. 250,000.00</li>
              <li >
                <Image src={bin} alt="bin" />
              </li>
            </ul>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="sm:w-[393px] h-[390px]   bg-[#FFF9E5] p-4 mt-6 sm:mt-0 sm:ml-6 ">
          <h1 className="text-[28px] sm:text-[32px] sm:ml-[96px] font-bold mb-4">
            Cart Totals
          </h1>
          <ul className="flex justify-between px-6 mb-6">
            <li>Subtotal</li>
            <li className="text-[#9F9F9F]">Rs. 250,000.00</li>
          </ul>
          <ul className="flex justify-between items-center px-6 mb-6">
            <li>Total</li>
            <li className="text-xl text-[#B88E2F]">Rs. 250,000.00</li>
          </ul>
          <div className="mt-6 flex justify-center">
            <button className="w-[180px] sm:w-[222px] h-[58.95px] border-[1px] hover:bg-slate-600 border-black rounded-2xl">
              <Link href="/CheckOut">Checkout</Link>
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
