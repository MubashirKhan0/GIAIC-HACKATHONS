"use client";
import Image from "next/image";
import Link from "next/link";
import home from "@/app/Pictures/Group 84.png";
import shop from "@/app/Pictures/Group 85.png";
import RelatedProducts from "@/app/components/Card/RelatedProducts";

import asgaardsofa from "@/app/Pictures/Group 62.png";
import pic1 from "@/app/Pictures/Group 94.png";
import pic2 from "@/app/Pictures/Group 98.png";
import pic3 from "@/app/Pictures/Group 97.png";
import pic4 from "@/app/Pictures/Group 96.png";
import pic5 from "@/app/Pictures/Group 95.png";
import rating from "@/app/Pictures/Group 88.png";
import facebook from "@/app/pictures/akar-icons_facebook-fill.png";
import linkedin from "@/app/pictures/akar-icons_linkedin-box-fill.png";
import twitter from "@/app/pictures/ant-design_twitter-circle-filled.png";
import mask1 from "@/app/pictures/Mask group (2).png";
import mask2 from "@/app/pictures/Mask group (1).png";
import vector from "@/app/Pictures/Vector (7).png";
import vector2 from "@/app/Pictures/Vector (8).png";
import sofa from "@/app/Pictures/Asgaard sofa 1.png";


import { useState } from "react";

export default function product() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [count, setCount] = useState(0);
  return (
    <main >
      <div className="">
        <div className="w-[390px]   px-[20px] gap-[24px]  sm:w-[200px] h-[50px] flex justify-between items-center sm:flex-row  ">
          <Image src={home} alt="" />
          <Image src={shop} alt="" />
          <Image src={asgaardsofa} alt="" />
        </div>

        <div className="w-full sm:w-[1440px] h-auto mt-[32px] flex flex-col sm:flex-row justify-between sm:px-[100px] px-4">
          {/* Image Gallery */}
          <div className="w-full sm:w-[553px] h-auto sm:h-[500px] flex flex-col sm:flex-row justify-between sm:gap-4 gap-2 mx-auto ">
            <div className="w-full sm:w-[76px] sm:h-[416px]  flex-col items-center gap-2 sm:flex hidden">
              <Image src={pic1} alt="" className="object-contain" />
              <Image src={pic2} alt="" className="object-contain" />
              <Image src={pic3} alt="" className="object-contain" />
              <Image src={pic4} alt="" className="object-contain" />
            </div>
            <div className="w-full sm:w-[423px] sm:h-[500px] flex items-center mt-4 sm:mt-0 bg-[#FFF9E5]">
              <Image src={pic5} alt="" className="object-contain" />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full sm:w-[606px] h-auto sm:h-[730px] mx-auto sm:mx-0 mt-6 sm:mt-0">
            <div className="text-[32px] sm:text-[42px] ">Asgaard sofa</div>
            <div className="text-[20px] sm:text-[24px] text-[#9F9F9F] mt-2">
              Rs. 250,000.00
            </div>

            {/* Rating */}
            <div className="mt-[15px] flex items-center">
              <Image src={rating} alt="" className="w-[90px] h-[20px]" />
              <div className="h-[30px] border-[1px] mx-4"></div>
              <div className="text-[#9F9F9F] text-[13px]">
                5 Customer Reviews
              </div>
            </div>

            {/* Product Description */}
            <div className="mt-[13px] text-[13px] sm:text-[15px] text-[#333]">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio that boasts a clear midrange and extended highs for a sound.
            </div>

            {/* Size Selection */}
            <div className="mt-[22px]">
              <div className="text-[#9F9F9F] text-[13px]">Size</div>
              <div className="flex  mt-[12px] text-black text-[13px] gap-2">
                <button className="w-[30px] h-[30px] rounded-[5px] bg-[#FBEBB5]">
                  L
                </button>
                <button className="w-[30px] h-[30px] rounded-[5px] bg-[#FAF4F4]">
                  XL
                </button>
                <button className="w-[30px] h-[30px] rounded-[5px] bg-[#FAF4F4]">
                  XS
                </button>
              </div>
            </div>

            {/* Color Selection */}
            <div className="mt-[22px]">
              <div className="text-[#9F9F9F] text-[13px]">Color</div>
              <div className="flex  mt-[12px] text-black text-[13px] gap-2">
                <button className="w-[30px] h-[30px] rounded-full bg-[#816DFA]"></button>
                <button className="w-[30px] h-[30px] rounded-full bg-[#000000]"></button>
                <button className="w-[30px] h-[30px] rounded-full bg-[#CDBA7B]"></button>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mt-[32px] flex  gap-[18px]">
              <div className="w-[123px] h-[64px] border-[1px] flex justify-between items-center px-[15px] rounded-[10px] text-black border-[#9F9F9F]">
                <button onClick={() => setCount(count - 1)}>-</button>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)}>+</button>
              </div>
              <div>
                {/* ADD TO CART */}
                <button
                  className="w-[215px] h-[64px] border-[1px] text-black border-black rounded-2xl hover:bg-slate-600"
                  onClick={() => setIsCartOpen(true)}
                >
                  Open Cart
                </button>

                {/* Background Blur */}
                {isCartOpen && (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-opacity duration-300"
                    onClick={() => setIsCartOpen(false)}
                  ></div>
                )}

                {/* Cart Sidebar */}
                <div
                  className={`fixed top-0 right-0 h-[746px] w-[417px] sm:w-[417px] bg-white shadow-lg z-50 transform ${
                    isCartOpen ? "translate-x-0" : "translate-x-full"
                  } transition-transform duration-300 ease-in-out`}
                >
                  <div className="w-full h-full flex flex-col">
                    {/* Cart Header */}
                    <div className="w-full p-4 flex justify-between items-center border-b border-gray-200">
                      <h1 className="text-lg font-bold">Shopping Cart</h1>

                      <button
                        className="text-gray-500 hover:text-gray-700 transition"
                        onClick={() => setIsCartOpen(false)}
                      >
                        <Image src={vector} alt="Close" />
                      </button>
                    </div>

                    {/* Cart Items */}
                    <div className="p-4 flex-1 overflow-y-auto">
                      <div className="flex items-center justify-between gap-4">
                        <div className="w-24 h-24 bg-[#FBEBB5] rounded-lg">
                          <Image src={sofa} alt="Sofa" width={96} height={96} />
                        </div>
                        <div className="flex-1">
                          <h2 className="font-semibold text-sm">
                            Asgaard Sofa
                          </h2>
                          <p className="text-gray-500 text-sm mt-1">
                            1 x{" "}
                            <span className="text-[#B88E2F]">
                              Rs. 250,000.00
                            </span>
                          </p>
                        </div>
                        <button className="text-gray-400 hover:text-red-500">
                          <Image src={vector2} alt="Remove Item" />
                        </button>
                      </div>
                    </div>

                    {/* Cart Footer */}
                    <div className="p-4 border-t border-gray-200">
                      <div className="flex justify-between mb-4">
                        <span className="font-semibold">Subtotal</span>
                        <span className="font-semibold text-[#B88E2F]">
                          Rs. 250,000.00
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Link href="/cart">
                          <button className="w-[131px] py-2 border border-gray-300 rounded-[50px] text-sm hover:bg-[#A77B28]">
                            View Cart
                          </button>
                        </Link>
                        <Link href="/checkout">
                          <button className="w-[131px] py-2 border border-gray-300   rounded-[50px] text-sm hover:bg-[#A77B28]">
                            Checkout
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-[605px] border-[1px] mt-[60px] border-[#D9D9D9] mx-auto"></div>

            <div className="w-[300px] h-[200px] mt-[41px] text-[#9F9F9F] ">
              <div className="flex flex-col-3 ">
                <ul className="w-[75px] h-[200px] grid items-center">
                  <li>SKU</li>
                  <li>Category</li>
                  <li>Tags</li>
                  <li>Share</li>
                </ul>
                <ul className="w-[4px] h-[200px] grid items-center">
                  <li>:</li>
                  <li>:</li>
                  <li>:</li>
                  <li>:</li>
                </ul>
                <ul className="w-[190px] h-[200px] grid items-center  ml-[12px]">
                  <li>SS001</li>
                  <li>Sofas</li>
                  <li>Sofa, Chair, Home, Shop</li>
                  <li className="w-[115px] h-[20px] flex items-center justify-between">
                    <Image src={facebook} alt="" className="" />
                    <Image src={linkedin} alt="" className="" />
                    <Image src={twitter} alt="" className="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-[1440px] h-auto sm:h-[744px] border-t-[1px] border-b-[1px] border-[#D9D9D9] mt-[70px]">
        <div className="text-2xl flex flex-wrap justify-between items-center gap-[53px] mt-[48px] mx-[20px] sm:mx-[395px]">
          <ul className="flex flex-wrap items-center justify-between gap-[53px] w-full">
            <li className="text-xl sm:text-2xl">Description</li>
            <li className="text-[#9F9F9F] text-lg sm:text-2xl">
              Additional Information
            </li>
            <li className="text-[#9F9F9F] text-lg sm:text-2xl">Reviews [5]</li>
          </ul>
        </div>

        <div className="mx-[20px] sm:mx-[207px] mt-[30px] text-[#9F9F9F]">
          <p className="text-lg sm:text-xl text-justify">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>

          <p className="mt-[25px] text-lg sm:text-xl text-justify">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine-tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>

        <div className="flex flex-wrap gap-[29px] mx-[20px] sm:mx-[100px] mt-[36px] justify-center sm:justify-between">
          <Image
            src={mask1}
            alt=""
            className="bg-[#FFF9E5] w-full sm:w-[500px]"
          />
          <Image
            src={mask2}
            alt=""
            className="bg-[#FFF9E5] w-full sm:w-[500px]"
          />
        </div>
        
          
        </div>
        <RelatedProducts />
      
    </main>
  );
}
