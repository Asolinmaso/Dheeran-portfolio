import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/About/About";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import Gallery from "@/components/Gallery/Gallery";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero /> 
      <About />
      <FeaturedWork />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}