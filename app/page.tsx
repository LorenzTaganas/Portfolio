import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="relative mx-auto flex w-full flex-col overflow-hidden">
      <Hero />
      <ScrollReveal delay={150}>
        <About />
      </ScrollReveal>
      <ScrollReveal delay={150}>
        <Projects />
      </ScrollReveal>
      <ScrollReveal delay={150}>
        <Experience />
      </ScrollReveal>
      <ScrollReveal delay={150}>
        <Contact />
      </ScrollReveal>
    </main>
  );
}
