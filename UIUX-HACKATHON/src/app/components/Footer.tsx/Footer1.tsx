import Link from "next/link";

export default function Footer1() {
  return (
    <div className="w-full px-6 md:px-[50px] lg:px-[100px]  mt-[98px] py-8 border-b" >
      <div className="w-full max-w-[1131px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center ">
        {/* Address Section */}
        <div className="w-full lg:w-[285px] mb-6 lg:mb-0 text-[#9F9F9F]">
          <p className="text-center lg:text-left">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div className="w-full lg:w-[710px] flex flex-col sm:flex-row justify-between gap-8">
          {/* Links */}
          <div>
            <ul className="space-y-3 text-center sm:text-left">
              <li className="text-[#9F9F9F] font-semibold">Links</li>
              <li>
                <Link href="./" className="hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <Link href="./Shop" className="hover:text-gray-700">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/About" className="hover:text-gray-700">
                  About
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="hover:text-gray-700">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <ul className="space-y-3 text-center sm:text-left">
              <li className="text-[#9F9F9F] font-semibold">Help</li>
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full max-w-[300px] mx-auto lg:mx-0">
            <h2 className="text-[#9F9F9F] font-semibold mb-3 text-center lg:text-left">
              Newsletter
            </h2>
            <form className="flex items-center gap-3 justify-center lg:justify-start">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-[70%] sm:w-[180px] lg:w-[200px] text-sm border-b border-black focus:outline-none"
              />
              <button
                type="submit"
                className="text-sm text-black hover:text-gray-700"
              >
                <u>SUBSCRIBE</u>
              </button>
            </form>
          </div>
        </div>
        
      </div>

      {/* Footer Bottom */}
      <div className="w-full mt-8 border-t border-[#D9D9D9] pt-4">
        <p className="lg:ml-[150px] text-sm text-[#9F9F9F]">
          2022 Meubel House. All rights reserved
        </p>
      </div>
    </div>
  );
}
