import { useEffect, useState } from 'react';
import mascotImg from '@assets/gallery-16-press_1782941761361.jpg';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // determine active section
      const sections = ['home', 'lore', 'gallery', 'chart', 'buy'];
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-pepe-lime/20 ${
        isScrolled ? 'bg-pepe-charcoal/80 backdrop-blur-md' : 'bg-pepe-charcoal/40 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-3 group active-scale cursor-pointer">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-pepe-lime box-glow-lime transition-all duration-300 group-hover:scale-110">
              <img src={mascotImg} alt="$PEPEBULL Mascot" className="w-full h-full object-cover object-top" />
            </div>
            <span className="font-clash text-xl text-pepe-white text-glow-lime hidden sm:block">$PEPEBULL</span>
          </button>
          
          <div className="hidden md:flex items-center gap-6 font-jakarta font-bold text-sm tracking-wide">
            {['Home', 'Lore', 'Gallery', 'Chart', 'Buy'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`transition-colors duration-200 relative ${
                  activeSection === item.toLowerCase() ? 'text-pepe-lime' : 'text-pepe-white hover:text-pepe-mint'
                }`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-pepe-lime box-glow-lime rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        <a
          href="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full font-jakarta font-bold text-pepe-cyan border border-pepe-cyan animate-pulse-glow hover-intensify shadow-[rgba(34,211,238,0.4)] active-scale bg-pepe-cyan/5"
        >
          Buy $PEPEBULL
        </a>
      </div>
    </nav>
  );
}
