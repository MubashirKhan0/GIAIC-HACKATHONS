import Image from "next/image";
import Link from "next/link";
import rectangle from "@/app/pictures/Rectangle 1.png";
import logo from "@/app/pictures/Meubel House_Logos-05.png";
import text from "@/app/pictures/Group 56 (6).png";
import pic1 from "@/app/Pictures/Rectangle 68 (1).png";
import t1 from "@/app/Pictures/Group 172.png";
import pic2 from "@/app/Pictures/Rectangle 68 (2).png";
import t2 from "@/app/Pictures/Group 172 (1).png";
import pic3 from "@/app/Pictures/Rectangle 68.png";
import search from "@/app/Pictures/akar-icons_search (1).png";
import image1 from "@/app/Pictures/Rectangle 69.png";
import image2 from "@/app/Pictures/Rectangle 69 (1).png";
import image3 from "@/app/Pictures/Rectangle 69 (2).png";
import image4 from "@/app/Pictures/Rectangle 69 (3).png";
import image5 from "@/app/Pictures/Rectangle 69 (4).png";
import Footer from "../components/Footer.tsx/Footer";


export default function page() {
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
                Blog
              </h1>
              <div className="mt-6 sm:mt-8">
                <Image src={text} alt="Text" className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
<div className="w-full h-auto mt-[106px] flex flex-col lg:flex-row">
  <div className="w-full lg:w-3/4 px-4">
    {/* Card 1 */}
    <div className="w-full max-w-[820px] mx-auto mb-8 ">
      <div className="rounded-[10px] overflow-hidden">
        <Image src={pic1} alt="" className="w-full h-auto" />
      </div>
      <div className="mt-4">
        <Image src={t1} alt="" className="w-[80%] md:w-[349px] h-[24px]" />
      </div>
      <div className="text-[20px] md:text-[30px] mt-4 mb-3 font-semibold">
        Going all-in with millennial design
      </div>
      <div className="text-[#9F9F9F] text-sm md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...
      </div>
      <div className="w-[89px] h-[36px] border-b-2 border-black text-[14px] md:text-[16px] font-semibold mt-6">
        Read More
      </div>
    </div>

    {/* Card 2 */}
    <div className="w-full max-w-[820px] mx-auto mb-8">
      <div className="rounded-[10px] overflow-hidden">
        <Image src={pic2} alt="" className="w-full h-auto" />
      </div>
      <div className="mt-4">
        <Image src={t2} alt="" className="w-[80%] md:w-[349px] h-[24px]" />
      </div>
      <div className="text-[20px] md:text-[30px] mt-4 mb-3 font-semibold">
        Exploring new ways of decorating
      </div>
      <div className="text-[#9F9F9F] text-sm md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...
      </div>
      <div className="w-[89px] h-[36px] border-b-2 border-black text-[14px] md:text-[16px] font-semibold mt-6">
        Read More
      </div>
    </div>

    {/* Card 3 */}
    <div className="w-full max-w-[820px] mx-auto mb-8">
      <div className="rounded-[10px] overflow-hidden">
        <Image src={pic3} alt="" className="w-full h-auto" />
      </div>
      <div className="mt-4">
        <Image src={t1} alt="" className="w-[80%] md:w-[349px] h-[24px]" />
      </div>
      <div className="text-[20px] md:text-[30px] mt-4 mb-3 font-semibold">
        Handmade pieces that took time to make
      </div>
      <div className="text-[#9F9F9F] text-sm md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...
      </div>
      <div className="w-[89px] h-[36px] border-b-2 border-black text-[14px] md:text-[16px] font-semibold mt-6">
        Read More
      </div>
    </div>

    {/* Pagination */}
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

  {/* Sidebar */}
  <div className="w-full lg:w-1/4  mt-8 lg:mt-0 mr-auto pr-[100px] px-4">
    {/* Search Bar */}
    <div className="w-full max-w-[393px] mx-auto">
      <div className="flex items-center border border-[#9F9F9F] rounded-[10px] px-4 py-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-full outline-none"
        />
        <Image src={search} alt="" className="w-6 h-6" />
      </div>
    </div>

    {/* Categories */}
    <div className="w-full max-w-[393px] mr-auto  mt-8">
      <div className="text-2xl font-semibold mb-4">Categories</div>
      <div className="flex justify-between text-[#9F9F9F]">
        <ul className="space-y-2">
          <li>Crafts</li>
          <li>Design</li>
          <li>Handmade</li>
          <li>Interior</li>
          <li>Wood</li>
        </ul>
        <ul className="space-y-2 text-right">
          <li>2</li>
          <li>8</li>
          <li>7</li>
          <li>1</li>
          <li>6</li>
        </ul>
      </div>
    </div>

    {/* Recent Posts */}
    <div className="w-full max-w-[393px] mx-auto mt-8">
      <div className="text-2xl font-semibold mb-4">Recent Posts</div>
      {[image1, image2, image3, image4, image5].map((img, index) => (
        <div key={index} className="flex items-center mb-6">
          <Image src={img} alt="" className="w-[60px] lg:w-[80px] rounded-md" />
          <div className="ml-4">
            <div className="font-semibold text-sm lg:text-base">
              Post title goes here
            </div>
            <div className="text-xs text-[#9F9F9F]">03 Aug 2022</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      <Footer/>
    </main>
  );
}
