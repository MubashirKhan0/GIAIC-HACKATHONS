import Image from "next/image";
import rectangle from "@/app/pictures/Rectangle 1.png";
import logo from "@/app/pictures/Meubel House_Logos-05.png";
import text from "@/app/pictures/Group 56 (2).png";
import elispe from "@/app/pictures/Ellipse 1.png";
import elispe2 from "@/app/pictures/Ellipse 1 (1).png";
import Footer from "../components/Footer.tsx/Footer";

export default function Checkout() {
  return (
    <main>
      <div className="flex flex-col items-center justify-between ">
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
                Checkout
              </h1>
              <div className="mt-6 sm:mt-8">
                <Image src={text} alt="Text" className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row px-4 md:px-12 lg:px-[100px] mt-10 gap-8 sm:mx-[100px]">
        {/* Billing Details */}
        <div className="w-full lg:w-[60%] space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold">Billing Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-semibold">First Name</label>
              <input
                type="text"
                placeholder=""
                className="w-full h-[50px] md:h-[60px] border border-gray-400 rounded-lg px-4 mt-2"
              />
            </div>
            <div>
              <label className="font-semibold">Last Name</label>
              <input
                type="text"
                placeholder=""
                className="w-full h-[50px] md:h-[60px] border border-gray-400 rounded-lg px-4 mt-2"
              />
            </div>
          </div>
          <div>
            <label className="font-semibold">Company Name (Optional)</label>
            <input
              type="text"
              placeholder=""
              className="w-full h-[50px] md:h-[60px] border border-gray-400 rounded-lg px-4 mt-2"
            />
          </div>
          <div>
            <label className="font-semibold">Country / Region</label>
            <select className="w-full h-[50px] md:h-[60px] border border-gray-400 rounded-lg px-4 mt-2 text-gray-600">
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Pakistan">Pakistan</option>
              <option value="India">India</option>
              <option value="Bangladesh">Bangladesh</option>
            </select>
          </div>
          <div>
            <label className="font-semibold">Street address</label>
            <input
              type="text"
              placeholder=""
              className="w-full h-[50px] md:h-[60px] border border-gray-400 rounded-lg px-4 mt-2"
            />
          </div>
          <div>
            <label className="font-semibold">Town / City</label>
            <input
              type="text"
              placeholder=""
              className="w-full h-[50px] md:h-[60px] border border-gray-400 rounded-lg px-4 mt-2"
            />
          </div>
          <div>
            <label className="font-semibold">Province</label>
            <select className="w-full h-[50px] md:h-[60px] border border-gray-400 rounded-lg px-4 mt-2 text-gray-600">
              <option value="Western Province">Western Province</option>
              <option value="Sindh">Sindh</option>
              <option value="Punjab">Punjab</option>
              <option value="Balochistan">Balochistan</option>
              <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
            </select>
          </div>
          <div>
            <label className="font-semibold">ZIP Code</label>
            <input
              type="text"
              placeholder=""
              className="w-full h-[50px] md:h-[60px] border border-gray-400 rounded-lg px-4 mt-2"
            />
          </div>
          <div>
            <label className="font-semibold">Phone</label>
            <input
              type="text"
              placeholder=""
              className="w-full h-[50px] md:h-[60px] border border-gray-400 rounded-lg px-4 mt-2"
            />
          </div>
          <div>
            <label className="font-semibold">Email Address</label>
            <input
              type="text"
              placeholder=""
              className="w-full h-[50px] md:h-[60px] border border-gray-400 rounded-lg px-4 mt-2"
            />
          </div>
          <div>
            <label className="font-semibold"></label>
            <input
              type="text"
              placeholder="Additional Information"
              className="w-full h-[50px] md:h-[60px] border border-gray-400 rounded-lg px-4 mt-2 mb-[121px]"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl mx-auto px-4 py-6 lg:px-0">
          <div className="px-6 md:px-8 lg:px-12  ">
            <div className="space-y-8">
              {/* Product Section */}
              <div className="flex flex-col md:flex-row justify-between  space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-full md:w-1/2 space-y-2">
                  <h2 className="text-xs sm:text-base font-semibold">
                    Product
                  </h2>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm">
                      Asgaard Sofa <span>x</span> <span>1</span>
                    </span>
                  </div>
                  <div className="font-semibold text-xs sm:text-sm">
                    Subtotal
                  </div>
                  <div className="font-semibold text-xs sm:text-sm">Total</div>
                </div>

                <div className="w-full md:w-1/2 text-right space-y-2">
                  <h2 className="text-xs sm:text-base font-semibold">
                    Subtotal
                  </h2>
                  <div className="text-xs sm:text-sm">Rs. 250,000.00</div>
                  <div className="text-xs sm:text-sm">Rs. 250,000.00</div>
                  <div className="text-[#B88E2F] text-xs sm:text-lg font-semibold">
                    Rs. 250,000.00
                  </div>
                </div>
              </div>

              <hr className="border-t border-gray-300" />

              {/* Payment Options */}
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <Image src={elispe} alt="." />
                  <span>Direct Bank Transfer</span>
                </li>
                <li className="text-gray-600">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </li>
                <li className="flex items-center space-x-4 text-gray-600">
                  <Image src={elispe2} alt="." />
                  <span>Direct Bank Transfer</span>
                </li>
                <li className="flex items-center space-x-4 text-gray-600">
                  <Image src={elispe2} alt="." />
                  <span>Cash On Delivery</span>
                </li>
                <li className="text-gray-600">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <span className="font-bold text-black">privacy policy</span>.
                </li>
              </ul>

              {/* Place Order Button */}
              <div className="flex justify-center">
                <button className="w-full md:w-2/3 lg:w-1/2 py-3 border border-black rounded-lg hover:bg-gray-200">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
