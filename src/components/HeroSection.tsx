import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import DealtReveal from "@/components/DealtReveal";
import fondoEstudioMosquera from "@/assets/fondo-estudio-mosquera.png";
import fondoPortadaHabMosquera from "@/assets/fondo-portada-hab-mosquera.jpg";
import { useEffect, useState } from "react";
import { User } from "lucide-react";

const doubts = [
  { text: "“Me preocupa que el presupuesto cambie durante la obra.”", avatar: "bg-accent/20 text-accent" },
  { text: "“No tengo tiempo para estar pendiente de la obra todos los días.”", avatar: "bg-primary/10 text-primary" },
  { text: "“No quiero coordinar maestros, proveedores y compras por mi cuenta.”", avatar: "bg-modi-gray/20 text-modi-gray" },
  { text: "“¿Cómo sé realmente qué está pasando con mi apartamento?”", avatar: "bg-accent/30 text-primary" },
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [fondoEstudioMosquera, fondoPortadaHabMosquera];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen pt-16 relative overflow-hidden">
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
      {/* Overlay suave: solo para legibilidad, la foto se debe ver */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/15 to-transparent" />

      <div className="relative container-max px-6 py-24 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
          {/* Glass card — logo + headline + CTA */}
          <Reveal className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-10 max-w-xl">
            <h1 className="font-roboto-bold text-white text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-5">
              Tu remodelación.
              <br />
              Siempre a la vista.
            </h1>

            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-7">
              Diseñamos, ejecutamos y gestionamos tu proyecto de principio a fin.
            </p>

            <Button onClick={scrollToContact} className="cta-button">
              COTIZAR
            </Button>
          </Reveal>

          {/* Pain points — globos de chat */}
          <div>
            <Reveal className="mb-6 flex flex-col items-start lg:items-end text-left lg:text-right">
              <p className="text-white text-sm font-roboto-bold tracking-widest uppercase">
                Lo que más escuchamos
                <br />
                antes de remodelar
              </p>
              <span className="mt-2 h-0.5 w-10 bg-accent rounded-full" />
            </Reveal>

            <div className="space-y-4">
              {doubts.map((d, index) => (
                <DealtReveal
                  key={d.text}
                  delay={200 + index * 180}
                  className="flex items-start gap-3 lg:ml-auto lg:flex-row-reverse"
                  style={{ maxWidth: 380, marginLeft: index % 2 ? '10%' : undefined }}
                >
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${d.avatar}`}>
                    <User className="w-4 h-4" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-sm lg:rounded-tl-2xl lg:rounded-tr-sm px-4 py-3 shadow-lg">
                    <p className="text-primary text-sm leading-snug">{d.text}</p>
                  </div>
                </DealtReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
