import Image from "next/image";
import Link from "next/link";
import assgard from "@/app/Pictures/Asgaard sofa 1.png";


export default function Assgard() {
  return (
    <main >
    <div className="w-[full] h-auto bg-[#FFF9E5] flex flex-col lg:flex-row items-center justify-center p-4 ">
      <div className="w-full lg:w-auto flex justify-center">
        <Image 
          src={assgard} 
          alt="Asgaard Sofa" 
          className="max-h-[639px] w-full max-w-[983px] object-cover" 
        />
      </div>
      <div className="w-full lg:w-[331px] h-auto lg:h-[205px] mt-4 lg:mt-0 lg:ml-[65px] flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
        <div className="text-2xl font-medium">New Arrivals</div>
        <div className="text-4xl lg:text-5xl font-bold">Asgaard sofa</div>
        <button className="w-[255px] h-[64px] border-[1px] border-black hover:bg-slate-800 hover:text-white transition-all">
          <Link href="/SingleProduct">Order Now</Link>
        </button>
      </div>
    </div>
    </main>
  );
}
