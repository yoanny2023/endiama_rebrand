import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import News from "@/components/sections/News";
import Projects from "@/components/sections/Projects";
import Stats from "@/components/sections/Stats";

export default function Home() {
  return (
    <>
     <Hero/>
     <About />
     <Stats />
     <Projects />
     <News />
    </>
  );
}
