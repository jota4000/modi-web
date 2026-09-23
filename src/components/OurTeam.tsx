const OurTeam = () => {
  const teamMembers = [
    {
      name: "Manuel Vargas",
      role: "Dirección y Gestión de Proyectos",
      description: "Arquitecto con Máster en Gestión Internacional de la Edificación y la Construcción. Destaca por sus habilidades en planificación estratégica, liderazgo y coordinación de equipos, garantizando la ejecución eficiente y el cumplimiento de cada proyecto desde la obra gris hasta la entrega final.",
      image: "/placeholder.svg"
    },
    {
      name: "Camila Gaitán",
      role: "Planeación y Coordinación BIM",
      description: "Arquitecta especializada en modelado y coordinación BIM, con experiencia en planimetría, control de cantidades y seguimiento de obra. Integra precisión técnica y visión integral del proyecto mediante herramientas digitales, complementadas con una sólida trayectoria en diseño de interiores orientado al equilibrio entre estética y funcionalidad.",
      image: "/placeholder.svg"
    },
    {
      name: "Nicolás Téllez",
      role: "Ejecución y Supervisión de Obra",
      description: "Arquitecto con sólida experiencia en obra civil, acabados y procesos constructivos. Su conocimiento técnico y capacidad para dirigir equipos en campo garantizan eficiencia, calidad y cumplimiento en cada fase del proyecto.",
      image: "/placeholder.svg"
    },
    {
      name: "Alejandra Barrera",
      role: "Diseño y Visualización Arquitectónica",
      description: "Arquitecta y modeladora BIM con amplia experiencia en diseño arquitectónico, modelado 3D y postproducción de imágenes. Aporta una mirada creativa y técnica, logrando representaciones visuales precisas que comunican el valor y la esencia de cada proyecto.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="team" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-max">
        <h2 className="heading-lg text-center gradient-text mb-16">Nuestro Equipo</h2>
        
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl">
            <p className="body-lg text-muted-foreground leading-relaxed space-y-6">
              Nuestro equipo tiene amplia experiencia en supervisión de construcción y una sólida formación en diseño arquitectónico e interior en diversos tipos de propiedades. Creamos renders, planos e imágenes VR que te permiten visualizar tus espacios antes de que sean construidos.
            </p>
            
            <p className="body-lg text-muted-foreground leading-relaxed mt-6">
              También utilizamos tecnología BIM para optimizar los procesos de construcción, asegurando precisión, eficiencia y resultados de alta calidad.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary/10 to-accent/10">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-roboto-bold text-primary text-xl mb-1">{member.name}</h3>
                  <p className="text-primary/80 text-sm font-roboto-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;