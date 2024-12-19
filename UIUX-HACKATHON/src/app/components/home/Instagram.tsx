import Image from "next/image";
import ins from "@/app/pictures/Group 43.png";

export default function Instagram() {
  return (
    <main>
      <div className="flex flex-col items-center justify-between">
        {/* Hero Section */}
        <div className="relative w-full h-[450px]">
          <div className="absolute inset-0 -z-10">
            <Image
              src={ins}
              alt="background image"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col items-center text-center px-4 mt-[124px] space-y-4">
            <h1 className="text-4xl lg:text-6xl font-extrabold">
              Our Instagram
            </h1>
            <p className="text-base lg:text-lg text-gray-600">
              Follow our store on Instagram
            </p>
            <div className="shadow-md hover:bg-slate-500 rounded-full bg-[#FAF4F4]">
              <button className="px-6 py-3 text-lg lg:text-xl">
                Follow Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
