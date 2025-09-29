import ProductCard from "@/components/ProductCard";
import { ProductWithRelations } from "@/types/products";

const rawBaseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
const baseUrl = rawBaseUrl.startsWith("http") ? rawBaseUrl.replace(/\/$/, "") : `https://${rawBaseUrl.replace(/\/$/, "")}`;

export default async function MarketplacePage() {
  // Calls API
  console.log("Using baseUrl:", baseUrl);
  const res = await fetch(`${baseUrl}/api/products`, {
    cache: "no-store",
  });

  const products: ProductWithRelations[] = await res.json();

  return (
    <section className="w-full flex justify-center p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 gap-10 w-full max-w-[1200px]">
        {products.map((element) => (
          <ProductCard key={element.id} product={element} />
        ))}
      </div>
    </section>
  );
}
