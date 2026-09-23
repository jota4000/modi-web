import { Eye, Users, MessageSquare, CreditCard } from "lucide-react";

const WhyChooseModi = () => {
  const features = [
    {
      icon: Eye,
      title: "Diseño Inmersivo",
      description: "Experimenta tu espacio antes de que sea construido.",
    },
    {
      icon: Users,
      title: "Servicio Personalizado",
      description: "Sesiones personalizadas basadas en tus necesidades, estilo y visión.",
    },
    {
      icon: MessageSquare,
      title: "Interacción Directa",
      description: "Comunicación constante e informes semanales.",
    },
    {
      icon: CreditCard,
      title: "Opciones de Pago",
      description: "Sistema de pagos por etapas para facilitar la gestión de tu inversión.",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-max">
        <h2 className="heading-lg text-center gradient-text mb-16">¿Por qué elegir MODI?</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300">
                  <IconComponent className="w-10 h-10 text-accent" />
                </div>
                
                <h3 className="heading-sm text-primary mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseModi;