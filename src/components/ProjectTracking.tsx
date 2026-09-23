import Reveal from "@/components/Reveal";
import { MapPin, TrendingUp, Camera, FolderOpen, Volume2, VolumeX, Eye, Users, CreditCard } from "lucide-react";
import { useRef, useState } from "react";

const points = [
  {
    icon: TrendingUp,
    title: "Avance de tu obra",
    description: "Conoce qué se ha realizado y qué sigue.",
  },
  {
    icon: Camera,
    title: "Seguimiento visual",
    description: "Revisa fotografías y actualizaciones de tu proyecto.",
  },
  {
    icon: FolderOpen,
    title: "Información centralizada",
    description: "Documentos, decisiones y novedades en un mismo lugar.",
  },
  {
    icon: MapPin,
    title: "Más claridad, estés donde estés",
    description: "Mantente informado sin tener que visitar la obra todos los días.",
  },
];

// De "¿Por qué Modi?" — las razones que no tienen que ver con el seguimiento
// en sí, sino con el resto de la experiencia (diseño, servicio, pagos).
const otherReasons = [
  {
    icon: Eye,
    solves: "“¿Cómo se va a ver de verdad?”",
    title: "Diseño Inmersivo",
    description: "Experimenta tu espacio antes de que sea construido, con renders y recorridos 3D.",
  },
  {
    icon: Users,
    solves: "“No quiero un diseño genérico”",
    title: "Servicio Personalizado",
    description: "Sesiones basadas en tus necesidades reales, tu estilo y tu presupuesto.",
  },
  {
    icon: CreditCard,
    solves: "“¿Cuánto me va a costar en realidad?”",
    title: "Opciones de Pago",
    description: "Presupuesto claro desde el inicio y pagos por etapas del proyecto.",
  },
];

/** Marco de celular con la grabación real del Portal del Cliente reproduciéndose en bucle.
 * Arranca en silencio porque los navegadores bloquean el autoplay con sonido — el
 * visitante puede activarlo con el botón de parlante. */
const PortalMock = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    setMuted((m) => !m);
    videoRef.current?.play().catch(() => {});
  };

  return (
    <div className="relative w-full max-w-[280px] mx-auto">
      <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-2xl z-10" />
        <div className="relative aspect-[9/19.5] rounded-[1.75rem] overflow-hidden bg-black">
          <video
            ref={videoRef}
            src="/videos/portal-demo-v4.mp4"
            autoPlay
            muted={muted}
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <button
            onClick={toggleSound}
            aria-label={muted ? "Activar sonido" : "Silenciar"}
            className="absolute bottom-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectTracking = () => {
  return (
    <section className="section-padding bg-primary overflow-hidden">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <Reveal>
            <p className="text-sm font-roboto-medium tracking-widest uppercase text-accent mb-3">
              Tranquilidad durante todo el proyecto
            </p>
            <h2 className="heading-lg text-white mb-6 leading-tight">
              No tienes que estar en la obra para saber qué está pasando.
            </h2>
            <p className="body-lg text-white/70 leading-relaxed mb-10">
              Sigue el avance de tu remodelación desde un solo lugar. Consulta el progreso de la obra, actividades realizadas, próximos pasos, documentos y novedades de tu proyecto.
            </p>

            <div className="space-y-6">
              {points.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-roboto-bold text-white mb-0.5">{point.title}</p>
                      <p className="text-sm text-white/60">{point.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Mockup */}
          <Reveal delay={150}>
            <PortalMock />
          </Reveal>
        </div>

        {/* Por qué Modi — el resto de razones, unidas a esta misma sección */}
        <div className="grid sm:grid-cols-3 gap-8 mt-20 pt-16 border-t border-white/10">
          {otherReasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={index * 100} className="text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <p className="text-xs italic text-white/40 mb-2">{reason.solves}</p>
                <h3 className="font-roboto-bold text-white mb-2">{reason.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{reason.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectTracking;
