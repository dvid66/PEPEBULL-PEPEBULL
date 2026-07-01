import { useState, useRef } from 'react';
import { useDexscreener } from '@/hooks/use-dexscreener';
import { ScrollReveal, CountUp } from './ui/animations';
import { RefreshCw } from 'lucide-react';
import { useInView } from 'framer-motion';

export function LiveStats() {
  const { data, isLoading, refetch } = useDexscreener();
  const [spin, setSpin] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const handleRefresh = async () => {
    setSpin(true);
    await refetch();
    setTimeout(() => setSpin(false), 1000);
  };

  const cards = [
    { label: "Price", value: data?.priceUsd ? parseFloat(data.priceUsd) : 0, prefix: "$", color: "cyan" },
    { label: "Volume (24h)", value: data?.volume24h || 0, prefix: "$", color: "lime" },
    { label: "Liquidity", value: data?.liquidityUsd || 0, prefix: "$", color: "amber" },
    { label: "Buys/Sells (24h)", value: (data?.buys24h || 0) + (data?.sells24h || 0), prefix: "", color: "coral", isTxns: true }
  ];

  const getColorClasses = (color: string) => {
    const map: Record<string, { border: string, text: string, shadow: string, glow: string }> = {
      cyan: { border: "border-pepe-cyan", text: "text-pepe-cyan", shadow: "box-glow-cyan", glow: "text-glow-cyan" },
      lime: { border: "border-pepe-lime", text: "text-pepe-lime", shadow: "box-glow-lime", glow: "text-glow-lime" },
      amber: { border: "border-pepe-amber", text: "text-pepe-amber", shadow: "box-glow-amber", glow: "text-glow-amber" },
      coral: { border: "border-pepe-coral", text: "text-pepe-coral", shadow: "box-glow-coral", glow: "text-glow-coral" },
    };
    return map[color];
  };

  return (
    <section className="w-full bg-pepe-charcoal py-16 px-4 border-b border-pepe-lime/10" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="flex justify-between items-end mb-6">
          <h2 className="font-syne text-pepe-cyan text-glow-cyan text-sm font-bold tracking-widest uppercase">
            LIVE STATS
          </h2>
          <button 
            onClick={handleRefresh}
            disabled={isLoading || spin}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-pepe-lime text-pepe-lime box-glow-lime font-jakarta text-sm active-scale transition-all hover-intensify shadow-[rgba(163,230,53,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RefreshCw size={14} className={spin || isLoading ? 'animate-spin' : ''} />
            Refresh
          </button>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, i) => {
            const styles = getColorClasses(card.color);
            return (
              <ScrollReveal key={card.label} delay={i * 0.1}>
                <div className={`bg-pepe-deep rounded-xl p-6 border ${styles.border} ${styles.shadow} relative overflow-hidden`}>
                  {/* Shimmer loading overlay */}
                  {isLoading && (
                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-pepe-white/5 to-transparent z-10" />
                  )}
                  
                  <h3 className={`font-syne text-xs uppercase mb-2 ${styles.text} opacity-80`}>{card.label}</h3>
                  <div className="font-space text-3xl font-bold text-pepe-white">
                    {isInView ? (
                      card.isTxns ? (
                        <div className="flex gap-2">
                          <span className="text-pepe-mint"><CountUp value={data?.buys24h || 0} /></span>
                          <span className="text-pepe-white/30">/</span>
                          <span className="text-pepe-coral"><CountUp value={data?.sells24h || 0} /></span>
                        </div>
                      ) : (
                        <CountUp value={card.value} prefix={card.prefix} />
                      )
                    ) : (
                      "---"
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
        
        <ScrollReveal delay={0.4}>
          <p className="mt-4 text-center font-inter text-xs text-pepe-white/40">
            Numbers reflect a snapshot at time of last refresh. Tracked by Dexscreener.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
