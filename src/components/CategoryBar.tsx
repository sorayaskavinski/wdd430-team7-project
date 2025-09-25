"use client";
import { useState } from "react";
import { Category } from "@/generated/prisma";

const categories: Category[] = [
  "HOME_LIVING",
  "JEWELRY_ACCESSORIES",
  "CLOTHING",
  "BAGS_PURSES",
  "ART_COLLECTIBLES",
  "BATH_BEAUTY",
];

const displayNames: Record<string, string> = {
  HOME_LIVING: "Home & Living",
  JEWELRY_ACCESSORIES: "Jewelry & Accessories",
  CLOTHING: "Clothing",
  BAGS_PURSES: "Bags & Purses",
  ART_COLLECTIBLES: "Art & Collectibles",
  BATH_BEAUTY: "Bath & Beauty",
};

export default function CategoryBar({ onSelect }: { onSelect: (cat: string) => void }) {
  const [selected, setSelected] = useState<string>("");

  const handleClick = (cat: string) => {
    setSelected(cat);
    onSelect(cat);
  };

  return (
    <div className="flex overflow-x-auto gap-2 py-2 px-4 bg-[var(--background)] border-b border-gray-300 dark:border-gray-700">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`
            whitespace-nowrap px-4 py-2 rounded-full border 
            ${selected === cat ? 'bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]' : 'bg-transparent text-[var(--foreground)] border-gray-400 dark:border-gray-600'}
            hover:bg-[var(--foreground)] hover:text-[var(--background)] transition
          `}
        >
          {displayNames[cat]}
        </button>
      ))}
    </div>
  );
}
