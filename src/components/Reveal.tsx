import { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
}

/** Wraps content so it fades + rises into place the first time it's scrolled into view. */
const Reveal = ({ children, className = "", delay = 0, onClick }: RevealProps) => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export default Reveal;
