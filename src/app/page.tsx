import Hero from "@/app/Components/Hero";

export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.webp')" }}
    >
      <main className="flex-grow">
        <Hero />
      </main>
    </div>
  );
}
