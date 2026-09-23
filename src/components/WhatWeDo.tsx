import { Button } from "@/components/ui/button";

const WhatWeDo = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="what-we-do" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg gradient-text mb-8">¿QUÉ HACEMOS?</h2>
          
          <div className="body-lg text-muted-foreground leading-relaxed mb-8 space-y-6">
            <p>
              En MODI, nos especializamos en el arte del diseño interior y remodelación, creando espacios que inspiran y perduran. Diseñamos y transformamos espacios residenciales, corporativos y comerciales con facilidad y sin complicaciones.
            </p>
            
            <p className="text-2xl font-roboto-bold gradient-text">
              "Con MODI, cada espacio cobra vida."
            </p>
          </div>
          
          <Button 
            onClick={scrollToContact}
            className="cta-button"
          >
            COTIZAR
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;