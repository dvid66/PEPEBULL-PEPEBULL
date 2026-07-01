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
    const map: Record<string, { border: string, shadow: string }> = {
      cyan: { border: "border-[#22D3EE]", shadow: "hard-shadow-cyan" },
      lime: { border: "border-[#A3E635]", shadow: "hard-shadow-lime" },
      amber: { border: "border-[#FBBF24]", shadow: "hard-shadow-amber" },
      coral: { border: "border-[#E84040]", shadow: "hard-shadow-red" },
    };
    return map[color];
  };

  return (
    <section className="w-full section-brown py-16 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="flex justify-between items-end mb-6">
          <h2 className="font-syne text-[#F5E8D3] text-sm font-bold tracking-widest uppercase">
            LIVE STATS
          </h2>
          <button 
            onClick={handleRefresh}
            disabled={isLoading || spin}
            className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#1A1A1A] bg-[#A3E635] text-[#1A1A1A] hard-shadow-black font-jakarta font-bold text-sm hover-intensify active-scale transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RefreshCw size={16} className={spin || isLoading ? 'animate-spin' : ''} />
            Refresh
          </button>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => {
            const styles = getColorClasses(card.color);
            return (
              <ScrollReveal key={card.label} delay={i * 0.1}>
                <div className={`bg-[#F5E8D3] rounded-xl p-6 border-2 ${styles.border} ${styles.shadow} relative overflow-hidden transition-transform hover:-translate-y-1`}>
                  {isLoading && (
                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent z-10" />
                  )}
                  
                  <h3 className={`font-syne text-xs uppercase mb-2 text-[#1A1A1A] opacity-80 font-bold`}>{card.label}</h3>
                  <div className="font-space text-3xl font-bold text-[#1A1A1A]">
                    {isInView ? (
                      card.isTxns ? (
                        <div className="flex gap-2">
                          <span className="text-[#4ADE80]"><CountUp value={data?.buys24h || 0} /></span>
                          <span className="text-[#1A1A1A]/30">/</span>
                          <span className="text-[#E84040]"><CountUp value={data?.sells24h || 0} /></span>
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
      </div>
    </section>
  );
}