import Image from "next/image";
import Link from "next/link";
import { ProductWithRelations } from "@/types/products";

type Props = { product: ProductWithRelations };

export default function ProductCard({ product }: Props) {
    return (
    <div className="w-full h-full flex flex-col shadow hover:shadow-lg transition bg-white/15 backdrop-blur-[15px]">
      <div className="relative w-full h-65">
        <Image
          src={product.pictureURL}
          alt={product.name}
          fill
          className="object-cover rounded"
        />
      </div>

      <div className="p-3 flex flex-col flex-1">
        <p className="mt-1 text-[10px] text-gray-400">
          {product.category.replace("_", " ")}
        </p>
        <h2 className="mt-2 text-lg sm:text-xl md:text-2xl font-bold">
          {product.name}
        </h2>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-1">
          {product.description}
        </p>
        <p className="text-xl font-semibold text-[#FF6B35] py-2">
          ${product.price.toFixed(2)}
        </p>

        <Link
          href={`/products/${product.id}`}
          className="block text-center mt-auto px-4 py-2 bg-white/30 text-white font-bold hover:bg-white/40 transition"
        >
          See More Details
        </Link>
      </div>
    </div>
    )
}