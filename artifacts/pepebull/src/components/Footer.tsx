import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { SiX, SiTelegram } from 'react-icons/si';
import { LineChart, Rocket } from 'lucide-react';
import mascotImg from '@assets/gallery-16-press_1782941761361.jpg';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Lore', href: '#lore' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Chart', href: '#chart' },
  { label: 'Buy', href: '#buy' },
  { label: 'Jupiter', href: 'https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump' },
];

const ICONS = [
  { url: "https://x.com/PEPEBULLONSOL_", icon: <SiX /> },
  { url: "https://t.me/pepebullsolportal", icon: <SiTelegram /> },
  { url: "https://dexscreener.com/solana/52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump", icon: <LineChart /> },
  { url: "https://pump.fun/coin/52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump", icon: <Rocket /> },
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
    <footer className="w-full section-yellow py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Top: mascot + wordmark */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#1A1A1A] hard-shadow-black">
            <img src={mascotImg} alt="$PEPEBULL" className="w-full h-full object-cover object-top" />
          </div>
          <span className="font-clash text-4xl font-bold text-[#1A1A1A]">$PEPEBULL</span>
        </div>

        {/* Nav grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 w-full max-w-2xl">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="bg-white border-2 border-[#1A1A1A] hard-shadow-black rounded-xl py-3 px-4 text-center font-syne font-bold text-[#1A1A1A] hover-intensify active-scale"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mb-12 flex-wrap justify-center">
          {ICONS.map((item, i) => (
            <a 
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-xl hover:scale-110 transition-transform"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Contract Address */}
        <div className="mb-16 w-full max-w-md">
          <div className="bg-white rounded-xl border-2 border-[#1A1A1A] hard-shadow-black p-4 flex items-center justify-between gap-4">
            <span className="font-bricolage text-[#1A1A1A] font-bold truncate flex-1 text-sm md:text-base">
              {contractAddress}
            </span>
            <button 
              onClick={handleCopy}
              className="p-2 rounded-lg bg-[#E84040] text-white border-2 border-[#1A1A1A] hover-intensify active-scale flex-shrink-0"
              title="Copy Contract Address"
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-[#1A1A1A] text-sm text-center font-inter max-w-3xl leading-relaxed mb-6 font-medium">
          $PEPEBULL is a community meme coin with no intrinsic value or expectation of financial return. No formal team, no roadmap, no utility. Not financial advice. Highly volatile. Entertainment purposes only. Do your own research.
        </p>

        {/* Copyright */}
        <p className="text-[#1A1A1A] text-sm font-sora font-bold">
          © 2026 $PEPEBULL. Built on Solana.
        </p>
      </div>
    </footer>
  );
}