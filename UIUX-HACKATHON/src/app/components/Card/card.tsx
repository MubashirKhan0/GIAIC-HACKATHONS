import Image from "next/image";

type CardProps = {
  imageSrc: string;
  title: string;
  price: string;
};

export default function Card({ imageSrc, title, price }: CardProps) {
  return (
    <div className="w-full sm:w-[300px] md:w-[250px] lg:w-[280px] p-4 ">
      {/* Image */}
      <div className="w-[287px] h-[287px] flex justify-between relative">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="rounded-t-lg"
        />
      </div>

      {/* Title */}
      <h3 className="text-base  mt-[15px] ">{title}</h3>

      {/* Price */}
      <p className="text-2xl font-bold mt-[12px] ">Rs. {price}</p>
    </div>
  );
}
