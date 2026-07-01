import { ScrollReveal } from './ui/animations';
import mainLoreImg from '@assets/gallery-12-candles_1782941761532.jpg';
import sideImg1 from '@assets/gallery-14-cash-call_1782941761475.jpg';
import sideImg2 from '@assets/gallery-09-matrix_1782941761632.jpg';

export function Lore() {
  return (
    <section id="lore" className="w-full section-brown py-24 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        <ScrollReveal className="text-center mb-16">
          <div className="inline-block bg-[#F5E8D3] border-2 border-[#1C0A00] rounded-full px-4 py-1 font-syne text-[#1C0A00] text-sm font-bold tracking-widest uppercase mb-6 hard-shadow-amber">
            THE LORE
          </div>
          <h3 className="font-bebas text-6xl md:text-8xl text-[#F5E8D3] text-stroke-orchid tracking-wide">
            The Bull's Ascent
          </h3>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mb-16">
          <div className="w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden border-4 border-[#F5E8D3] hard-shadow-orchid bg-white">
            <img 
              src={mainLoreImg} 
              alt="Suited bull at candlestick table" 
              className="w-full h-full object-cover object-[center_30%]"
            />
          </div>
        </ScrollReveal>

        <div className="prose prose-lg md:prose-xl font-instrument max-w-none text-[#F5E8D3] space-y-10">
          
          <ScrollReveal>
            <p className="italic">
              It started from nothing. No VC backing, no private presale, no insider allocation. Just a single green candle piercing through a sea of red, a beacon of raw momentum in a market that had forgotten how to run.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="float-left mr-8 mb-4 w-48 h-48 md:w-64 md:h-64 rounded-xl border-2 border-[#1A1A1A] hard-shadow-cyan bg-[#F5E8D3] p-2 hover:scale-[1.02] transition-transform duration-300">
              <img 
                src={sideImg1} 
                alt="Taking calls" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="italic pt-4">
              The first real hold through volatility tested the herd. While the weak hands took calls and looked for exits, the Green Bull kept accumulating. They said the chart was overextended. They said the top was in. But the Green Bull doesn't read the news; it writes the tape.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="float-right ml-8 mb-4 w-48 h-48 md:w-64 md:h-64 rounded-xl border-2 border-[#1A1A1A] hard-shadow-orchid bg-[#F5E8D3] p-2 hover:scale-[1.02] transition-transform duration-300">
              <img 
                src={sideImg2} 
                alt="Matrix green code" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="italic pt-4">
              An empire built purely off refusing to sell into red. Every dip eaten, every resistance line shattered. The suit is tailored, the posture is relaxed, and the horns are sharp. We follow the green code.
            </p>
          </ScrollReveal>
          
          <div className="clear-both"></div>

        </div>
      </div>
    </section>
  );
}