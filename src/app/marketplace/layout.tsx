"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryBar from "@/components/CategoryBar";
import Image from "next/image";
import { Product } from "@/generated/prisma";

export default function MarketplaceLayout() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch(`/api/products?category=${selectedCategory}`);
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <CategoryBar onSelectAction={setSelectedCategory} />

      <main className="flex-1 p-4">
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
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
