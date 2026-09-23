import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-max">
        <h2 className="heading-lg text-center gradient-text mb-16">
          Trabajemos Juntos
        </h2>

        <div className="max-w-2xl mx-auto">
          {/* --- FORMULARIO PRINCIPAL (FORMSPREE) --- */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Tu Nombre"
                value={formData.name}
                onChange={handleChange}
                className="h-14 text-lg border-2 border-gray-200 focus:border-accent"
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
                className="h-14 text-lg border-2 border-gray-200 focus:border-accent"
                required
              />
            </div>

            <div>
              <Textarea
                name="message"
                placeholder="Cuéntanos sobre tu proyecto..."
                value={formData.message}
                onChange={handleChange}
                className="min-h-32 text-lg border-2 border-gray-200 focus:border-accent resize-none"
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
