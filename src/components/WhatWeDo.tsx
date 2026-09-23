import Reveal from "@/components/Reveal";
import { MessageCircle, ClipboardList, PenTool, HardHat, PackageCheck } from "lucide-react";

const steps = [
  {
    title: "Conocemos tu proyecto",
    description: "Nos cuentas qué quieres transformar, tus necesidades y el presupuesto que tienes contemplado.",
    icon: MessageCircle,
  },
  {
    title: "Definimos tu propuesta",
    description: "Visitamos el espacio, definimos el alcance y preparamos una cotización clara y personalizada.",
    icon: ClipboardList,
  },
  {
    title: "Diseñamos contigo",
    description: "Visualizamos tu espacio, realizamos ajustes y te acompañamos en la elección de materiales, acabados y accesorios.",
    icon: PenTool,
  },
  {
    title: "Nos encargamos de la obra",
    description: "Coordinamos contratistas, proveedores, compras e instalaciones mientras ejecutamos tu proyecto.",
    icon: HardHat,
  },
  {
    title: "Sigues el avance hasta la entrega",
    description: "Te mantenemos al tanto de lo que sucede en tu remodelación hasta entregarte el espacio terminado.",
    icon: PackageCheck,
  },
];

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-max">
        <Reveal className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-sm font-roboto-medium tracking-widest uppercase text-accent mb-3">
            Nos encargamos del proceso
          </p>
          <h2 className="heading-lg text-primary mb-6">De tu idea a un espacio terminado.</h2>
          <p className="body-lg text-muted-foreground leading-relaxed">
            Diseñamos, planeamos y ejecutamos tu remodelación con un solo equipo, acompañándote en cada decisión y manteniéndote al tanto durante todo el proyecto.
          </p>
        </Reveal>

        <div className="relative mb-16">
          {/* Línea de tiempo: horizontal en escritorio, vertical en celular */}
          <div className="hidden md:block absolute top-7 left-0 right-0 h-0.5 bg-accent/25" />
          <div className="md:hidden absolute top-0 bottom-0 left-7 w-0.5 bg-accent/25" />

          <div className="grid md:grid-cols-5 gap-8 md:gap-4 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal
                  key={step.title}
                  delay={index * 180}
                  className="relative flex md:flex-col gap-4 md:gap-0 md:items-center md:text-center"
                >
                  <div className="relative z-10 w-14 h-14 rounded-full bg-white border-2 border-accent flex items-center justify-center shrink-0 md:mb-5">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-roboto-bold text-accent tracking-widest mb-1">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="font-roboto-bold text-primary mb-2 leading-snug">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="text-center">
          <p className="heading-md text-primary leading-snug max-w-2xl mx-auto">
            Tú decides cómo quieres vivir tu espacio.{" "}
            <span className="text-accent">Nosotros nos encargamos de hacerlo realidad.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default WhatWeDo;
