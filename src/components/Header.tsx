import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, MessageCircle } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import modiLogo from "@/assets/modi-logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send/?phone=573208943538&text&type=phone_number&app_absent=0', '_blank');
  };

  const menuItems = [
    { id: 'what-we-do', label: 'Cómo Trabajamos' },
    { id: 'services', label: 'Proyectos' },
    { id: 'team', label: 'Nosotros' },
    { id: 'contact', label: 'Contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-accent/20 shadow-lg">
      <div className="container-max px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={modiLogo} 
            alt="MODI Logo" 
            className="h-10 w-auto cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-7">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/80 hover:text-accent text-sm font-roboto-medium tracking-wide uppercase transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="h-5 w-px bg-white/20" />

          <Button
            onClick={() => scrollToSection('contact')}
            className="cta-button"
            size="sm"
          >
            COTIZAR
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            onClick={() => scrollToSection('contact')}
            className="cta-button text-xs"
            size="sm"
          >
            COTIZAR
          </Button>
          
          <Button
            onClick={openWhatsApp}
            variant="ghost"
            size="icon"
            className="text-white hover:bg-accent/20"
          >
            <MessageCircle className="h-5 w-5" />
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:bg-accent/20"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-primary border-accent/20">
              <SheetHeader>
                <SheetTitle className="text-white font-roboto-bold text-2xl">Navegación</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-white hover:text-accent text-lg font-roboto-medium transition-colors py-2 border-b border-accent/20"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;