import { useState } from 'react';
import { ScrollReveal } from './ui/animations';
import { Copy, Check, ExternalLink } from 'lucide-react';

export function LiveChart() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <section id="chart" className="w-full bg-pepe-charcoal py-24 px-4 section-bleed relative z-10">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div>
            <h2 className="font-bricolage text-5xl md:text-6xl font-bold text-pepe-white text-glow-orchid">
              LIVE CHART
            </h2>
            <p className="mt-2 font-inter text-sm text-pepe-white/40">tracked by Dexscreener</p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={handleCopy}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-jakarta font-bold text-pepe-lime border border-pepe-lime box-glow-lime hover-intensify active-scale bg-pepe-lime/5 transition-all shadow-[rgba(163,230,53,0.4)]"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? 'Copied!' : 'Copy CA'}
            </button>
            <a 
              href="https://dexscreener.com/solana/52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full font-jakarta font-bold text-pepe-cyan border border-pepe-cyan box-glow-cyan hover-intensify active-scale bg-pepe-cyan/5 transition-all shadow-[rgba(34,211,238,0.4)]"
            >
              Open Dexscreener
              <ExternalLink size={18} />
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="w-full">
          {/* Responsive iframe wrapper */}
          <div 
            className="w-full rounded-[20px] overflow-hidden border border-pepe-orchid box-glow-orchid shadow-[rgba(217,70,239,0.3)] bg-pepe-deep relative"
            style={{ paddingBottom: '125%' }}
          >
            {/* Using max-height via CSS media queries to handle desktop ratio */}
            <style>
              {`
                @media (min-width: 1400px) {
                  #chart-wrapper { padding-bottom: 65% !important; }
                }
                @media (min-width: 768px) and (max-width: 1399px) {
                  #chart-wrapper { padding-bottom: 80% !important; }
                }
              `}
            </style>
            <div id="chart-wrapper" className="absolute inset-0 w-full h-full" dangerouslySetInnerHTML={{
              __html: `<iframe src="https://dexscreener.com/solana/3Yx9Q1FvhVXH4Vv8mLWWFDbLPZW4fXKgA3FAkbLQHVS6?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15" frameborder="0" width="100%" height="100%" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>`
            }} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
