import { useState, useEffect } from "react";
import { Coffee, Wifi, Users, MapPin, Phone, Clock, ChevronUp, Mail, Instagram, Facebook } from "lucide-react";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Workspace from "./components/Workspace";
import Gallery from "./components/Gallery";
import Packages from "./components/Packages"; // ✅ added correctly here
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden">
      <Hero />
      <About />
      <Menu />
      <Workspace />
      <Gallery />

      {/* ✨ Our new Packages section */}
      <Packages />

      <Contact />
      <Footer />
      <ScrollToTop show={showScrollTop} onClick={scrollToTop} />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
