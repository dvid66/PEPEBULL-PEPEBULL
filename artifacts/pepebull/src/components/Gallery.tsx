import { useState, useRef, useEffect, useCallback } from 'react';
import { ScrollReveal } from './ui/animations';
import { motion } from 'framer-motion';

import img01 from '@assets/gallery-01-classic_1782941761775.jpg';
import img02 from '@assets/gallery-02-gym_1782941761806.jpg';
import img03 from '@assets/gallery-03-suit_1782941761838.jpg';
import img04 from '@assets/gallery-04-candle_1782941761903.jpg';
import img05 from '@assets/gallery-05-money_1782941761741.jpg';
import img06 from '@assets/gallery-06-green-island_1782941761710.jpg';
import img09 from '@assets/gallery-09-matrix_1782941761632.jpg';
import img10 from '@assets/gallery-10-printer_1782941761590.jpg';
import img11 from '@assets/gallery-11-chart_1782941761560.jpg';
import img14 from '@assets/gallery-14-cash-call_1782941761475.jpg';
import img15 from '@assets/gallery-15-jenga_1782941761437.jpg';

const GALLERY_ITEMS = [
  { src: img01, caption: "The OG", color: "cyan" },
  { src: img02, caption: "Gains before greens", color: "mint" },
  { src: img03, caption: "Board meeting in 5", color: "coral" },
  { src: img04, caption: "Still bullish", color: "amber" },
  { src: img05, caption: "Don't ask how", color: "cyan" },
  { src: img06, caption: "The island life", color: "mint" },
  { src: img09, caption: "Follow the green", color: "coral" },
  { src: img10, caption: "Brrr", color: "amber" },
  { src: img11, caption: "Read the signs", color: "cyan" },
  { src: img14, caption: "Taking calls", color: "mint" },
  { src: img15, caption: "Steady hands only", color: "coral" },
];

const getColorClasses = (color: string) => {
  const map: Record<string, { border: string; shadow: string }> = {
    cyan:  { border: "border-pepe-cyan",  shadow: "box-glow-cyan"  },
    mint:  { border: "border-pepe-mint",  shadow: "box-glow-mint"  },
    coral: { border: "border-pepe-coral", shadow: "box-glow-coral" },
    amber: { border: "border-pepe-amber", shadow: "box-glow-amber" },
  };
  return map[color];
};

export function Gallery() {
  const [activeCaption, setActiveCaption] = useState<number | null>(null);
  const [dragLeft, setDragLeft] = useState(-1); // -1 = not computed yet
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const computeConstraints = useCallback(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;
    const containerWidth = container.getBoundingClientRect().width;
    const trackWidth = track.scrollWidth;
    const maxLeft = Math.max(0, trackWidth - containerWidth);
    setDragLeft(-maxLeft);
  }, []);

  // Compute on mount and on resize
  useEffect(() => {
    computeConstraints();
    const ro = new ResizeObserver(computeConstraints);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [computeConstraints]);

  // Click-outside to dismiss caption
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActiveCaption(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section id="gallery" className="w-full bg-pepe-charcoal py-24 overflow-hidden">
      <div className="max-w-[100vw] px-4 md:px-8 mb-12">
        <ScrollReveal>
          <p className="font-syne text-pepe-mint text-sm font-bold tracking-widest uppercase mb-2">
            GALLERY
          </p>
          <h3 className="font-syne font-bold text-4xl text-pepe-white">
            The Herd's Favorites
          </h3>
        </ScrollReveal>
      </div>

      {/* Container used to measure available width */}
      <div ref={containerRef} className="w-full overflow-hidden">
        <ScrollReveal delay={0.2}>
          <motion.div
            ref={trackRef}
            className="flex cursor-grab active:cursor-grabbing px-4 md:px-8 gap-6 select-none"
            drag="x"
            dragConstraints={{ right: 0, left: dragLeft === -1 ? -9999 : dragLeft }}
            dragElastic={0.08}
            dragTransition={{ bounceStiffness: 500, bounceDamping: 30 }}
            whileTap={{ cursor: "grabbing" }}
          >
            {GALLERY_ITEMS.map((item, idx) => {
              const styles = getColorClasses(item.color);
              const isRevealed = activeCaption === idx;

              return (
                <motion.div
                  key={idx}
                  data-testid={`gallery-card-${idx}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  onClick={() => setActiveCaption(isRevealed ? null : idx)}
                  className={`relative flex-shrink-0 w-[280px] md:w-[320px] aspect-square rounded-[16px] border ${styles.border} ${styles.shadow} overflow-hidden transition-all duration-300`}
                  whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover pointer-events-none"
                    draggable={false}
                  />

                  {/* Hidden caption overlay — appears on tap */}
                  <div
                    className={`absolute inset-x-0 bottom-0 bg-pepe-charcoal/90 backdrop-blur-sm p-4 transition-transform duration-300 ease-out border-t ${styles.border} ${isRevealed ? 'translate-y-0' : 'translate-y-full'}`}
                  >
                    <p className="font-outfit text-pepe-white text-lg font-medium text-center">
                      {item.caption}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
