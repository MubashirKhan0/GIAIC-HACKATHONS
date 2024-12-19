import Image from "next/image";
import rectangle from "@/app/pictures/Rectangle 1.png";
import logo from "@/app/pictures/Meubel House_Logos-05.png";
import address from "@/app/pictures/Vector (6).png";
import clock from "@/app/pictures/bi_clock-fill (1).png";
import phone from "@/app/pictures/bxs_phone (1).png";
import text from "@/app/pictures/Group 56.png";
import Footer from "../components/Footer.tsx/Footer";

export default function Cart() {
  return (
    <main>
      <div className="flex flex-col items-center justify-between">
        {/* Background Image Section */}
        <div className="relative w-full h-[316px] sm:h-[250px] md:h-[280px] lg:h-[316px]">
          <div className="absolute inset-0 -z-10">
            <Image
              src={rectangle}
              alt="background image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Logo and Heading Section */}
          <div className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[233px] mx-auto mt-8 sm:mt-10 lg:mt-14">
            <div>
              <Image src={logo} alt="Logo" className="m-auto" />
            </div>
            <div className="text-center mt-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-snug">
                Contact
              </h1>
              <div className="mt-6 sm:mt-8">
                <Image src={text} alt="Text" className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-auto sm:h-[1144px] md:h-[1200px] lg:h-auto px-4 sm:px-0">
        {/* Title Section */}
        <div className="w-full text-center mt-[98px] sm:mt-[120px]">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-semibold">
            Get In Touch With Us
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-[#9F9F9F] max-w-[90%] sm:max-w-[644px] mx-auto">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row w-full max-w-[1058px] mx-auto mt-[119px] gap-[42px] px-4">
          {/* Left Column: Contact Information */}
          <div className="flex flex-col mt-[58px] sm:w-[393px] text-center   w-full">
            {/* Address Section */}
            <div className="flex items-center mt-[58px] mx-auto sm:ml-[54px]">
              <Image src={address} alt="address" className="w-7 h-8" />
              <h1 className="ml-[30px] text-xl sm:text-2xl">Address</h1>
            </div>
            <p className="ml-[30px] sm:ml-[106px] text-sm sm:text-base ">
              236 5th SE Avenue, New York NY10000, United States
            </p>

            {/* Phone Section */}
            <div className="flex items-center mx-auto sm:ml-[54px] mt-[42px]">
              <Image src={phone} alt="phone" className="w-8 h-8" />
              <h1 className="ml-[30px] text-xl sm:text-2xl">Phone</h1>
            </div>
            <p className="ml-[30px] sm:ml-[106px] text-sm sm:text-base">
              <span>Mobile: +(84) 546-6789</span>
              <br />
              <span>Hotline: +(84) 456-6789</span>
            </p>

            {/* Working Time Section */}
            <div className="flex items-center mx-auto sm:ml-[54px] mt-[42px]">
              <Image src={clock} alt="clock" className="w-8 h-8" />
              <h1 className="ml-[30px] text-xl sm:text-2xl">Working Time</h1>
            </div>
            <p className="ml-[30px] sm:ml-[106px] text-sm sm:text-base">
              Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex flex-col sm:w-[635px] w-full sm:pl-[75px] sm:pt-[119px] mt-[42px] sm:mt-0">
            <div className="w-full">
              {/* Name Field */}
              <div>
                <h2>Your name</h2>
                <input
                  type="text"
                  placeholder="Abc"
                  className="w-full sm:w-[528px] h-[75px] border-[1px] rounded-[10px] px-[20px] mb-9 mt-[22px]"
                />
              </div>

              {/* Email Address Field */}
              <div>
                <h2>Email address</h2>
                <input
                  type="email"
                  placeholder="Abc@def.com"
                  className="w-full sm:w-[528px] h-[75px] border-[1px] rounded-[10px] px-[20px] mt-[22px] mb-9"
                />
              </div>

              {/* Subject Field */}
              <div>
                <h2>Subject</h2>
                <input
                  type="text"
                  placeholder="This is optional"
                  className="w-full sm:w-[528px] h-[75px] border-[1px] rounded-[10px] px-[20px] mt-[22px] mb-9"
                />
              </div>

              {/* Message Field */}
              <div>
                <h2>Message</h2>
                <input
                  placeholder="Hi! I'd like to ask about"
                  className="w-full sm:w-[528px] h-[120px] border-[1px] rounded-[10px] mt-[22px] mb-9 pb-[20px] px-[20px]"
                />
              </div>

              {/* Submit Button */}
              <button className="w-full sm:w-[237px] h-[48px] border-[1px] border-black rounded-2xl hover:bg-slate-600 mt-[22px] mb-[70px]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
