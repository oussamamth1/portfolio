import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  className?: string;
  numberClassName?: string;
  labelClassName?: string;
}

const AnimatedCounter = ({
  value, label, suffix = "", prefix = "",
  className, numberClassName, labelClassName,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReduced = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 60, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(() => {
    if (prefersReduced) { setDisplay(value); return; }
    const unsubscribe = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsubscribe;
  }, [spring, prefersReduced, value]);

  return (
    <div className={cn("flex flex-col items-center gap-1", className)}>
      <span ref={ref} className={cn("font-display text-4xl font-bold text-gradient leading-none", numberClassName)}>
        {prefix}{display}{suffix}
      </span>
      <span className={cn("text-sm text-muted-foreground font-medium tracking-wide uppercase", labelClassName)}>
        {label}
      </span>
    </div>
  );
};

export default AnimatedCounter;
