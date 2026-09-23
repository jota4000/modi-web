import { useState } from "react";
import ProjectDetail from "./ProjectDetail";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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
    { 
      id: 7, 
      title: "Futuro proyecto 1",
      category: "Diseño Interior",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      clientWanted: "Crear un dormitorio sereno y elegante con un vestidor integrado y baño en suite moderno.",
      development: "Desarrollamos un espacio relajante con paleta de colores suaves, textiles de lujo y iluminación indirecta. El vestidor incluye sistemas de organización personalizados.",
      location: "Pereira, Colombia",
      videoLink: "https://www.instagram.com/modi.col"
    },
    { 
      id: 8, 
      title: "Futuro proyecto 2",
      category: "Remodelación",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      clientWanted: "Transformar una terraza sin uso en un espacio de entretenimiento al aire libre con cocina exterior.",
      development: "Instalamos pisos de madera resistente, cocina modular de acero inoxidable, pérgola bioclimática y zona lounge con iluminación ambiental.",
      location: "Santa Marta, Colombia",
      videoLink: "https://www.instagram.com/modi.col"
    },
    { 
      id: 9, 
      title: "Futuro proyecto 3",
      category: "Diseño",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      clientWanted: "Diseñar un consultorio médico moderno que transmita profesionalismo y genere confianza en los pacientes.",
      development: "Creamos espacios funcionales con sala de espera confortable, consultorios equipados con tecnología y acabados sanitarios de alta calidad.",
      location: "Manizales, Colombia",
      videoLink: "https://www.instagram.com/modi.col"
    },
    { 
      id: 10, 
      title: "Futuro proyecto 4",
      category: "Remodelación",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      clientWanted: "Optimizar un apartamento pequeño para maximizar espacio y funcionalidad sin sacrificar estilo.",
      development: "Implementamos soluciones de almacenamiento vertical, muebles multifuncionales y espejos estratégicos para ampliar visualmente el espacio.",
      location: "Bogotá, Colombia",
      videoLink: "https://www.instagram.com/modi.col"
    },
    { 
      id: 11, 
      title: "Futuro proyecto 5",
      category: "Diseño",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      clientWanted: "Crear un ambiente único para un restaurante que combine elegancia con calidez y funcionalidad.",
      development: "Diseñamos un layout que optimiza el flujo de servicio, con iluminación focal, mobiliario cómodo y detalles decorativos que reflejan la identidad gastronómica.",
      location: "Medellín, Colombia",
      videoLink: "https://www.instagram.com/modi.col"
    },
    { 
      id: 12, 
      title: "Futuro proyecto 6",
      category: "Remodelación",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      clientWanted: "Transformar una habitación en una biblioteca acogedora con espacio de lectura y trabajo.",
      development: "Instalamos estanterías a medida, iluminación dirigida para lectura, escritorio empotrado y sillón de lectura con lámpara de pie.",
      location: "Cali, Colombia",
      videoLink: "https://www.instagram.com/modi.col"
    },
    { 
      id: 13, 
      title: "Futuro proyecto 7",
      category: "Diseño Interior",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      clientWanted: "Crear un espacio recreativo para toda la familia con zona de juegos y entretenimiento multimedia.",
      development: "Desarrollamos un diseño colorido y funcional con almacenamiento para juegos, sistema de home theater y mobiliario versátil para diferentes actividades.",
      location: "Barranquilla, Colombia",
      videoLink: "https://www.instagram.com/modi.col"
    },
    { 
      id: 14, 
      title: "Futuro proyecto 8",
      category: "Remodelación",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      clientWanted: "Modernizar la fachada de una vivienda tradicional para darle un aspecto contemporáneo.",
      development: "Aplicamos revestimiento moderno, actualizamos ventanería, añadimos iluminación arquitectónica y renovamos el jardín frontal con diseño paisajístico.",
      location: "Cartagena, Colombia",
      videoLink: "https://www.instagram.com/modi.col"
    },
    { 
      id: 15, 
      title: "Futuro proyecto 9",
      category: "Diseño Interior",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      clientWanted: "Convertir un sótano en un gimnasio privado completamente equipado con zona de yoga.",
      development: "Instalamos pisos especiales para ejercicio, espejos de pared completa, iluminación energizante y ventilación optimizada. Incluye área separada para yoga con iluminación suave.",
      location: "Bucaramanga, Colombia",
      videoLink: "https://www.instagram.com/modi.col"
    },
    { 
      id: 16, 
      title: "Futuro proyecto 10",
      category: "Remodelación",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      clientWanted: "Optimizar un espacio pequeño de lavandería para hacerlo más funcional y organizado.",
      development: "Instalamos gabinetes superiores, encimera de trabajo, área de planchado plegable y sistema de almacenamiento para productos de limpieza.",
      location: "Pereira, Colombia",
      videoLink: "https://www.instagram.com/modi.col"
    },
    { 
      id: 17, 
      title: "Futuro proyecto 11",
      category: "Diseño",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      clientWanted: "Diseñar una boutique de ropa con identidad única que resalte los productos y mejore la experiencia de compra.",
      development: "Creamos un espacio con probadores amplios, iluminación premium, exhibidores personalizados y punto de pago integrado con la decoración.",
      location: "Santa Marta, Colombia",
      videoLink: "https://www.instagram.com/modi.col"
    },
    { 
      id: 18, 
      title: "Futuro proyecto 12",
      category: "Remodelación",
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
      clientWanted: "Renovar completamente el área de piscina y crear un espacio social moderno para reuniones familiares.",
      development: "Renovamos el acabado de la piscina, instalamos deck de madera, área de bar exterior, zona lounge con fogata y sistema de iluminación LED subacuática.",
      location: "Manizales, Colombia",
      videoLink: "https://www.instagram.com/modi.col"
    },
  ];

  const selectedProjectData = selectedProject 
    ? portfolioItems.find(item => item.id === selectedProject) || null
    : null;

  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = portfolioItems.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-max">
        <h2 className="heading-lg text-center gradient-text mb-8">Portafolio</h2>
        
        {/* Pagination Controls - Top */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="h-10 w-10"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="icon"
                onClick={() => handlePageChange(page)}
                className="h-10 w-10"
              >
                {page}
              </Button>
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="h-10 w-10"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer"
              onClick={() => setSelectedProject(item.id)}
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 mb-4 relative">
                {item.previewImage ? (
                  <img 
                    src={item.previewImage} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/50 flex items-center justify-center">
                        <span className="text-2xl">🏠</span>
                      </div>
                      <p className="font-roboto-medium text-primary">Vista Previa del Proyecto</p>
                    </div>
                  </div>
                )}
              </div>
              
              <h3 className="font-roboto-bold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-accent font-roboto-medium uppercase tracking-wide">
                {item.category}
              </p>
            </div>
          ))}
        </div>
        
        {/* Pagination Controls - Bottom */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="h-10 w-10"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="icon"
                onClick={() => handlePageChange(page)}
                className="h-10 w-10"
              >
                {page}
              </Button>
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="h-10 w-10"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-6">
            Ve nuestro portafolio completo que muestra renders, planos y proyectos completados.
          </p>
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