import { useState } from "react";
import { Slider } from "@/components/ui/slider";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  altText: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, altText, beforeLabel = "Antes", afterLabel = "Después" }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState([50]);

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden group">
      {/* After Image (Full) */}
      <div className="absolute inset-0">
        <img 
          src={afterImage} 
          alt={`${altText} - Después`}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition[0]}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt={`${altText} - Antes`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Divider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
        style={{ left: `${sliderPosition[0]}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-4 bg-primary"></div>
            <div className="w-0.5 h-4 bg-primary"></div>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-background/90 px-3 py-1 rounded-md text-sm font-roboto-medium z-20">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 bg-background/90 px-3 py-1 rounded-md text-sm font-roboto-medium z-20">
        {afterLabel}
      </div>

      {/* Slider Control */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
        <Slider
          value={sliderPosition}
          onValueChange={setSliderPosition}
          max={100}
          step={1}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
