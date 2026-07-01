import { ScrollReveal } from './ui/animations';

const STEPS = [
  {
    num: "01",
    title: "Get a Wallet",
    desc: "Set up Phantom wallet on your browser or phone.",
    color: "cyan"
  },
  {
    num: "02",
    title: "Get SOL",
    desc: "Fund your wallet with Solana (SOL) via any major exchange.",
    color: "mint"
  },
  {
    num: "03",
    title: "Swap on Jupiter",
    desc: "Connect to Jupiter, paste the CA, and set slippage to 1-3%.",
    color: "coral"
  },
  {
    num: "04",
    title: "Hold",
    desc: "Stay steady while the chart does its thing. Ignore the noise.",
    color: "amber"
  }
];

const getColorClasses = (color: string) => {
  const map: Record<string, { border: string, text: string, bgGlow: string, shadow: string }> = {
    cyan: { border: "border-pepe-cyan", text: "text-pepe-cyan", bgGlow: "bg-pepe-cyan/5", shadow: "shadow-[rgba(34,211,238,0.2)] hover:shadow-[rgba(34,211,238,0.4)]" },
    mint: { border: "border-pepe-mint", text: "text-pepe-mint", bgGlow: "bg-pepe-mint/5", shadow: "shadow-[rgba(167,243,208,0.2)] hover:shadow-[rgba(167,243,208,0.4)]" },
    coral: { border: "border-pepe-coral", text: "text-pepe-coral", bgGlow: "bg-pepe-coral/5", shadow: "shadow-[rgba(251,113,133,0.2)] hover:shadow-[rgba(251,113,133,0.4)]" },
    amber: { border: "border-pepe-amber", text: "text-pepe-amber", bgGlow: "bg-pepe-amber/5", shadow: "shadow-[rgba(251,191,36,0.2)] hover:shadow-[rgba(251,191,36,0.4)]" },
  };
  return map[color];
};

export function HowToBuy() {
  return (
    <section id="buy" className="w-full bg-pepe-charcoal py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-sora text-4xl md:text-5xl font-bold text-pepe-coral text-glow-coral">
            HOW TO BUY
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => {
            const styles = getColorClasses(step.color);
            return (
              <ScrollReveal key={step.num} delay={idx * 0.15}>
                <div className={`h-full bg-pepe-deep p-8 rounded-2xl border ${styles.border} ${styles.shadow} ${styles.bgGlow} transition-all duration-300 hover:-translate-y-1`}>
                  <div className={`font-sora text-5xl font-bold opacity-80 mb-6 ${styles.text}`}>
                    {step.num}
                  </div>
                  <h3 className="font-jakarta text-xl font-bold text-pepe-white mb-3">
                    {step.title}
                  </h3>
                  <p className="font-inter text-pepe-white/60 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
