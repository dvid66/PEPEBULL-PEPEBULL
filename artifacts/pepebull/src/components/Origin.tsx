import { ScrollReveal } from './ui/animations';
import firstPose from '@assets/gallery-08-first_1782941761873.jpg';

export function Origin() {
  return (
    <section className="w-full section-cream py-24 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <ScrollReveal className="order-2 lg:order-1">
          <h2 className="font-fredoka text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#1A1A1A] text-stroke-amber mb-6 leading-tight">
            IT STARTED FROM A BULL
          </h2>
          <div className="space-y-6 font-inter text-[#1A1A1A] text-lg md:text-xl leading-relaxed">
            <p>
              One bull, one chart, one direction. The whole project traces back to a single moment of conviction before anyone else was paying attention.
            </p>
            <p>
              When the market blinked, the Green Bull held the line. It wasn't about complex tokenomics or empty promises. It was about raw, unfiltered momentum and the refusal to accept anything less than green candles.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            <img 
              src={firstPose} 
              alt="The Original Bull" 
              className="relative w-full max-w-md lg:max-w-lg aspect-square object-cover rounded-2xl border-2 border-[#1A1A1A] hard-shadow-amber bg-white p-2"
            />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}