import { Button } from "@/components/ui/button";
import fondoEstudioMosquera from "@/assets/fondo-estudio-mosquera.png";
import fondoPortadaHabMosquera from "@/assets/fondo-portada-hab-mosquera.jpg";
import logoModiPortada from "@/assets/MODI_BLANCO.png";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [fondoEstudioMosquera, fondoPortadaHabMosquera];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section pt-16 relative overflow-hidden">
      {/* Carousel Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: currentImageIndex === index ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center pointer-events-none px-6">
  
  {/* Logo arriba */}
  <img 
    src={logoModiPortada} 
    alt="MODI Logo" 
    className="h-[28vh] md:h-[32vh] lg:h-[36vh] w-auto object-contain mb-6 mx-auto"
  />

  {/* Texto debajo del logo */}
  <p className="text-xl md:text-2xl font-roboto-medium tracking-wide opacity-90 text-white mb-6">
    Diseñamos y transformamos espacios que inspiran y perduran.
  </p>

  {/* Botón debajo del texto */}
  <Button 
    onClick={scrollToContact}
    className="cta-button pointer-events-auto"
    size="lg"
  >
    COTIZAR
  </Button>
</div>
    </section>
  );
};

export default HeroSection;