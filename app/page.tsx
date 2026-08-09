import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#030712] text-white">
        <Hero />
        <About />
      </main>
    </>
  );
}