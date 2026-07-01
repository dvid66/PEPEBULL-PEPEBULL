import { useEffect, useState } from 'react';
import mascotImg from '@assets/gallery-16-press_1782941761361.jpg';

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
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
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3 pointer-events-none">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl border-[2.5px] border-[#E84040] hard-shadow-red px-4 py-2 flex items-center justify-between pointer-events-auto active-scale transition-transform duration-200">
        {/* Left: mascot circle + $PEPEBULL wordmark */}
        <button onClick={() => scrollTo('home')} className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#4ADE80] hard-shadow-green transition-transform duration-300 group-hover:scale-110">
            <img src={mascotImg} alt="$PEPEBULL Mascot" className="w-full h-full object-cover object-top" />
          </div>
          <span className="font-clash text-xl font-bold text-[#1A1A1A] hidden sm:block">$PEPEBULL</span>
        </button>
        
        {/* Center: nav links in dark ink */}
        <div className="hidden md:flex gap-6 font-jakarta font-bold text-[#1A1A1A] text-sm">
          {['Home', 'Lore', 'Gallery', 'Chart', 'Buy'].map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <button
                key={item}
                onClick={() => scrollTo(id)}
                className={`relative hover:text-[#E84040] transition-colors`}
              >
                {item}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#E84040] rounded-full" />
                )}
              </button>
            )
          })}
        </div>
        
        {/* Right: Solid green buy button */}
        <a
          href="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#4ADE80] text-[#1A1A1A] font-jakarta font-bold px-5 py-2 rounded-full border-2 border-[#1A1A1A] hard-shadow-black text-sm hover-intensify transition-transform"
        >
          Buy $PEPEBULL
        </a>
      </div>
    </nav>
  );
}