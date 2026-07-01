import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const ScrollReveal = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const CountUp = ({ value, duration = 1.2, prefix = "", suffix = "" }: { value: number, duration?: number, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(value * easeProgress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [value, duration]);

  // Format smartly based on value size
  const formatted = value >= 1000000 
    ? (count / 1000000).toFixed(2) + 'M'
    : value >= 1000 
      ? (count / 1000).toFixed(1) + 'K'
      : count.toFixed(value % 1 !== 0 ? 4 : 0); // show decimals if small/price

  return <span>{prefix}{formatted}{suffix}</span>;
}
