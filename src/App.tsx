import React from "react";
import HeroSection from "./components/HeroSection";
import ActivitiesSection from "./components/ActivitiesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";

const App: React.FC = () => {
  return (
    <div className="bg-darkBg text-secondary min-h-screen">
      <Header />
      <HeroSection />
      <AboutUs />
      <ActivitiesSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
