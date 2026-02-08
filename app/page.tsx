import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Snowflakes from "@/components/Snowflakes";

export default function Home() {
  return (
    <>
      <Snowflakes />
      <Navbar />
      <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
