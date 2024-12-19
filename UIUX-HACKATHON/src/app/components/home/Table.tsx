import Image from "next/image";
import Link from "next/link";
import Table from "@/app/Pictures/Granite square side table 1.png";
import sofa2 from "@/app/Pictures/Cloud sofa three seater + ottoman_3 1.png";

export default function TableSection() {
  return (
    <main>
      <div className="w-full bg-[#FAF4F4] flex flex-col items-center px-4 md:px-8 lg:px-[100px] py-6 md:py-8">
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-[30px] lg:flex-row w-full">
          {/* Side Table Section */}
          <div className="flex flex-col items-center lg:items-start w-full lg:max-w-[605px]">
            <div className="w-full h-auto flex justify-center">
              <Image
                src={Table}
                alt="Side Table"
                className="rounded-lg object-cover max-w-[300px] md:max-w-[400px] lg:max-w-full "
              />
            </div>
            <div className="mt-4 md:mt-6 text-center lg:text-left">
              <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold">
                Side Table
              </h2>
              <button className="text-base md:text-lg lg:text-2xl border-b-2 border-black mt-3 md:mt-4 hover:text-gray-700">
                View More
              </button>
            </div>
          </div>

          {/* Sofa Section */}
          <div className="flex flex-col items-center lg:items-start w-full lg:max-w-[605px] ">
            <div className="w-full h-auto flex justify-center items-center">
              <Image
                src={sofa2}
                alt="Cloud Sofa"
                className="rounded-lg object-cover max-w-[300px] md:max-w-[400px] lg:max-w-full  "
              />
            </div>
            <div className="mt-4 md:mt-6 text-center lg:text-left">
              <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold">
                Cloud Sofa
              </h2>
              <button className="text-base md:text-lg lg:text-2xl border-b-2 border-black mt-3 md:mt-4 hover:text-gray-700">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
