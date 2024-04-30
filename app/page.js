import HeroSection from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import AboutSection from "./components/AboutSection";  
import ProjectsSection from "./components/ProjectSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4 ">
        <HeroSection/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <AboutSection/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <ProjectsSection />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
}
