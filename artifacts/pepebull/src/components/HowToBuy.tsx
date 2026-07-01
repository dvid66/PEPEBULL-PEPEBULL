import { ScrollReveal } from './ui/animations';

const STEPS = [
  {
    num: '01',
    title: 'Get a Wallet',
    desc: 'Download Phantom wallet on your phone or browser. Free. Takes two minutes.',
    color: '#22D3EE',
  },
  {
    num: '02',
    title: 'Get SOL',
    desc: 'Fund your Phantom wallet with Solana (SOL) from any major exchange.',
    color: '#A3E635',
  },
  {
    num: '03',
    title: 'Swap on Jupiter',
    desc: 'Go to jup.ag, paste the contract address, and swap. Set slippage 1–3%.',
    color: '#E84040',
  },
  {
    num: '04',
    title: 'Hold',
    desc: 'Stay steady. The bull that doesn\'t blink when the chart gets loud.',
    color: '#FBBF24',
  },
];

export function HowToBuy() {
  return (
    <section id="buy" className="w-full section-brown py-24 px-4">
      <div className="max-w-7xl mx-auto">

        <ScrollReveal className="mb-16">
          <div
            className="inline-block bg-[#F5E8D3] border-2 border-[#1C0A00] rounded-full px-4 py-1 font-syne text-[#1C0A00] text-sm font-bold tracking-widest uppercase mb-4"
            style={{ boxShadow: '3px 3px 0 #FBBF24' }}
          >
            HOW TO BUY
          </div>
          <h2
            className="font-bebas text-6xl md:text-8xl lg:text-9xl text-[#F5E8D3] tracking-wide leading-none"
            style={{ textShadow: '4px 4px 0 #FBBF24' }}
          >
            FOUR STEPS.<br />THAT'S IT.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => (
            <ScrollReveal key={step.num} delay={idx * 0.12}>
              <div
                className="bg-[#F5E8D3] rounded-2xl border-2 border-[#1A1A1A] p-8 transition-transform duration-200 hover:-translate-y-1"
                style={{ boxShadow: `5px 5px 0 ${step.color}` }}
              >
                {/* Step number badge */}
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#1A1A1A] mb-5 font-bebas text-xl text-[#1A1A1A]"
                  style={{ backgroundColor: step.color, boxShadow: '3px 3px 0 #1A1A1A' }}
                >
                  {step.num}
                </div>

                <h3 className="font-bebas text-3xl text-[#1A1A1A] tracking-wide mb-3">
                  {step.title}
                </h3>
                <p className="font-inter text-[#1A1A1A]/70 leading-relaxed text-base">
                  {step.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA row */}
        <ScrollReveal delay={0.5} className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-[#4ADE80] border-2 border-[#1A1A1A] font-jakarta font-bold text-[#1A1A1A] text-lg transition-transform hover:-translate-y-1 active:translate-y-0"
            style={{ boxShadow: '4px 4px 0 #1A1A1A' }}
          >
            Buy on Jupiter →
          </a>
          <a
            href="https://pump.fun/coin/52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-white border-2 border-[#1A1A1A] font-jakarta font-bold text-[#1A1A1A] text-lg transition-transform hover:-translate-y-1 active:translate-y-0"
            style={{ boxShadow: '4px 4px 0 #1A1A1A' }}
          >
            Buy on Pump.fun
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
