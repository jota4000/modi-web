const HowWeWork = () => {
  const steps = [
    "Contáctanos",
    "Reunámonos y comparte tu idea", 
    "Recibe una cotización personalizada",
    "Propuestas de diseño y ajustes",
    "Sesiones de selección de acabados",
    "Ejecución de la construcción",
    "Entrega de tu espacio",
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <h2 className="heading-lg text-center gradient-text mb-16">¿Cómo Trabajamos? – ¡Comencemos!</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="timeline-step">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-roboto-bold text-sm">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-roboto-bold text-primary mb-2">Paso {index + 1}</h3>
                  <p className="text-muted-foreground">{step}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;