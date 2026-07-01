import { useRef, useState } from 'react';
import videoSrc from '@assets/video_1782941717983.mp4';
import { ScrollReveal } from './ui/animations';
import { Play, Pause } from 'lucide-react';

export function VideoWidget() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((current / duration) * 100);
    }
  };

  return (
    <section className="w-full section-cream py-20 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="font-bebas text-5xl md:text-6xl text-[#1A1A1A] text-stroke-cyan text-center mb-10 tracking-wide">
            PEPEBULL LIVE
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2} className="relative mx-auto w-full max-w-4xl group">
          <div className="rounded-2xl border-2 border-[#1A1A1A] hard-shadow-cyan overflow-hidden bg-black">
            {/* Window header bar */}
            <div className="bg-[#F5E8D3] border-b-2 border-[#1A1A1A] px-4 py-2 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#E84040] border border-[#1A1A1A]" />
                <div className="w-3 h-3 rounded-full bg-[#FBBF24] border border-[#1A1A1A]" />
                <div className="w-3 h-3 rounded-full bg-[#9CA3AF] border border-[#1A1A1A]" />
              </div>
              <span className="font-jakarta font-bold text-[#1A1A1A] text-sm">$PEPEBULL TV</span>
              <div className="w-16" /> {/* spacer */}
            </div>
            {/* Video content */}
            <div 
              className="bg-black relative aspect-video cursor-pointer"
              onClick={togglePlay}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <video
                ref={videoRef}
                src={videoSrc}
                className="w-full h-full object-cover"
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
                playsInline
              />
              
              <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 flex items-center justify-center ${!isPlaying || isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <button className="w-20 h-20 rounded-full bg-white/90 border-2 border-[#1A1A1A] flex items-center justify-center text-[#1A1A1A] active-scale transition-transform hard-shadow-black">
                  {isPlaying ? <Pause size={32} className="fill-current" /> : <Play size={32} className="fill-current ml-2" />}
                </button>
              </div>

              {/* Custom scrubber */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#1A1A1A]">
                <div 
                  className="h-full bg-[#E84040] relative"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}