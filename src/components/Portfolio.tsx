import { useState } from "react";
import ProjectDetail from "./ProjectDetail";
import Reveal from "@/components/Reveal";
import cocinaMosqueraAntes from "@/assets/cocina-mosquera-antes.jpg";
import cocinaTio2 from "@/assets/cocina-tio-2.jpg";
import portafolioCocina from "@/assets/portafolio-cocina-tio.jpg";
import estudoMosquera22 from "@/assets/estudio-mosquera-2-2.jpg";
import antesAptoGomelo from "@/assets/antes-apto-gomelo-1.jpg";
import gomeloEstudio3 from "@/assets/gomelo-estudio-3.jpg";
import salaMosquera from "@/assets/sala-mosquera.jpg";
import christianAntes from "@/assets/christian-antes-01.jpg";
import estudoMosquera3 from "@/assets/estudio-mosquera-3.jpg";
import aptoNorte from "@/assets/apto-norte.jpg";
import aptoNorte2 from "@/assets/apto-norte-2.jpg";
import aptoNorteAntes from "@/assets/apto-norte-antes.jpg";
import chiaDiseno from "@/assets/chia-diseno.jpg";
import chiaBanoAntes from "@/assets/chia-bano-antes.jpg";
import chiaBanoDespues from "@/assets/chia-bano-despues.jpg";
import disenoTnvs from "@/assets/diseno-tnvs.jpg";
import oficinaTnvs2 from "@/assets/oficina-tnvs-2.jpg";
import oficinaTnvs3 from "@/assets/oficina-tnvs-3.jpg";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const portfolioItems = [
    { 
      id: 1, 
      title: "Adecuación Apto VIS Mosquera", 
      category: "Remodelación",
      beforeImage: cocinaMosqueraAntes,
      afterImage: cocinaTio2,
      previewImage: portafolioCocina,
      clientWanted: "El cliente buscaba adecuar su apartamento VIS con una propuesta rápida y sencilla, pero sin dejar de lado la parte estética. La idea era optimizar los espacios sin realizar cambios complejos, logrando un ambiente más funcional y visualmente agradable.",
      development: "El proyecto se desarrolló en un tiempo muy corto: en el transcurso de un mes logramos cumplir con los plazos establecidos, manteniendo la calidad y el enfoque estético. El resultado final fue un espacio renovado, equilibrado y adaptado exactamente a las necesidades del cliente.",
      location: "Mosquera, Colombia",
      videoLink: "https://vt.tiktok.com/ZSyd3QS89/"
    },
    { 
      id: 2, 
      title: "Adecuación Estudio Apto Bogotá", 
      category: "Remodelación",
      beforeImage: antesAptoGomelo,
      afterImage: gomeloEstudio3,
      previewImage: estudoMosquera22,
      clientWanted: "El cliente deseaba realizar un cambio en su vivienda, específicamente en el área del estudio, ya que trabaja de manera remota. Buscaba un espacio con mayor iluminación natural, mejor ventilación y una sensación de amplitud. Además, uno de los aspectos más importantes era incluir dentro del diseño un lugar especial para su gato, garantizando su comodidad e integración dentro del nuevo ambiente.",
      development: "Para lograr estos objetivos, se demolió el muro existente y se reemplazó por una celosía que permite el paso de la luz natural y la ventilación cruzada, aprovechando los ventanales de la sala y del estudio. Se incorporaron entrepaños que, además de aportar funcionalidad, transforman el área en un espacio que también funciona como recibidor. Dado el gusto del cliente por las plantas, se diseñó una composición que integra la vegetación con la carpintería, generando un contraste cálido y natural. Finalmente, se desarrolló un mueble especial para su gato, pensado para ofrecer buena ventilación, fácil limpieza y armonía con el diseño general del espacio.",
      location: "Bogotá, Colombia",
      videoLink: "https://vt.tiktok.com/ZSydcJwXe/"
    },
    { 
      id: 3, 
      title: "Adecuación Vivienda Mosquera", 
      category: "Remodelación",
      beforeImage: christianAntes,
      afterImage: estudoMosquera3,
      previewImage: salaMosquera,
      clientWanted: "El cliente deseaba realizar un cambio integral en su vivienda, interviniendo las zonas de la sala, cocina, baños y habitación principal. Su objetivo era personalizar los espacios, hacerlos más suyos y reflejar su propio estilo, manteniendo la funcionalidad y el confort en cada área.",
      development: "El cliente ya contaba con algunos muebles y elementos decorativos comprados, por lo que el enfoque del proyecto fue asesorarlo en el diseño para lograr armonía y cohesión en todo el conjunto. En la cocina se propuso un cambio en la paleta de colores y se añadieron muebles en los nichos existentes, optimizando el almacenamiento de electrodomésticos y elementos de aseo. En la sala se introdujo un \"pop\" de color y se integró un cuadro previamente adquirido por el cliente, generando un ambiente cálido y con carácter.\nEn los baños se incorporaron espejos con iluminación y formas orgánicas, aportando modernidad y amplitud visual. En la habitación principal —que también funciona como espacio de trabajo— se aplicó un tono de color diferente en una de las paredes para darle profundidad y personalidad. Asimismo, se diseñó un mueble a medida con espacio de almacenamiento adicional, adaptado a sus necesidades.\nAdemás, se diseñaron muebles a medida en otras áreas de la vivienda, como un recibidor y un entrepaño en la zona de la escalera, aportando funcionalidad y continuidad estética al conjunto. Todo el proyecto buscó mantener el estilo personal del cliente, resaltando su gusto y comodidad en cada detalle.",
      location: "Mosquera, Colombia",
      videoLink: "https://vt.tiktok.com/ZSydv7C8M/"
    },
    { 
      id: 4, 
      title: "Adecuación Apto Bogotá", 
      category: "Remodelación",
      beforeImage: aptoNorteAntes,
      afterImage: aptoNorte2,
      previewImage: aptoNorte,
      clientWanted: "El cliente deseaba realizar el cambio del piso de su apartamento para darle un toque más moderno y renovar la sensación general de su vivienda. Buscaba refrescar el espacio sin hacer una transformación completa, pero sí lograr que se sintiera más actual y acogedor.",
      development: "Con el objetivo de aportar mayor iluminación y amplitud visual, se le brindó asesoría en la elección del tono del nuevo piso, logrando un acabado que realza la luz natural y genera una atmósfera más fresca y contemporánea. Este proyecto demuestra que pequeños cambios pueden hacer una gran diferencia: el cliente no tuvo que realizar una inversión muy grande y, aun así, el resultado fue un espacio que se percibe totalmente renovado y con una nueva energía.",
      location: "Bogotá, Colombia",
      videoLink: "https://vt.tiktok.com/ZSyd3mokL/"
    },
    { 
      id: 5, 
      title: "Adecuación Apto Chía", 
      category: "Remodelación",
      beforeImage: chiaBanoAntes,
      afterImage: chiaBanoDespues,
      previewImage: chiaDiseno,
      clientWanted: "El cliente buscaba un nuevo diseño para su apartamento en Chía, Cundinamarca. Su principal objetivo era replantear la distribución del espacio para contar con una cocina más amplia, renovar el diseño de sus muebles y darle un toque especial a los baños, manteniendo una estética moderna y funcional.",
      development: "A partir de sus necesidades, se propuso una distribución diferente de la cocina, dándole mayor jerarquía dentro del apartamento, ya que era una de las zonas más importantes para el cliente. Además, se diseñó un mueble personalizado para el área de estudio, optimizando el espacio y aportando orden y estilo.\nEn los baños se incorporaron nuevos espejos con iluminación y detalles de color, creando un ambiente más estético, creativo y con personalidad. El resultado fue un diseño integral que equilibra funcionalidad, amplitud y carácter en cada rincón del apartamento.",
      location: "Chía, Colombia",
      videoLink: "https://vt.tiktok.com/ZSyd3vP9x/"
    },
    { 
      id: 6, 
      title: "Diseño Oficina TNVS Bogotá", 
      category: "Diseño",
      beforeImage: oficinaTnvs2,
      afterImage: oficinaTnvs3,
      previewImage: disenoTnvs,
      clientWanted: "El cliente buscaba un diseño para su oficina y espacio de trabajo que reflejara la identidad de su marca, manteniendo coherencia con los colores corporativos, logotipo y estilo visual de la empresa. Su objetivo era crear un entorno funcional, moderno y que transmitiera la esencia de su marca tanto para el equipo como para los visitantes.",
      development: "Dado que se trataba de un espacio reducido, el diseño se enfocó en optimizar al máximo cada metro disponible, manteniendo siempre la línea gráfica y los colores representativos de la empresa. Se propuso una pared de color protagonista que aporta carácter y energía al ambiente, complementada con un grafiti personalizado que refuerza la identidad visual de la marca.\nEl resultado fue una oficina práctica, visualmente atractiva y alineada con la personalidad y valores de la empresa.",
      location: "Bogotá, Colombia",
      videoLink: "https://vt.tiktok.com/ZSyFrsv6d/",
      isDesignOnly: true
    },
  ];

  const selectedProjectData = selectedProject
    ? portfolioItems.find(item => item.id === selectedProject) || null
    : null;

  const featured = portfolioItems.slice(0, 2);
  const rest = portfolioItems.slice(2);

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-max">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-roboto-medium tracking-widest uppercase text-accent mb-3">Nuestro trabajo</p>
          <h2 className="heading-lg text-primary mb-6">Espacios que ya transformamos.</h2>
          <p className="body-lg text-muted-foreground leading-relaxed">
            Cada proyecto parte de necesidades diferentes. Conoce algunas de las transformaciones que hemos realizado junto a nuestros clientes.
          </p>
        </Reveal>

        {/* Destacados */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {featured.map((item, index) => (
            <Reveal key={item.id} delay={index * 150} className="group cursor-pointer" onClick={() => setSelectedProject(item.id)}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <img
                  src={item.previewImage}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-roboto-medium text-primary">
                  {item.isDesignOnly ? "Diseño" : "Antes · Después"}
                </span>
              </div>
              <h3 className="font-roboto-bold text-primary text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{item.location} · {item.category}</p>
              <span className="text-sm font-roboto-bold text-accent group-hover:underline inline-flex items-center gap-1">
                Ver proyecto <span aria-hidden="true">→</span>
              </span>
            </Reveal>
          ))}
        </div>

        {/* Resto */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {rest.map((item, index) => (
            <Reveal key={item.id} delay={index * 100} className="group cursor-pointer" onClick={() => setSelectedProject(item.id)}>
              <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
                <img
                  src={item.previewImage}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-roboto-medium text-primary text-sm mb-0.5 leading-snug">{item.title}</h3>
              <p className="text-xs text-accent font-roboto-medium uppercase tracking-wide">{item.category}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectDetail
        project={selectedProjectData}
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Portfolio;