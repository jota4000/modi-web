import { CSSProperties, ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

interface DealtRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  offset?: number;
  style?: CSSProperties;
}

/** Slides in from the right, like a card being dealt from a deck — used for staggered rows. */
const DealtReveal = ({ children, className = "", delay = 0, offset = 140, style }: DealtRevealProps) => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : `translateX(${offset}px)`,
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default DealtReveal;
