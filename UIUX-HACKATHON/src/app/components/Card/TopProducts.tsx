import Card from "@/app/components/Card/card";
type Product = {
  id: number;
  imageSrc: string;
  title: string;
  price: string;
};

export default function TopPicks() {
  const TopPicks: Product[] = [
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
  ];

  return (
    <main className="w-full">
      {/* Title Section */}
      <div className="flex justify-center mt-12">
        <div className="w-full max-w-4xl text-center">
          <h1 className="text-4xl font-bold">Top Picks For You</h1>
          <p className="text-[#9F9F9F] mt-4">
            Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <main className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {TopPicks.map((product) => (
            <Card
              key={product.id}
              imageSrc={product.imageSrc}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </main>

      {/* View More Button */}
      <div className="flex justify-center text-xl font-bold mt-8">
        <button className="w-[115px] h-[49px] border-b-[2px] border-black hover:text-gray-600 transition-all duration-300">
          View More
        </button>
      </div>
    </main>
  );
}
