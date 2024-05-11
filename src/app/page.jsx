import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <>
      <div className="landing z-[-2] h-screen flex flex-col">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
