import Navbar     from "@/components/Navbar";
import Hero       from "@/components/Hero";
import About      from "@/components/About";
import Education  from "@/components/Education";
import Skills     from "@/components/Skills";
import Projects   from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact    from "@/components/Contact";
import Footer     from "@/components/Footer";
import SkipLink   from "@/components/SkipLink";

export default function Home() {
  return (
    <>
      <SkipLink />
      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
