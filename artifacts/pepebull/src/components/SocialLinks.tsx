import { ScrollReveal } from './ui/animations';
import { SiX, SiTelegram } from 'react-icons/si';
import { ExternalLink, LineChart, Rocket } from 'lucide-react'; // Using Lucide for missing icons

const SOCIAL_LINKS = [
  {
    label: "X / Twitter",
    url: "https://x.com/PEPEBULLONSOL_",
    icon: <SiX className="text-xl" />,
    color: "cyan"
  },
  {
    label: "X Community",
    url: "https://x.com/i/communities/2033671038945329619",
    icon: <SiX className="text-xl" />,
    color: "mint"
  },
  {
    label: "Telegram",
    url: "https://t.me/pepebullsolportal",
    icon: <SiTelegram className="text-xl" />,
    color: "lavender"
  },
  {
    label: "Dexscreener",
    url: "https://dexscreener.com/solana/52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump",
    icon: <LineChart className="w-5 h-5" />,
    color: "lime"
  },
  {
    label: "Pump.fun",
    url: "https://pump.fun/coin/52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump",
    icon: <Rocket className="w-5 h-5" />,
    color: "coral"
  },
  {
    label: "Jupiter",
    url: "https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump",
    icon: <span className="text-xl font-bold rounded-full border border-current w-5 h-5 flex items-center justify-center text-[10px]">J</span>,
    color: "amber"
  }
];

const getColorClasses = (color: string) => {
  const map: Record<string, { border: string, text: string, shadow: string, hover: string }> = {
    cyan: { border: "border-pepe-cyan", text: "text-pepe-cyan", shadow: "box-glow-cyan shadow-[rgba(34,211,238,0.4)]", hover: "hover:bg-pepe-cyan/10" },
    mint: { border: "border-pepe-mint", text: "text-pepe-mint", shadow: "box-glow-mint shadow-[rgba(167,243,208,0.4)]", hover: "hover:bg-pepe-mint/10" },
    lavender: { border: "border-pepe-lavender", text: "text-pepe-lavender", shadow: "box-glow-lavender shadow-[rgba(196,181,253,0.4)]", hover: "hover:bg-pepe-lavender/10" },
    lime: { border: "border-pepe-lime", text: "text-pepe-lime", shadow: "box-glow-lime shadow-[rgba(163,230,53,0.4)]", hover: "hover:bg-pepe-lime/10" },
    coral: { border: "border-pepe-coral", text: "text-pepe-coral", shadow: "box-glow-coral shadow-[rgba(251,113,133,0.4)]", hover: "hover:bg-pepe-coral/10" },
    amber: { border: "border-pepe-amber", text: "text-pepe-amber", shadow: "box-glow-amber shadow-[rgba(251,191,36,0.4)]", hover: "hover:bg-pepe-amber/10" },
  };
  return map[color];
};

export function SocialLinks() {
  return (
    <section className="w-full bg-pepe-deep py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <ScrollReveal>
          <h2 className="font-sora text-3xl font-bold text-pepe-white mb-10 tracking-wide uppercase">
            Join the Herd
          </h2>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 w-full">
          {SOCIAL_LINKS.map((link, idx) => {
            const styles = getColorClasses(link.color);
            return (
              <ScrollReveal key={link.label} delay={idx * 0.1} className="w-full md:w-auto">
                <a 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between md:justify-center gap-4 w-full px-8 py-4 rounded-xl border ${styles.border} ${styles.text} ${styles.shadow} ${styles.hover} transition-all duration-300 hover-intensify active-scale bg-pepe-charcoal/50`}
                >
                  <div className="flex items-center gap-3">
                    {link.icon}
                    <span className="font-jakarta font-bold tracking-wide">{link.label}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 md:hidden opacity-50" />
                </a>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
