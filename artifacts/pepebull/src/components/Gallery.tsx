import { useState, useRef, useEffect, useCallback } from 'react';
import { ScrollReveal } from './ui/animations';

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
  { src: img01, caption: 'The OG',               color: '#22D3EE' },
  { src: img02, caption: 'Gains before greens',   color: '#A3E635' },
  { src: img03, caption: 'Board meeting in 5',    color: '#E84040' },
  { src: img04, caption: 'Still bullish',         color: '#FBBF24' },
  { src: img05, caption: "Don't ask how",         color: '#22D3EE' },
  { src: img06, caption: 'The island life',       color: '#A3E635' },
  { src: img09, caption: 'Follow the green',      color: '#E84040' },
  { src: img10, caption: 'Brrr',                  color: '#FBBF24' },
  { src: img11, caption: 'Read the signs',        color: '#22D3EE' },
  { src: img14, caption: 'Taking calls',          color: '#A3E635' },
  { src: img15, caption: 'Steady hands only',     color: '#E84040' },
];

// Duplicate for seamless loop
const ALL_ITEMS = [...GALLERY_ITEMS, ...GALLERY_ITEMS];

export function Gallery() {
  const [activeCaption, setActiveCaption] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const frameRef = useRef<number>(0);

  // Auto-scroll — smooth & seamless loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const scroll = () => {
      if (!pausedRef.current) {
        track.scrollLeft += 0.7;
        // Seamless loop: when we've scrolled past the first half, jump back
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
      }
      frameRef.current = requestAnimationFrame(scroll);
    };
    frameRef.current = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const pause  = useCallback(() => { pausedRef.current = true; },  []);
  const resume = useCallback(() => { pausedRef.current = false; }, []);

  return (
    <section id="gallery" className="w-full section-brown py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8 mb-12">
        <ScrollReveal>
          <div
            className="inline-block bg-[#F5E8D3] border-2 border-[#1C0A00] rounded-full px-4 py-1 font-syne text-[#1C0A00] text-sm font-bold tracking-widest uppercase mb-4"
            style={{ boxShadow: '3px 3px 0 #A3E635' }}
          >
            GALLERY
          </div>
          <h3 className="font-bebas text-5xl md:text-7xl text-[#F5E8D3] tracking-wide">
            The Herd's Favorites
          </h3>
          <p className="font-inter text-[#F5E8D3]/50 text-sm mt-2">
            Tap any image to reveal its caption. Auto-scrolling — hover to pause.
          </p>
        </ScrollReveal>
      </div>

      {/* Auto-scrolling strip */}
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        onMouseEnter={pause}
        onMouseLeave={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
      >
        {ALL_ITEMS.map((item, idx) => {
          const isRevealed = activeCaption === idx;
          return (
            <div
              key={idx}
              onClick={() => setActiveCaption(isRevealed ? null : idx)}
              className="relative flex-shrink-0 w-[260px] md:w-[300px] aspect-square cursor-pointer bg-[#F9F3E8] rounded-2xl border-2 overflow-hidden transition-transform duration-200 hover:-translate-y-1"
              style={{
                borderColor: item.color,
                boxShadow: `6px 6px 0 ${item.color}`,
              }}
            >
              <img
                src={item.src}
                alt={item.caption}
                draggable={false}
                className="w-full h-full object-cover rounded-xl p-1 pointer-events-none select-none"
              />
              {/* Caption slide-up */}
              <div
                className="absolute inset-x-0 bottom-0 bg-[#1C0A00] p-4 transition-transform duration-300 ease-out border-t-2 rounded-b-xl"
                style={{
                  borderColor: item.color,
                  transform: isRevealed ? 'translateY(0)' : 'translateY(100%)',
                }}
              >
                <p className="font-outfit text-[#F5E8D3] text-base font-bold text-center">
                  {item.caption}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
