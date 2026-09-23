import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatWeDo from "@/components/WhatWeDo";
import Services from "@/components/Services";
import ProjectTracking from "@/components/ProjectTracking";
import OurTeam from "@/components/OurTeam";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhatWeDo />
      <ProjectTracking />
      <Services />
      <Portfolio />
      <Testimonials />
      <OurTeam />
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
