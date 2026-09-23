import Reveal from "@/components/Reveal";
import fotoManuel from "@/assets/team/manuel.png";
import fotoCamila from "@/assets/team/camila.png";
import fotoNicolas from "@/assets/team/nicolas.png";
import fotoAlejandra from "@/assets/team/alejandra.png";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Manuel Vargas",
      role: "Dirección y Gestión de Proyectos",
      description: "Arquitecto con Máster en Gestión Internacional de la Edificación y la Construcción. Destaca por sus habilidades en planificación estratégica, liderazgo y coordinación de equipos, garantizando la ejecución eficiente y el cumplimiento de cada proyecto desde la obra gris hasta la entrega final.",
      photo: fotoManuel,
    },
    {
      name: "Camila Gaitán",
      role: "Planeación y Coordinación BIM",
      description: "Arquitecta especializada en modelado y coordinación BIM, con experiencia en planimetría, control de cantidades y seguimiento de obra. Integra precisión técnica y visión integral del proyecto mediante herramientas digitales, complementadas con una sólida trayectoria en diseño de interiores orientado al equilibrio entre estética y funcionalidad.",
      photo: fotoCamila,
    },
    {
      name: "Nicolás Téllez",
      role: "Ejecución y Supervisión de Obra",
      description: "Arquitecto con sólida experiencia en obra civil, acabados y procesos constructivos. Su conocimiento técnico y capacidad para dirigir equipos en campo garantizan eficiencia, calidad y cumplimiento en cada fase del proyecto.",
      photo: fotoNicolas,
    },
    {
      name: "Alejandra Barrera",
      role: "Diseño y Visualización Arquitectónica",
      description: "Arquitecta y modeladora BIM con amplia experiencia en diseño arquitectónico, modelado 3D y postproducción de imágenes. Aporta una mirada creativa y técnica, logrando representaciones visuales precisas que comunican el valor y la esencia de cada proyecto.",
      photo: fotoAlejandra,
    }
  ];

  return (
    <section id="team" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-max">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-roboto-medium tracking-widest uppercase text-accent mb-3">Detrás de cada proyecto</p>
          <h2 className="heading-lg text-primary mb-6">Un equipo que responde por todo el proceso.</h2>
          <p className="body-lg text-muted-foreground leading-relaxed">
            Diseño, planeación y ejecución trabajan de forma coordinada para que siempre sepas quién está detrás de cada decisión de tu proyecto.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Reveal key={index} delay={index * 100} className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100">
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-roboto-bold text-primary text-xl mb-1">{member.name}</h3>
                  <p className="text-accent text-sm font-roboto-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;