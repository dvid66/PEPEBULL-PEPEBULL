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
    <section className="w-full bg-pepe-deep py-20 px-4 section-bleed relative z-10">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="font-syne text-pepe-amber text-glow-amber text-sm font-bold tracking-widest uppercase mb-6 text-center">
            $PEPEBULL LIVE
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2} className="relative mx-auto w-full max-w-4xl aspect-video rounded-2xl border border-pepe-amber box-glow-amber overflow-hidden shadow-[rgba(251,191,36,0.4)] bg-black group" >
          <div 
            className="absolute inset-0 cursor-pointer"
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
              <button className="w-20 h-20 rounded-full bg-pepe-charcoal/80 backdrop-blur-sm border border-pepe-amber flex items-center justify-center text-pepe-amber active-scale transition-transform box-glow-amber shadow-[rgba(251,191,36,0.4)]">
                {isPlaying ? <Pause size={32} className="fill-current" /> : <Play size={32} className="fill-current ml-2" />}
              </button>
            </div>

            {/* Custom scrubber */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-pepe-charcoal/50">
              <div 
                className="h-full bg-pepe-amber relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-pepe-amber rounded-full shadow-[0_0_8px_rgba(251,191,36,0.8)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
