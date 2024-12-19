import Image from "next/image";
import Link from "next/link";
import blog1 from "@/app/Pictures/Rectangle 13.png";
import blog2 from "@/app/Pictures/Rectangle 14.png";
import blog3 from "@/app/Pictures/Rectangle 15.png";
import details from "@/app/Pictures/Group 37.png";

export default function Blog() {
  return (
    <div className="w-full bg-white mt-[55px]">
      {/* Header Section */}
      <div className="w-full max-w-[1200px] mx-auto text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Our Blogs</h1>
        <p className="text-lg text-gray-500 font-semibold">
          Find a bright ideal to suit your taste with our great selection
        </p>
      </div>

      {/* Blog Section */}
      <div className="w-full max-w-[1200px] mx-auto mt-[65px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Blog Item */}
        {[blog1, blog2, blog3].map((blog, index) => (
          <div key={index} className="w-full flex flex-col items-center">
            <div className="w-full max-w-[393px] h-auto">
              <Image
                src={blog}
                alt={`Blog ${index + 1}`}
                className="w-full h-auto rounded-[10px]"
              />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-xl font-medium mb-2">
                Going all-in with millennial design
              </h2>
              <button className="text-xl font-bold border-b-2 border-black">
                Read More
              </button>
              <div className="mt-4">
                <Image
                  src={details}
                  alt="Details"
                  className="w-auto h-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="w-full flex justify-center mt-8">
        <button className="px-6 py-2 text-xl border-b-2 border-black font-bold">
         <Link href= "./Blog">View All Posts</Link>
          
        </button>
      </div>
    </div>
  );
}
