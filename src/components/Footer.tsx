import Link from "next/link";
import { SocialMediaIcons } from "./footer/social-media-icons";

export default function Footer() {
  return (
    <footer className="relative px-6 py-7 flex justify-between">
      <nav className="flex">
        <ul className="flex gap-10">
          <li><Link href="/marketplace">Marketplace</Link></li>
          <li><Link href="/sellers">Sellers</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      <SocialMediaIcons />
    </footer>
  );
}