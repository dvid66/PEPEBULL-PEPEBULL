import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroBg from '@assets/gallery-13-buy_1782941761506.jpg';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section id="home" ref={ref} className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center pt-16">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <img 
          src={heroBg} 
          alt="Hero Background" 
          className="w-full h-[120%] object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-[#1C0A00]/20" />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center lg:py-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-syne text-[#4ADE80] font-bold text-sm md:text-base tracking-widest uppercase mb-4"
        >
          $PEPEBULL
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-clash text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] text-white text-stroke-green uppercase leading-[0.9]"
        >
          $PEPEBULL
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 font-inter text-xl md:text-3xl lg:text-4xl text-white font-medium max-w-2xl text-balance drop-shadow-md"
        >
          The bull that doesn't blink when the chart gets loud.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-4 lg:gap-8 items-center justify-center w-full"
        >
          <a
            href="https://pump.fun/coin/52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 lg:px-10 lg:py-5 rounded-full font-jakarta font-bold bg-[#4ADE80] text-[#1A1A1A] border-2 border-[#1A1A1A] hard-shadow-black hover-intensify active-scale text-lg transition-all"
          >
            Buy on Pump.fun
          </a>
          <a
            href="https://dexscreener.com/solana/52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 lg:px-10 lg:py-5 rounded-full font-jakarta font-bold bg-white text-[#1A1A1A] border-2 border-[#1A1A1A] hard-shadow-black hover-intensify active-scale text-lg transition-all"
          >
            View Chart
          </a>
        </motion.div>
      </div>
    </section>
  );
}