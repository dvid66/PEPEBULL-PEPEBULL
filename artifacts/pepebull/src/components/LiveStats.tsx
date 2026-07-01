import { useState, useRef, useEffect } from 'react';
import { useDexscreener } from '@/hooks/use-dexscreener';
import { ScrollReveal, CountUp } from './ui/animations';
import { useInView } from 'framer-motion';

function RefreshIcon({ spinning }: { spinning: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={spinning ? 'animate-spin' : ''}
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  );
}

const CARDS = [
  { id: 'price', label: 'PRICE',        sub: 'USD',        color: '#22D3EE', shadow: '#22D3EE' },
  { id: 'vol',   label: 'VOLUME',       sub: '24h',        color: '#A3E635', shadow: '#A3E635' },
  { id: 'liq',   label: 'LIQUIDITY',    sub: 'pool depth', color: '#FBBF24', shadow: '#FBBF24' },
  { id: 'buys',  label: 'BUYS',         sub: '24h',        color: '#4ADE80', shadow: '#4ADE80' },
  { id: 'sells', label: 'SELLS',        sub: '24h',        color: '#E84040', shadow: '#E84040' },
  { id: 'txns',  label: 'TRANSACTIONS', sub: '24h total',  color: '#D946EF', shadow: '#D946EF' },
];

export function LiveStats() {
  const { data, isLoading, error, refetch } = useDexscreener();
  const [spin, setSpin] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true, margin: '-10%' });

  const handleRefresh = async () => {
    setSpin(true);
    await refetch();
    setTimeout(() => setSpin(false), 1000);
  };

  // Auto-scroll the horizontal strip
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame: number;
    const scroll = () => {
      if (!pausedRef.current) {
        track.scrollLeft += 0.8;
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
      }
      frame = requestAnimationFrame(scroll);
    };
    frame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frame);
  }, []);

  const getValue = (id: string) => {
    if (!data) return { display: '---', isMoney: false };
    switch (id) {
      case 'price': return { display: data.priceUsd ? parseFloat(data.priceUsd) : 0, isMoney: true };
      case 'vol':   return { display: data.volume24h || 0, isMoney: true };
      case 'liq':   return { display: data.liquidityUsd || 0, isMoney: true };
      case 'buys':  return { display: data.buys24h || 0, isMoney: false };
      case 'sells': return { display: data.sells24h || 0, isMoney: false };
      case 'txns':  return { display: (data.buys24h || 0) + (data.sells24h || 0), isMoney: false };
      default:      return { display: 0, isMoney: false };
    }
  };

  const allCards = [...CARDS, ...CARDS];

  return (
    <section className="w-full section-cream py-16" ref={inViewRef}>
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <ScrollReveal className="flex items-end justify-between mb-2">
          <h2 className="font-bebas text-6xl md:text-8xl text-[#1A1A1A] tracking-wide">
            LIVE NUMBERS
          </h2>
          <button
            onClick={handleRefresh}
            disabled={isLoading || spin}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#1A1A1A] bg-[#F5E8D3] text-[#1A1A1A] font-jakarta font-bold text-sm transition-transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
            style={{ boxShadow: '3px 3px 0 #1A1A1A' }}
          >
            <RefreshIcon spinning={spin || isLoading} />
            Refresh
          </button>
        </ScrollReveal>
        <p className="font-inter text-[#1A1A1A]/50 text-sm">
          Snapshot from Dexscreener. Updates when you refresh.
        </p>
        {error && (
          <p className="font-inter text-[#E84040] text-sm mt-2">{error} — try refreshing.</p>
        )}
      </div>

      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto px-4 pb-6 cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
        onTouchStart={() => { pausedRef.current = true; }}
        onTouchEnd={() => { pausedRef.current = false; }}
      >
        {allCards.map((card, i) => {
          const val = getValue(card.id);
          const numVal = typeof val.display === 'number' ? val.display : 0;
          return (
            <div
              key={i}
              className="flex-shrink-0 w-52 md:w-64 bg-white rounded-2xl border-2 p-5 relative overflow-hidden"
              style={{ borderColor: card.color, boxShadow: `5px 5px 0 ${card.shadow}` }}
            >
              {isLoading && (
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-black/5 to-transparent z-10" />
              )}
              <p className="font-syne text-xs font-bold tracking-widest text-[#1A1A1A]/50 uppercase mb-1">
                {card.label}
              </p>
              <p className="font-space text-4xl font-bold text-[#1A1A1A] leading-none">
                {isInView && typeof numVal === 'number' ? (
                  <CountUp value={numVal} prefix={val.isMoney ? '$' : ''} />
                ) : (
                  '—'
                )}
              </p>
              <p className="font-inter text-xs text-[#1A1A1A]/40 mt-2">{card.sub}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
