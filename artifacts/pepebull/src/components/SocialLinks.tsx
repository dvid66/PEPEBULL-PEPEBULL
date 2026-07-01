import { ScrollReveal } from './ui/animations';

/* ── Official brand SVG icons ─────────────────────────────────────────── */

function XIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.261 5.635 5.903-5.635zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function TelegramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
    </svg>
  );
}

function DexscreenerIcon({ size = 24 }: { size?: number }) {
  // Dexscreener official SVG mark
  return (
    <svg width={size} height={size} viewBox="0 0 252 300" fill="currentColor">
      <path d="M151.818 106.866c9.177-4.576 20.854-11.312 32.545-20.541 2.465-1.917 4.889-3.915 7.28-5.99l-12.347 75.596c-4.9 11.168-11.982 21.965-21.482 31.041L151.818 106.866zM108.143 33.006l24.634 151.068c-3.713 1.986-7.394 3.675-10.9 5.13L78.282 22.88c9.38 1.522 19.8 5.363 29.861 10.126zM81.846 22.412L110.6 189.786c-4.786 1.343-9.247 2.05-13.11 2.05H97.49L67.2 15.986c4.7 1.24 9.47 3.337 14.646 6.426zM184.69 80.196c-14.647 13.547-33.21 26.26-51.44 35.276L108.3 22.99c7.826-.072 18.063 3.47 28.99 9.68l-.003-.003 47.403 47.529zM126.782 151.001l13.57-83.123 49.717 49.847-14.547 89.099c-3.655 2.517-7.393 4.926-11.197 7.148L126.782 151z" />
      <path d="M126 0C56.413 0 0 56.413 0 126s56.413 126 126 126 126-56.413 126-126S195.587 0 126 0zm0 240c-62.915 0-114-51.085-114-114S63.085 12 126 12s114 51.085 114 114-51.085 114-114 114z" />
    </svg>
  );
}

function PumpFunIcon({ size = 24 }: { size?: number }) {
  // Pump.fun — "P" mark in their style
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="currentColor">
      <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="4" />
      <text
        x="50"
        y="67"
        textAnchor="middle"
        fontSize="56"
        fontWeight="900"
        fontFamily="Arial Black, sans-serif"
        fill="currentColor"
      >
        P
      </text>
    </svg>
  );
}

function JupiterIcon({ size = 24 }: { size?: number }) {
  // Jupiter (JUP) — their cat/swirl orbital logo approximation
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="currentColor">
      {/* Orbital ring */}
      <ellipse cx="50" cy="50" rx="46" ry="18" fill="none" stroke="currentColor" strokeWidth="5" transform="rotate(-35 50 50)" />
      {/* Planet */}
      <circle cx="50" cy="50" r="14" fill="currentColor" />
      {/* Small moon */}
      <circle cx="82" cy="32" r="6" fill="currentColor" />
    </svg>
  );
}

/* ── Data ─────────────────────────────────────────────────────────────── */

const SOCIAL_LINKS = [
  {
    label: 'X (Twitter)',
    url: 'https://x.com/PEPEBULLONSOL_',
    icon: <XIcon size={26} />,
    bg: '#000000',
    text: '#FFFFFF',
    shadow: '#333333',
  },
  {
    label: 'X Community',
    url: 'https://x.com/i/communities/2033671038945329619',
    icon: <XIcon size={26} />,
    bg: '#1DA1F2',
    text: '#FFFFFF',
    shadow: '#0d6ea8',
  },
  {
    label: 'Telegram',
    url: 'https://t.me/pepebullsolportal',
    icon: <TelegramIcon size={26} />,
    bg: '#229ED9',
    text: '#FFFFFF',
    shadow: '#0d6ea8',
  },
  {
    label: 'Dexscreener',
    url: 'https://dexscreener.com/solana/52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump',
    icon: <DexscreenerIcon size={26} />,
    bg: '#0D0D0D',
    text: '#00FF88',
    shadow: '#00FF88',
  },
  {
    label: 'Pump.fun',
    url: 'https://pump.fun/coin/52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump',
    icon: <PumpFunIcon size={26} />,
    bg: '#7B2BFF',
    text: '#FFFFFF',
    shadow: '#3D00CC',
  },
  {
    label: 'Jupiter',
    url: 'https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump',
    icon: <JupiterIcon size={26} />,
    bg: '#C7F284',
    text: '#1A1A1A',
    shadow: '#7DB200',
  },
];

/* ── Component ────────────────────────────────────────────────────────── */

export function SocialLinks() {
  return (
    <section className="w-full section-yellow py-24 px-4">
      <div className="max-w-7xl mx-auto">

        <ScrollReveal className="mb-4">
          <div
            className="inline-block bg-[#1A1A1A] border-2 border-[#1A1A1A] rounded-full px-4 py-1 font-syne text-[#F6C90E] text-sm font-bold tracking-widest uppercase mb-4"
            style={{ boxShadow: '3px 3px 0 #1A1A1A' }}
          >
            COMMUNITY
          </div>
          <h2
            className="font-bebas text-6xl md:text-8xl lg:text-9xl text-[#1A1A1A] tracking-wide"
            style={{ textShadow: '4px 4px 0 #1C0A00' }}
          >
            JOIN THE HERD
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {SOCIAL_LINKS.map((link, idx) => (
            <ScrollReveal key={link.label} delay={idx * 0.08}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full px-7 py-5 lg:px-10 lg:py-6 rounded-2xl border-2 border-[#1A1A1A] transition-transform duration-200 hover:-translate-y-1 active:translate-y-0"
                style={{
                  backgroundColor: link.bg,
                  color: link.text,
                  boxShadow: `5px 5px 0 #1A1A1A`,
                }}
              >
                <span className="flex-shrink-0">{link.icon}</span>
                <span className="font-jakarta font-bold text-xl tracking-wide">{link.label}</span>
                <span className="ml-auto text-xl opacity-60">→</span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
