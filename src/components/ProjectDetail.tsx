import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";

interface ProjectDetailProps {
  project: {
    id: number;
    title: string;
    category: string;
    beforeImage: string;
    afterImage: string;
    clientWanted: string;
    development: string;
    location: string;
    videoLink: string;
    isDesignOnly?: boolean;
  } | null;
  open: boolean;
  onClose: () => void;
}

const ProjectDetail = ({ project, open, onClose }: ProjectDetailProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-roboto-bold text-primary gradient-text">
            {project.title}
          </DialogTitle>
          <p className="text-sm text-accent font-roboto-medium uppercase tracking-wide">
            {project.category}
          </p>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Before & After Gallery */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-roboto-bold text-primary mb-2">{project.isDesignOnly ? "Diseño" : "Antes"}</h3>
              <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img 
                  src={project.beforeImage} 
                  alt={project.isDesignOnly ? "Diseño" : "Antes"} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="font-roboto-bold text-primary mb-2">{project.isDesignOnly ? "Diseño" : "Después"}</h3>
              <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img 
                  src={project.afterImage} 
                  alt={project.isDesignOnly ? "Diseño" : "Después"} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <div>
              <h4 className="font-roboto-bold text-primary mb-2">Lo que el cliente quería</h4>
              <p className="text-muted-foreground font-roboto-medium">
                {project.clientWanted}
              </p>
            </div>

            <div>
              <h4 className="font-roboto-bold text-primary mb-2">Desarrollo del proyecto</h4>
              <p className="text-muted-foreground font-roboto-medium">
                {project.development}
              </p>
            </div>

            <div>
              <h4 className="font-roboto-bold text-primary mb-2">Ubicación</h4>
              <p className="text-muted-foreground font-roboto-medium">
                {project.location}
              </p>
            </div>
          </div>

          {/* Video Link */}
          <div className="pt-4 border-t">
            <Button 
              onClick={() => window.open(project.videoLink, '_blank')}
              className="w-full md:w-auto"
              size="lg"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Ver video del proyecto
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetail;
