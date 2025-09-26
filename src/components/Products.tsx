import {PrismaClient} from "@/generated/prisma";

type ProductType = Awaited<ReturnType<typeof PrismaClient['prototype']['product']['findMany']>>[number];


export default async function Products() {
  
  const products = await PrismaClient.prototype.product.findMany({
    include: {
      seller: true,     },
  });

  if (products.length === 0) {
    return <p className="text-center py-6">Nenhum produto disponível.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product: ProductType) => (
        <div
          key={product.id}
          className="border rounded-xl p-4 shadow hover:shadow-lg transition"
        >
          <img
            src={product.pictureURL}
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg"
          />
          <h2 className="mt-3 text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
          <p className="mt-2 font-bold text-[var(--foreground)]">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-xs text-gray-500">
            Categoria: {product.category.replace("_", " ")}
          </p>
          {product.sellerId && (
            <p className="text-xs text-gray-500">
              Vendedor: {product.sellerId}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
