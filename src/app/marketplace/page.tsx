import { PrismaClient } from "@/generated/prisma";
import Image from "next/image";

const prisma = new PrismaClient();

type ProductWithRelations = {
  id: number;
  name: string;
  pictureURL: string;
  description: string;
  price: number;
  category: string;
  ratings: { value: number }[];
};


export default async function MarketplacePage() {
  // fetching produts from the database
  const products = await prisma.product.findMany({
    include: { ratings: true},
  });

  // function to calculate average rating
  const getAverageRating = (ratings: { value: number }[]) => {
    if (ratings.length === 0) return 0;
    return ratings.reduce((sum, r) => sum + r.value, 0) / ratings.length;
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
          <div className="relative w-full h-64">
            <Image
              src={product.pictureURL}
              alt={product.name}
              fill
              className="object-cover rounded"
            />
          </div>
          <h2 className="mt-2 font-bold text-lg">{product.name}</h2>
          <p className="text-gray-700">{product.description}</p>
          <p className="mt-1 font-semibold">${product.price.toFixed(2)}</p>
          <p className="mt-1 text-sm text-gray-500">
            Category: {product.category.replace("_", " ")}
          </p>
          <p className="mt-1 text-yellow-500">
            Rating: {getAverageRating(product.ratings).toFixed(1)} ⭐
          </p>
        </div>
      ))}
    </section>
  );
}
