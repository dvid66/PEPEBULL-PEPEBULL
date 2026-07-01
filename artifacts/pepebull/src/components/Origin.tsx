import { ScrollReveal } from './ui/animations';
import firstPose from '@assets/gallery-08-first_1782941761873.jpg';

export function Origin() {
  return (
    <section className="w-full bg-pepe-charcoal py-24 px-4 overflow-hidden relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <ScrollReveal className="order-2 lg:order-1">
          <h2 className="font-bubblegum text-4xl md:text-5xl lg:text-6xl text-pepe-amber text-glow-amber mb-6">
            IT STARTED FROM A BULL
          </h2>
          <div className="space-y-6 font-inter text-pepe-white/80 text-lg md:text-xl leading-relaxed">
            <p>
              One bull, one chart, one direction. The whole project traces back to a single moment of conviction before anyone else was paying attention.
            </p>
            <p>
              When the market blinked, the Green Bull held the line. It wasn't about complex tokenomics or empty promises. It was about raw, unfiltered momentum and the refusal to accept anything less than green candles.
            </p>
            <p className="font-semibold text-pepe-white">
              We know we're a joke. We're still going to make you money anyway.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="order-1 lg:order-2 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-pepe-amber rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <img 
              src={firstPose} 
              alt="The Original Bull" 
              className="relative w-full max-w-md aspect-square object-cover rounded-2xl border-2 border-pepe-amber box-glow-amber shadow-[rgba(251,191,36,0.4)]"
            />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
