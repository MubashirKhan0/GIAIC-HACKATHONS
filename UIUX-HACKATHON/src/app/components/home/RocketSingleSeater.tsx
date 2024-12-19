import Link from "next/link";
import Image from "next/image";
import sofa from "@/app/Pictures/Rocket single seater 1 (3).png";

export default function RocketSingleSeater() {
    return (
      <main>
        <div className="w-full h-[1025px]   bg-[#FBEBB5] flex flex-col items-center">
          {/* Hero Section */}
          <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12">
            <div className="text-center lg:text-left">
              <h1 className="text-[32px] lg:text-[64px] font-poppins leading-[40px] lg:leading-[96px] font-bold">
                Rocket single seater
              </h1>
              <button className="text-lg lg:text-2xl mt-4 lg:mt-8 border-b-[2px] border-black font-bold px-6 py-2 ">
                Shop Now
              </button>
              
            </div>
            <div className="mt-8 lg:mt-0">
              <Image
                src={sofa}
                alt="sofa"
                className="w-full max-w-[400px] lg:max-w-[853px] h-auto"
              />
            </div>
          </div>
          </div>
          </main>
          )}