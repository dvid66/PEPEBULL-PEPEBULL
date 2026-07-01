import { ScrollReveal } from './ui/animations';

const STEPS = [
  {
    num: "01",
    title: "Get a Wallet",
    desc: "Set up Phantom wallet on your browser or phone.",
    color: "#22D3EE"
  },
  {
    num: "02",
    title: "Get SOL",
    desc: "Fund your wallet with Solana (SOL) via any major exchange.",
    color: "#A3E635"
  },
  {
    num: "03",
    title: "Swap on Jupiter",
    desc: "Connect to Jupiter, paste the CA, and set slippage to 1-3%.",
    color: "#E84040"
  },
  {
    num: "04",
    title: "Hold",
    desc: "Stay steady while the chart does its thing. Ignore the noise.",
    color: "#FBBF24"
  }
];

export function HowToBuy() {
  return (
    <section id="buy" className="w-full section-indigo py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-bebas text-6xl md:text-8xl text-[#FBBF24] text-stroke-amber tracking-wide">
            HOW TO BUY
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => (
            <ScrollReveal key={step.num} delay={idx * 0.15}>
              <div 
                className="h-full bg-[#2D1F4A] p-8 rounded-xl border-l-4 transition-transform hover:-translate-y-1"
                style={{ borderLeftColor: step.color }}
              >
                <div className="font-space text-5xl font-bold mb-6 text-[#FBBF24]">
                  {step.num}
                </div>
                <h3 className="font-jakarta text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="font-inter text-white/70 leading-relaxed text-lg">
                  {step.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}