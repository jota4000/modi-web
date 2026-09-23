import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import salaAntesMosquera from "@/assets/sala-antes-mosquera.jpg";
import disenoSalaDespuesMosquera from "@/assets/diseno-sala-despues-mosquera.jpg";
import cocinaMosqueraAntes from "@/assets/cocina-mosquera-antes.jpg";
import cocinaTio from "@/assets/cocina-tio.jpg";
import aptoNorteAntes from "@/assets/apto-norte-antes.jpg";
import aptoNorte2 from "@/assets/apto-norte-2.jpg";

const Services = () => {
  const services = [
    {
      title: "Diseño",
      description: "Creatividad, funcionalidad y estética combinadas. Cada detalle diseñado para aprovechar al máximo cada rincón.",
      beforeImage: salaAntesMosquera,
      afterImage: disenoSalaDespuesMosquera,
    },
    {
      title: "Remodelación", 
      description: "Especializados en OBRA GRIS y propiedades USADAS. Experiencia personalizada, comunicación constante y atención al detalle.",
      beforeImage: cocinaMosqueraAntes,
      afterImage: cocinaTio,
    },
    {
      title: "Reparaciones Locativas",
      description: "Soluciones rápidas y de alta calidad para reparaciones, ajustes y mejoras que mantienen tus espacios en perfectas condiciones.",
      beforeImage: aptoNorteAntes,
      afterImage: aptoNorte2,
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-max">
        <h2 className="heading-lg text-center gradient-text mb-16">Nuestros Servicios</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <BeforeAfterSlider
                beforeImage={service.beforeImage}
                afterImage={service.afterImage}
                altText={service.title}
              />
              
              <h3 className="heading-sm text-primary mb-4 mt-6">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;