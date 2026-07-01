import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { VideoWidget } from '@/components/VideoWidget';
import { LiveStats } from '@/components/LiveStats';
import { Origin } from '@/components/Origin';
import { Lore } from '@/components/Lore';
import { Gallery } from '@/components/Gallery';
import { LiveChart } from '@/components/LiveChart';
import { SocialLinks } from '@/components/SocialLinks';
import { HowToBuy } from '@/components/HowToBuy';
import { Footer } from '@/components/Footer';

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="w-full">
      <Navigation />
      <Hero />
      <VideoWidget />
      <LiveStats />
      <Origin />
      <Lore />
      <Gallery />
      <LiveChart />
      <SocialLinks />
      <HowToBuy />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Home />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;