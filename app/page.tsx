import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-black light:bg-white flex justify-center items-center flex-col overflow-hidden mx-auto">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
