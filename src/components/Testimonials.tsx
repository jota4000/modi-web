import Reveal from "@/components/Reveal";
import { Quote } from "lucide-react";

// TODO(Modi): reemplazar estos 4 espacios con testimonios reales de clientes
// (frase textual + nombre + proyecto). Se dejan vacíos a propósito — no se
// deben inventar comentarios de clientes que no existen.
const placeholders = [1, 2, 3, 4];

const Testimonials = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-max">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-roboto-medium tracking-widest uppercase text-accent mb-3">Testimonios</p>
          <h2 className="heading-lg text-primary leading-tight">
            "La confianza también hace parte del proceso."
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {placeholders.map((n, index) => (
            <Reveal
              key={n}
              delay={index * 120}
              className="bg-white rounded-3xl border-2 border-dashed border-gray-200 p-8 flex flex-col gap-4"
            >
              <Quote className="w-8 h-8 text-accent/40" />
              <p className="text-muted-foreground italic leading-relaxed">
                Espacio para el comentario real de un cliente.
              </p>
              <div className="mt-auto pt-2">
                <p className="text-sm font-roboto-bold text-primary/40">Nombre del cliente</p>
                <p className="text-xs text-muted-foreground/60">Proyecto</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
