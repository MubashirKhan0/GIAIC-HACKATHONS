
import Card from "@/app/components/Card/card";

interface Product  {
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
    <div className="w-full h-auto">
      <div className="flex justify-center">
        <div className="w-full max-w-full  h-auto mt-12">
          <h1 className="text-4xl font-bold text-center">Related Products</h1>
        </div>
      </div>

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

      <div className="flex justify-center text-xl font-bold mt-8">
        <button className="w-[115px] h-[49px] border-b-[2px] border-black hover:text-gray-600 transition-all duration-300">
          View More
        </button>
      </div>
    </div>
  );
}
