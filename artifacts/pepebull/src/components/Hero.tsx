import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroBg from '@assets/gallery-13-buy_1782941761506.jpg';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax background: moves down slightly as we scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section id="home" ref={ref} className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center pt-16">
      {/* Background with parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <img 
          src={heroBg} 
          alt="Hero Background" 
          className="w-full h-[120%] object-cover object-[center_30%]"
        />
        {/* Gradient overlays to blend into charcoal */}
        <div className="absolute inset-0 bg-pepe-charcoal/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-pepe-charcoal via-pepe-charcoal/20 to-transparent" />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-clash text-6xl md:text-8xl lg:text-9xl text-pepe-white text-glow-lime uppercase leading-[0.9]"
        >
          $PEPEBULL
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 font-inter text-xl md:text-3xl text-pepe-mint/90 font-medium max-w-2xl text-balance"
        >
          The bull that doesn't blink when the chart gets loud.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
        >
          <a
            href="https://pump.fun/coin/52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-jakarta font-bold text-pepe-cyan border border-pepe-cyan box-glow-cyan hover-intensify active-scale bg-pepe-cyan/5 text-lg shadow-[rgba(34,211,238,0.4)] transition-all"
          >
            Buy on Pump.fun
          </a>
          <a
            href="https://dexscreener.com/solana/52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-jakarta font-bold text-pepe-coral border border-pepe-coral box-glow-coral hover-intensify active-scale bg-pepe-coral/5 text-lg shadow-[rgba(251,113,133,0.4)] transition-all"
          >
            View Chart
          </a>
        </motion.div>
      </div>
    </section>
  );
}
