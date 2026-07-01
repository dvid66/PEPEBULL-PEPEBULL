import { ScrollReveal } from './ui/animations';
import { SiX, SiTelegram } from 'react-icons/si';
import { LineChart, Rocket } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    label: "Telegram",
    url: "https://t.me/pepebullsolportal",
    icon: <SiTelegram className="text-2xl" />,
    bgColor: "bg-[#22D3EE]",
    textColor: "text-[#1A1A1A]"
  },
  {
    label: "X / Twitter",
    url: "https://x.com/PEPEBULLONSOL_",
    icon: <SiX className="text-2xl" />,
    bgColor: "bg-white",
    textColor: "text-[#1A1A1A]"
  },
  {
    label: "X Community",
    url: "https://x.com/i/communities/2033671038945329619",
    icon: <SiX className="text-2xl" />,
    bgColor: "bg-[#4ADE80]",
    textColor: "text-[#1A1A1A]"
  },
  {
    label: "Dexscreener",
    url: "https://dexscreener.com/solana/52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump",
    icon: <LineChart className="w-6 h-6" />,
    bgColor: "bg-[#E84040]",
    textColor: "text-white"
  },
  {
    label: "Pump.fun",
    url: "https://pump.fun/coin/52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump",
    icon: <Rocket className="w-6 h-6" />,
    bgColor: "bg-[#FBBF24]",
    textColor: "text-[#1A1A1A]"
  }
];

export function SocialLinks() {
  return (
    <section className="w-full section-yellow py-24 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <ScrollReveal>
          <h2 className="font-bebas text-5xl md:text-7xl text-[#1A1A1A] mb-12 tracking-wide uppercase text-center">
            Join the Herd
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {SOCIAL_LINKS.map((link, idx) => (
            <ScrollReveal key={link.label} delay={idx * 0.1}>
              <a 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-4 w-full px-8 py-6 rounded-2xl border-2 border-[#1A1A1A] hard-shadow-black transition-transform hover:-translate-y-1 active-scale ${link.bgColor} ${link.textColor}`}
              >
                {link.icon}
                <span className="font-jakarta font-bold text-xl tracking-wide">{link.label}</span>
              </a>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}