import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <h1 className="text-5xl font-bold">
          Welcome to My Portfolio 🚀
        </h1>
      </main>
    </>
  );
}