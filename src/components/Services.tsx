import Reveal from "@/components/Reveal";
import salaAntesMosquera from "@/assets/sala-antes-mosquera.jpg";
import disenoSalaDespuesMosquera from "@/assets/diseno-sala-despues-mosquera.jpg";
import salaMosquera from "@/assets/sala-mosquera.jpg";
import cocinaMosqueraAntes from "@/assets/cocina-mosquera-antes.jpg";
import cocinaTio from "@/assets/cocina-tio.jpg";
import aptoNorteAntes from "@/assets/apto-norte-antes.jpg";
import aptoNorte2 from "@/assets/apto-norte-2.jpg";

const categories = [
  {
    title: "Diseño Interior",
    description: "Visualizamos cada espacio antes de ejecutar, definiendo distribución, materiales, mobiliario y acabados.",
    stages: [
      { label: "Antes", image: salaAntesMosquera },
      { label: "Diseño", image: disenoSalaDespuesMosquera },
      { label: "Resultado", image: salaMosquera },
    ],
  },
  {
    title: "Remodelación Integral",
    description: "Transformamos espacios desde obra gris o vivienda usada, coordinando diseño, obra, acabados, carpintería e instalaciones.",
    stages: [
      { label: "Antes", image: cocinaMosqueraAntes },
      { label: "Después", image: cocinaTio },
    ],
  },
  {
    title: "Adecuaciones y Mejoras",
    description: "Intervenimos espacios existentes con reparaciones, ajustes y mejoras puntuales según sus necesidades.",
    stages: [
      { label: "Antes", image: aptoNorteAntes },
      { label: "Después", image: aptoNorte2 },
    ],
  },
];

const scrollToPortfolio = () => {
  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
};

interface Stage { label: string; image: string; }
interface Category { title: string; description: string; stages: Stage[]; }

const StageCard = ({ category, delay }: { category: Category; delay: number }) => {
  return (
    <Reveal delay={delay}>
      <div className="group flex flex-col gap-1.5 rounded-2xl overflow-hidden mb-5 h-[420px] md:h-[480px]">
        {category.stages.map((s) => (
          <div key={s.label} className="relative flex-1 min-h-0">
            <img
              src={s.image}
              alt={`${category.title} — ${s.label}`}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-500"
            />
            <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-roboto-medium bg-white/90 text-primary">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      <h3 className="font-roboto-bold text-primary text-lg mb-2">{category.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{category.description}</p>
      <button
        onClick={scrollToPortfolio}
        className="text-sm font-roboto-bold text-accent hover:underline inline-flex items-center gap-1"
      >
        Ver proyectos <span aria-hidden="true">→</span>
      </button>
    </Reveal>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-max">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-roboto-medium tracking-widest uppercase text-accent mb-3">Proyectos Modi</p>
          <h2 className="heading-lg text-primary mb-6">De la idea al resultado.</h2>
          <p className="body-lg text-muted-foreground leading-relaxed">
            Diseñamos y transformamos espacios pensando en cómo quieres vivirlos. Conoce algunos de nuestros proyectos y el resultado de cada proceso.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <StageCard key={category.title} category={category} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
