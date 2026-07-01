import { useState } from 'react';
import footerBg from '@assets/gallery-07-peak_1782941761671.jpg';
import { Copy, Check } from 'lucide-react';
import { SiX, SiTelegram } from 'react-icons/si';
import { LineChart, Rocket } from 'lucide-react';

const ICONS = [
  { url: "https://x.com/PEPEBULLONSOL_", icon: <SiX />, color: "border-pepe-cyan text-pepe-cyan box-glow-cyan" },
  { url: "https://x.com/i/communities/2033671038945329619", icon: <SiX />, color: "border-pepe-mint text-pepe-mint box-glow-mint" },
  { url: "https://t.me/pepebullsolportal", icon: <SiTelegram />, color: "border-pepe-lavender text-pepe-lavender box-glow-lavender" },
  { url: "https://dexscreener.com/solana/52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump", icon: <LineChart />, color: "border-pepe-lime text-pepe-lime box-glow-lime" },
  { url: "https://pump.fun/coin/52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump", icon: <Rocket />, color: "border-pepe-coral text-pepe-coral box-glow-coral" },
  { url: "https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump", icon: <span className="font-bold text-xs">J</span>, color: "border-pepe-amber text-pepe-amber box-glow-amber" }
];

export function Footer() {
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
    <footer className="w-full relative bg-black overflow-hidden font-sora py-16 px-4">
      {/* Background Image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={footerBg} 
          alt="Peak background" 
          className="w-full h-full object-cover object-top opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pepe-charcoal via-pepe-charcoal/90 to-pepe-charcoal/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Social Icons */}
        <div className="flex gap-4 mb-12 flex-wrap justify-center">
          {ICONS.map((item, i) => (
            <a 
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-full border ${item.color} flex items-center justify-center text-xl transition-all duration-300 hover-intensify active-scale bg-pepe-charcoal/60 backdrop-blur-sm`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Contract Address */}
        <div className="mb-16 w-full max-w-md">
          <div className="bg-pepe-charcoal/80 backdrop-blur-md rounded-xl border border-pepe-lime box-glow-lime shadow-[rgba(163,230,53,0.2)] p-4 flex items-center justify-between gap-4 transition-all hover:shadow-[rgba(163,230,53,0.4)]">
            <span className="font-bricolage text-pepe-lime truncate flex-1 text-sm md:text-base">
              {contractAddress}
            </span>
            <button 
              onClick={handleCopy}
              className="p-2 rounded-lg bg-pepe-lime/10 text-pepe-lime hover:bg-pepe-lime/20 transition-colors active-scale flex-shrink-0"
              title="Copy Contract Address"
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
            </button>
          </div>
          {copied && <p className="text-pepe-lime text-center mt-2 text-sm font-bold absolute w-full max-w-md">Copied to clipboard!</p>}
        </div>

        {/* Disclaimer */}
        <p className="text-pepe-white/40 text-xs md:text-sm text-center font-inter max-w-3xl leading-relaxed mb-8">
          $PEPEBULL is a community meme coin with no intrinsic value or expectation of financial return. No formal team, no roadmap, no utility. Not financial advice. Highly volatile. Entertainment purposes only. Do your own research.
        </p>

        {/* Copyright */}
        <p className="text-pepe-white/60 text-sm font-bold">
          © 2026 $PEPEBULL. Built on Solana.
        </p>
      </div>
    </footer>
  );
}
