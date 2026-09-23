import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatWeDo from "@/components/WhatWeDo";
import Services from "@/components/Services";
import WhyChooseModi from "@/components/WhyChooseModi";
import HowWeWork from "@/components/HowWeWork";
import OurTeam from "@/components/OurTeam";
import Portfolio from "@/components/Portfolio";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhatWeDo />
      <Services />
      <WhyChooseModi />
      <HowWeWork />
      <OurTeam />
      <Portfolio />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
