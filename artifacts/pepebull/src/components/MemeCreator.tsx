import { useState, useRef, useCallback } from 'react';
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

const BULLS = [
  { src: img01, label: 'Classic' },
  { src: img02, label: 'Gym' },
  { src: img03, label: 'Suit' },
  { src: img04, label: 'Candle' },
  { src: img05, label: 'Money' },
  { src: img06, label: 'Island' },
  { src: img09, label: 'Matrix' },
  { src: img10, label: 'Printer' },
  { src: img11, label: 'Chart' },
  { src: img14, label: 'Cash Call' },
  { src: img15, label: 'Jenga' },
];

const RANDOM_TOPS = [
  'THE BULL MARKET',
  'WHEN IN DOUBT',
  'ZOOM OUT',
  'STILL BULLISH',
  'NOT FINANCIAL',
  'GM HERD',
  'PEPEBULL SAYS',
  'MY BAGS RN',
];
const RANDOM_BOTTOMS = [
  'IS BACK',
  'ZOOM OUT',
  "DON'T SELL",
  "WE'RE SO BACK",
  'ADVICE',
  'LFG',
  'BUY THE DIP',
  'NGMI IF YOU SELL',
];

export function MemeCreator() {
  const [topText, setTopText]     = useState('THE BULL MARKET');
  const [bottomText, setBottomText] = useState('IS BACK');
  const [selectedBull, setSelectedBull] = useState(0);
  const previewRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleRandomize = useCallback(() => {
    setSelectedBull(Math.floor(Math.random() * BULLS.length));
    setTopText(RANDOM_TOPS[Math.floor(Math.random() * RANDOM_TOPS.length)]);
    setBottomText(RANDOM_BOTTOMS[Math.floor(Math.random() * RANDOM_BOTTOMS.length)]);
  }, []);

  const handleDownload = useCallback(async () => {
    const img = imgRef.current;
    if (!img) return;

    const canvas = document.createElement('canvas');
    const SIZE = 800;
    canvas.width = SIZE;
    canvas.height = SIZE;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Draw image
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = img.src;
    await new Promise<void>((res) => { image.onload = () => res(); });
    ctx.drawImage(image, 0, 0, SIZE, SIZE);

    // Meme text style
    const FONT_SIZE = Math.round(SIZE * 0.11);
    ctx.font = `900 ${FONT_SIZE}px Impact, "Arial Black", Arial, Helvetica, sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillStyle = '#FFFFFF';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = FONT_SIZE * 0.1;
    ctx.lineJoin = 'round';

    // Top text
    ctx.strokeText(topText.toUpperCase(), SIZE / 2, FONT_SIZE);
    ctx.fillText(topText.toUpperCase(), SIZE / 2, FONT_SIZE);

    // Bottom text
    ctx.strokeText(bottomText.toUpperCase(), SIZE / 2, SIZE - FONT_SIZE * 0.3);
    ctx.fillText(bottomText.toUpperCase(), SIZE / 2, SIZE - FONT_SIZE * 0.3);

    // Download
    const link = document.createElement('a');
    link.download = 'pepebull-meme.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }, [topText, bottomText]);

  const bull = BULLS[selectedBull];

  return (
    <section className="w-full section-cream py-24 px-4">
      <div className="max-w-5xl mx-auto">

        <ScrollReveal className="mb-12">
          <div
            className="inline-block bg-[#1A1A1A] rounded-full px-4 py-1 font-syne text-[#F6C90E] text-sm font-bold tracking-widest uppercase mb-4"
            style={{ boxShadow: '3px 3px 0 #1A1A1A' }}
          >
            MEME LAB
          </div>
          <h2
            className="font-bebas text-6xl md:text-8xl text-[#1A1A1A] tracking-wide"
            style={{ textShadow: '4px 4px 0 #E84040' }}
          >
            CREATE YOUR MASTERPIECE
          </h2>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* Left: Preview */}
          <div className="flex-shrink-0 w-full lg:w-[380px]">
            <div
              ref={previewRef}
              className="relative w-full aspect-square rounded-2xl border-2 border-[#1A1A1A] overflow-hidden"
              style={{ boxShadow: '6px 6px 0 #E84040' }}
            >
              <img
                ref={imgRef}
                src={bull.src}
                alt={bull.label}
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
              {/* Top text overlay */}
              {topText && (
                <div
                  className="absolute top-3 left-0 right-0 text-center px-3 text-white uppercase leading-tight break-words"
                  style={{
                    fontFamily: 'Impact, "Arial Black", Arial, Helvetica, sans-serif',
                    fontSize: 'clamp(1.4rem, 8vw, 3rem)',
                    WebkitTextStroke: '3px #000000',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                    fontWeight: 900,
                    letterSpacing: '0.02em',
                  }}
                >
                  {topText}
                </div>
              )}
              {/* Bottom text overlay */}
              {bottomText && (
                <div
                  className="absolute bottom-3 left-0 right-0 text-center px-3 text-white uppercase leading-tight break-words"
                  style={{
                    fontFamily: 'Impact, "Arial Black", Arial, Helvetica, sans-serif',
                    fontSize: 'clamp(1.4rem, 8vw, 3rem)',
                    WebkitTextStroke: '3px #000000',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                    fontWeight: 900,
                    letterSpacing: '0.02em',
                  }}
                >
                  {bottomText}
                </div>
              )}
            </div>

            {/* Download button */}
            <button
              onClick={handleDownload}
              className="mt-5 w-full py-4 rounded-full bg-[#1A1A1A] text-white border-2 border-[#1A1A1A] font-jakarta font-bold text-lg tracking-wide transition-transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2"
              style={{ boxShadow: '4px 4px 0 #E84040' }}
            >
              ↓ Download Meme
            </button>
          </div>

          {/* Right: Controls */}
          <div className="flex-1 w-full space-y-6">
            {/* Top text */}
            <div>
              <label className="block font-syne text-xs font-bold tracking-widest text-[#1A1A1A]/60 uppercase mb-2">
                T &nbsp; TOP TEXT
              </label>
              <input
                type="text"
                value={topText}
                onChange={(e) => setTopText(e.target.value)}
                placeholder="THE BULL MARKET"
                className="w-full px-5 py-4 rounded-xl border-2 border-[#1A1A1A] bg-white font-jakarta font-bold text-[#1A1A1A] text-lg placeholder:text-[#1A1A1A]/30 outline-none focus:ring-0"
                style={{ boxShadow: '4px 4px 0 #1A1A1A' }}
              />
            </div>

            {/* Bottom text */}
            <div>
              <label className="block font-syne text-xs font-bold tracking-widest text-[#1A1A1A]/60 uppercase mb-2">
                T &nbsp; BOTTOM TEXT
              </label>
              <input
                type="text"
                value={bottomText}
                onChange={(e) => setBottomText(e.target.value)}
                placeholder="IS BACK"
                className="w-full px-5 py-4 rounded-xl border-2 border-[#1A1A1A] bg-white font-jakarta font-bold text-[#1A1A1A] text-lg placeholder:text-[#1A1A1A]/30 outline-none focus:ring-0"
                style={{ boxShadow: '4px 4px 0 #1A1A1A' }}
              />
            </div>

            {/* Bull picker */}
            <div>
              <label className="block font-syne text-xs font-bold tracking-widest text-[#1A1A1A]/60 uppercase mb-3">
                CHOOSE THE BULL
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                {BULLS.map((b, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedBull(idx)}
                    className="aspect-square rounded-xl border-2 overflow-hidden transition-transform hover:-translate-y-0.5"
                    style={{
                      borderColor: selectedBull === idx ? '#FBBF24' : '#1A1A1A',
                      boxShadow: selectedBull === idx ? '3px 3px 0 #FBBF24' : '2px 2px 0 #1A1A1A',
                    }}
                  >
                    <img
                      src={b.src}
                      alt={b.label}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Randomize */}
            <button
              onClick={handleRandomize}
              className="w-full py-4 rounded-full bg-[#FBBF24] border-2 border-[#1A1A1A] font-jakarta font-bold text-[#1A1A1A] text-lg tracking-wide transition-transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3"
              style={{ boxShadow: '4px 4px 0 #1A1A1A' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 3 21 3 21 8" />
                <line x1="4" y1="20" x2="21" y2="3" />
                <polyline points="21 16 21 21 16 21" />
                <line x1="15" y1="15" x2="21" y2="21" />
              </svg>
              RANDOMIZE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
