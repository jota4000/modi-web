import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "@/components/Reveal";

const faqs = [
  {
    q: "¿Cómo sé cuánto va a costar mi proyecto?",
    a: "Después de la visita técnica te entregamos una cotización con el desglose de cada actividad a realizar, para que sepas en qué se va tu inversión antes de empezar.",
  },
  {
    q: "¿Tengo que estar pendiente de la obra todos los días?",
    a: "No. Mantenemos comunicación constante contigo durante todo el proyecto, con informes de avance, para que sepas cómo va sin tener que estar presente.",
  },
  {
    q: "¿Cómo funcionan los pagos?",
    a: "El pago se hace por etapas del proyecto, no todo por adelantado, para que puedas gestionar tu inversión de forma más tranquila.",
  },
  {
    q: "¿En qué ciudades trabajan?",
    a: "Trabajamos en Bogotá y alrededores, incluyendo Chía y Mosquera.",
  },
  {
    q: "¿Cuánto se demora un proyecto típico?",
    a: "Una adecuación de apartamento en obra gris toma en promedio 50 días. Las remodelaciones y arreglos puntuales varían según el alcance de la obra — te damos un tiempo estimado apenas conocemos tu proyecto.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-max max-w-3xl">
        <Reveal className="text-center mb-16">
          <p className="text-sm font-roboto-medium tracking-widest uppercase text-accent mb-3">Preguntas frecuentes</p>
          <h2 className="heading-lg text-primary">Antes de que preguntes</h2>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-roboto-bold text-primary text-base">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
};

export default FAQ;
