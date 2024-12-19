export default function Footer() {
    return (
      <div>
        <div className="w-full px-4 py-8 md:px-8 lg:px-16 xl:px-[100px] lg:py-[96px] flex flex-wrap gap-8 lg:gap-[48px]  lg:justify-between   bg-[#FAF4F4]">
          <div className="w-[376px] lg:w-[376px] text-center lg:text-left">
            <h1 className="text-[24px] lg:text-[32px] font-bold">Free Delivery</h1>
            <p className="text-[#9F9F9F] text-base lg:text-xl">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-[376px] lg:w-[376px] text-center lg:text-left">
            <h1 className="text-[24px] lg:text-[32px] font-bold">90 Days Return</h1>
            <p className="text-[#9F9F9F] text-base lg:text-xl">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-[376px] lg:w-[376px] text-center lg:text-left">
            <h1 className="text-[24px] lg:text-[32px] font-bold">Secure Payment</h1>
            <p className="text-[#9F9F9F] text-base lg:text-xl">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    );
  }