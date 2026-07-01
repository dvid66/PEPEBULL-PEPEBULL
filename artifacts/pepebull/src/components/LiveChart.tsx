import { useState } from 'react';
import { ScrollReveal } from './ui/animations';
import { Copy, Check } from 'lucide-react';

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
    <section id="chart" className="w-full section-indigo py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
          <div className="text-center lg:text-left">
            <div className="inline-block bg-[#D946EF] text-white rounded-full px-4 py-1 font-syne text-sm font-bold tracking-widest mb-4 border-2 border-[#1A1A1A] hard-shadow-black">
              04 / LIVE CHART
            </div>
            <h2 className="font-bebas text-6xl md:text-8xl text-white text-stroke-orchid tracking-wide">
              LIVE CHART
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-jakarta font-bold bg-[#A3E635] text-[#1A1A1A] border-2 border-[#1A1A1A] hard-shadow-black hover-intensify active-scale transition-transform text-lg"
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
              {copied ? 'Copied!' : 'Copy CA'}
            </button>
            <a 
              href="https://dexscreener.com/solana/52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-jakarta font-bold bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#1A1A1A] transition-colors text-lg"
            >
              OPEN IN DEXSCREENER &rarr;
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="w-full">
          <div 
            className="w-full rounded-2xl overflow-hidden border-2 border-[#D946EF] bg-[#1E1432] relative"
            style={{ paddingBottom: '50%', boxShadow: '6px 6px 0 #D946EF' }}
          >
            <style>
              {`
                @media (max-width: 767px) {
                  #chart-wrapper { padding-bottom: 125% !important; }
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