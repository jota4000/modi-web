import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Reveal from "@/components/Reveal";
import fondoContacto from "@/assets/diseno-sala-despues-mosquera.jpg";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Por favor completa todos los campos",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/movppvpy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.name,
          email: formData.email,
          mensaje: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado exitosamente!",
          description: "Recibimos tu mensaje y nos comunicaremos pronto.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Error al enviar el mensaje",
          description: "Por favor intenta nuevamente más tarde.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error de conexión",
        description: "No se pudo enviar el formulario. Intenta de nuevo.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-white to-gray-50">
      {/* Encabezado con foto — mismo mensaje de cierre, ahora unido al formulario */}
      <div className="relative overflow-hidden py-24 md:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${fondoContacto})` }}
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative container-max px-6 text-center">
          <Reveal className="max-w-2xl mx-auto">
            <p className="text-sm font-roboto-medium tracking-widest uppercase text-accent mb-3">Contacto</p>
            <h2 className="heading-lg text-white mb-6 leading-tight">
              ¿Tienes un espacio que quieres transformar?
            </h2>
            <p className="body-lg text-white/70 leading-relaxed mb-2">
              Cuéntanos qué tienes en mente. Conozcamos tu proyecto y revisemos juntos cómo hacerlo realidad.
            </p>
            <p className="text-white/50 text-sm">
              Remodelaciones y diseño interior en Bogotá y alrededores.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="container-max section-padding !pt-16">
        <Reveal className="max-w-2xl mx-auto">
          {/* --- FORMULARIO PRINCIPAL (FORMSPREE) --- */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Tu Nombre"
                value={formData.name}
                onChange={handleChange}
                className="h-14 !text-lg border-2 border-gray-200 focus:border-accent"
                required
              />
            </div>

            <div>
              <Input
                type="email"
                name="email"
                placeholder="tu.email@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
                className="h-14 !text-lg border-2 border-gray-200 focus:border-accent"
                required
              />
            </div>

            <div>
              <Textarea
                name="message"
                placeholder="Cuéntanos sobre tu proyecto..."
                value={formData.message}
                onChange={handleChange}
                className="min-h-32 !text-lg border-2 border-gray-200 focus:border-accent resize-none"
                required
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                className="cta-button w-full md:w-auto"
              >
                ENVIAR
              </Button>
            </div>
          </form>

          {/* --- BLOQUE ADICIONAL CON BOTÓN DE TALLY --- */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <p className="text-center text-lg mb-6 max-w-xl mx-auto">
              Completa este formulario con la información de tu apartamento y los cambios que deseas realizar.
              Con esto elaboraremos tu cotización y luego agendaremos una videollamada contigo.
            </p>
            <div className="text-center">
              <Button
                onClick={() => window.open("https://tally.so/r/3xGPp9", "_blank")}
                className="cta-button w-full md:w-auto"
              >
                LLENAR FORMULARIO DE COTIZACIÓN
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
