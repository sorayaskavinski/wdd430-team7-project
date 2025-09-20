'use client'

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="relative px-6 py-7">
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-xl font-bold">
        <Link href="/home">
          <span>H</span>ancrafted<span>H</span>aven
        </Link>
      </div>

      <nav className="flex justify-center">
        <ul className="flex gap-10">
          <li><Link href="/marketplace">Marketplace</Link></li>
          <li><Link href="/sellers">Sellers</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}