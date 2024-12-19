"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import login from "@/app/pictures/mdi_account-alert-outline (1).png";
import search from "@/app/pictures/akar-icons_search (2).png";
import heart from "@/app/pictures/akar-icons_heart (1).png";
import cart from "@/app/pictures/ant-design_shopping-cart-outlined (1).png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
     <div className="w-full h-[100px] px-4 sm:px-8 md:px-[100px] flex justify-between items-center py-[38px] bg-[#FBEBB5]">
  {/* Logo and Navigation for all screen sizes */} 
  <div className="w-full flex justify-between items-center lg:mr-[200px]">
    {/* Left section with Home, Shop, About, Contact */}
    <div className="flex space-x-4 sm:space-x-8 md:ml-auto  font-bold">
      <Link href="./">Home</Link>
      <Link href="./Shop">Shop</Link>
      <Link href="/About">About</Link>
      <Link href="/Contact">Contact</Link>
    </div>
  </div>



        {/* Hamburger Menu and Icons */}
        <div className="ml-[200px] sm:w-[247px] hidden sm:block ">
          <ul className="flex justify-between">
            <li>
              
              <button className="w-[55px] h-[55px]">
              
              <Link href="./Account"><Image src={login} alt="Login" /></Link>
              </button>
            </li>
            
            <li>
              <button className="w-[55px] h-[55px]">
              <Image src={search} alt="Search" />
            </button>
            </li>
            
            <li>
            <button className="w-[55px] h-[55px]">
                <Link href="/SingleProduct"><Image src={heart} alt="Heart" /></Link>
              
            </button>
            </li>
            <li>
            <button className="w-[55px] h-[55px]">
              <Link href="/Cart"><Image src={cart} alt="Cart" /></Link>
              
            </button>
            </li>
          </ul>
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden w-[390px] h-[50px] flex justify-between bg-red-500     [#FBEBB5]">
          <ul className="flex justify-between items-center gap-[30px] px-[100px]">
            <li>
              <button>
              
              <Link href="/Account"><Image src={login} alt="Login" /></Link>
            </button>
            </li>
            <li>
              <Image src={search} alt="Search" />
            </li>
            <li>
            <Link href="/SingleProduct"><Image src={heart} alt="Heart" /></Link>
            </li>
            <li>
              <button>
              <Link href="./Cart"> <Image src={cart} alt="Cart" /></Link>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
