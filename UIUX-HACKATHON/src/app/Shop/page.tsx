import Image from "next/image";
import rectangle from "@/app/pictures/Rectangle 1.png";
import logo from "@/app/pictures/Meubel House_Logos-05.png";
import text from "@/app/pictures/Group 56 (4).png";
import uicon from "@/app/pictures/system-uicons_filtering.png";
import bigrounds from "@/app/pictures/ci_grid-big-round.png";
import viewlist from "@/app/pictures/bi_view-list.png";
import Card from "@/app/components/Card/card";
import Footer from "../components/Footer.tsx/Footer";


type Product = {
  id: number;
  imageSrc: string;
  title: string;
  price: string;
};
export default function Shop() {
  const products: Product[] = [
    {
      id: 1,
      imageSrc: "/images/product1.png",
      title: "Trenton modular sofa_3",
      price: "25,000.00",
    },
    {
      id: 2,
      imageSrc: "/images/product2.png",
      title: "Granite dining table with dining chair",
      price: "25,000.00",
    },
    {
      id: 3,
      imageSrc: "/images/product3.png",
      title: "Outdoor bar table and stool",
      price: "25,000.00",
    },
    {
      id: 4,
      imageSrc: "/images/product4.png",
      title: "Plain console with teak mirror",
      price: "25,000.00",
    },
    {
      id: 5,
      imageSrc: "/images/product5.png",
      title: "Grain coffee table",
      price: "15,000.00",
    },
    {
      id: 6,
      imageSrc: "/images/product6.png",
      title: "Kent coffee table",
      price: "255,000.00",
    },
    {
      id: 7,
      imageSrc: "/images/product7.png",
      title: "Round coffee table_color 2",
      price: "251,000.00",
    },
    {
      id: 8,
      imageSrc: "/images/product8.png",
      title: "Reclaimed teak coffee table",
      price: "25,200.00",
    },
    {
      id: 9,
      imageSrc: "/images/product9.png",
      title: "Plain console_",
      price: "258,200.00",
    },
    {
      id: 10,
      imageSrc: "/images/product10.png",
      title: "Reclaimed teak Sideboard",
      price: "20,000.00",
    },
    {
      id: 11,
      imageSrc: "/images/product11.png",
      title: "SJP_0825  ",
      price: "200,000.00",
    },
    {
      id: 12,
      imageSrc: "/images/product12.png",
      title: "Bella chair and table",
      price: "100,000.00",
    },
    {
      id: 13,
      imageSrc: "/images/product13.png",
      title: "Granite square side table",
      price: "258,800.00",
    },
    {
      id: 14,
      imageSrc: "/images/product14.png",
      title: "Asgaard sofa",
      price: "250,000.00",
    },
    {
      id: 15,
      imageSrc: "/images/product15.png",
      title: "Maya sofa three seater",
      price: "115,000.00",
    },
    {
      id: 16,
      imageSrc: "/images/product16.png",
      title: "Outdoor sofa set",
      price: "244,000.00",
    },
    
  ];
  return (
    <main>
      {/* Header Section */}
      <div className="flex flex-col items-center">
        <div className="relative w-full h-[200px] md:h-[316px]">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <Image
              src={rectangle}
              alt="Background"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Logo and Shop Title */}
          <div className="text-center mt-[30px] md:mt-[55px]">
            <Image
              src={logo}
              alt="Meubel House Logo"
              width={80}
              height={90}
              className="mx-auto md:w-[124px] md:h-[132px]"
            />
            <h1 className="text-3xl md:text-5xl font-semibold mt-4">Shop</h1>
            <div className="w-[80px] h-[16px] mx-auto mt-2 md:w-[121px] md:h-[24px]">
              <Image src={text} alt="Decorative Text" width={121} height={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar Section */}
<div className="w-full h-[100px] bg-[#FAF4F4]    mt-[20px] px-4 sm:px-[50px] lg:px-[100px] flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 text-black">
  {/* Left Side (Icons + Filter Info) */}
  <div className="flex items-center  gap-4 sm:gap-6 sm:text-sm" >
    <Image src={uicon} alt="Filter Icon" width={25} height={25} />
    <span className="font-medium text-sm sm:text-2xl ">Filter</span>
    <Image src={bigrounds} alt="Grid Icon" width={28} height={28} />
    <Image src={viewlist} alt="List View Icon" width={24} height={24} />

    {/* Divider and Showing Results */}
    <div className="flex items-center ml-[30px] sm:ml-[20px] w-full sm:w-auto justify-between md:justify-start">
      {/* Hidden on small screens, visible on medium screens and larger */}
      <div className="hidden md:block border h-[30px] border-[#9F9F9F]"></div>
      <div className=" lg:block hidden text-xl ml-[34px]">Showing 1–16 of 32 results</div>
    </div>
  </div>

  <div className="flex items-center gap-4 mt-2 md:mt-0">
        <div className="flex items-center gap-1">
          <label htmlFor="show" className="text-xl   text-gray-700">Show</label>
          <select
            id="show"
            className="border border-gray-300 rounded-md p-1 text-sm focus:ring focus:ring-gray-300"
          >
            <option>16</option>
            <option>32</option>
            <option>64</option>
          </select>
        </div>

        <div className="flex items-center gap-1">
          <label htmlFor="sort" className="text-xl     text-gray-700">Sort by</label>
          <select
            id="sort"
            className="border border-gray-300  p-1 text-sm focus:ring focus:ring-gray-300"
          >
            <option>Default</option>
            <option>Price</option>
            <option>Newest</option>
          </select>
        </div>
      </div>


</div>
<main className="min-h-screen p-4 ">
     <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {products.map((product) => (
          <Card
            key={product.id}
            imageSrc={product.imageSrc}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-8">
      <span className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] bg-[#FBEBB5] rounded-[10px] flex items-center justify-center">
        1
      </span>
      <span className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] bg-[#FFF9E5] rounded-[10px] flex items-center justify-center">
        2
      </span>
      <span className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] bg-[#FFF9E5] rounded-[10px] flex items-center justify-center">
        3
      </span>
      <span className="w-[80px] h-[50px] lg:w-[98px] lg:h-[60px] bg-[#FFF9E5] rounded-[10px] flex items-center justify-center">
        Next
      </span>
    </div>
      
      </div>
    </main>
    <Footer/>
    </main>
  );
}


