import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MarketplaceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] px-6 py-8">{children}</main>
      <Footer />
    </>
  );
}
