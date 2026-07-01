import { ScrollReveal } from './ui/animations';
import mainLoreImg from '@assets/gallery-12-candles_1782941761532.jpg';
import sideImg1 from '@assets/gallery-14-cash-call_1782941761475.jpg';
import sideImg2 from '@assets/gallery-09-matrix_1782941761632.jpg';

export function Lore() {
  return (
    <section id="lore" className="w-full bg-pepe-deep py-24 px-4 section-bleed border-y border-pepe-lavender/10 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-syne text-pepe-orchid text-sm font-bold tracking-widest uppercase mb-4">
            THE LORE
          </h2>
          <h3 className="font-instrument italic text-5xl md:text-7xl text-pepe-lavender text-glow-orchid">
            The Bull's Ascent
          </h3>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mb-16">
          <div className="w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden border border-pepe-lavender box-glow-orchid shadow-[rgba(217,70,239,0.3)]">
            <img 
              src={mainLoreImg} 
              alt="Suited bull at candlestick table" 
              className="w-full h-full object-cover object-[center_30%]"
            />
          </div>
        </ScrollReveal>

        <div className="prose prose-invert prose-lg md:prose-xl font-instrument max-w-none text-pepe-white/90 space-y-8">
          
          <ScrollReveal>
            <p>
              It started from nothing. No VC backing, no private presale, no insider allocation. Just a single green candle piercing through a sea of red, a beacon of raw momentum in a market that had forgotten how to run.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <img 
              src={sideImg1} 
              alt="Taking calls" 
              className="w-48 h-48 md:w-64 md:h-64 object-cover float-left mr-8 mb-4 rounded-xl border border-pepe-lavender box-glow-orchid hover:scale-[1.02] transition-transform duration-300"
            />
            <p>
              The first real hold through volatility tested the herd. While the weak hands took calls and looked for exits, the Green Bull kept accumulating. They said the chart was overextended. They said the top was in. But the Green Bull doesn't read the news; it writes the tape.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <img 
              src={sideImg2} 
              alt="Matrix green code" 
              className="w-48 h-48 md:w-64 md:h-64 object-cover float-right ml-8 mb-4 rounded-xl border border-pepe-lavender box-glow-orchid hover:scale-[1.02] transition-transform duration-300"
            />
            <p>
              An empire built purely off refusing to sell into red. Every dip eaten, every resistance line shattered. The suit is tailored, the posture is relaxed, and the horns are sharp. We follow the green code.
            </p>
          </ScrollReveal>
          
          {/* clear floats */}
          <div className="clear-both"></div>

        </div>
      </div>
    </section>
  );
}
