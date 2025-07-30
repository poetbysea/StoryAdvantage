'use client';

import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

type AnimatedCounterProps = {
  from: number;
  to: number;
  animationOptions?: any;
};

const AnimatedCounter = ({ from, to, animationOptions }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(from, to, {
        duration: 2,
        ease: 'easeOut',
        ...animationOptions,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to, animationOptions]);

  return <span ref={ref}>{from}</span>;
};

export default AnimatedCounter;
