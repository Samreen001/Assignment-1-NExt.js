import Navbar from "@/app/Components/Navbar";
import Hero from "@/app/Components/Hero";
import Footer from "@/app/Components/Footer";

export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.webp')" }}
    >
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
