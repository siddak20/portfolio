
import About from "@/components/About";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Project from "@/components/Project";

const App= () => {
  return (
    <main className="w-full bg-primary">
      <HeroSection/>
      <About/>
      <Project/>
      <Footer/>
    </main>
  );
};

export default App;

     