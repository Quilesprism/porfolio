import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import AboutS from "./components/AboutS";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Nav />
      
     <div className="container mx-auto px-12 py-12">
      <HeroSection />
      
      <AboutS />

      <Projects />
     </div>
     <footer className="text-center">Gracias por ver</footer>
    </main>
  );
}
