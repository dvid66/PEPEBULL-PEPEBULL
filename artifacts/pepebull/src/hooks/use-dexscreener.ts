import { useState, useEffect } from 'react';

export interface DexscreenerData {
  priceUsd: string;
  volume24h: number;
  liquidityUsd: number;
  buys24h: number;
  sells24h: number;
}

export function useDexscreener() {
  const [data, setData] = useState<DexscreenerData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchStats = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('https://api.dexscreener.com/latest/dex/pairs/solana/52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump');
      const json = await res.json();
      if (json.pairs && json.pairs.length > 0) {
        const pair = json.pairs[0];
        setData({
          priceUsd: pair.priceUsd,
          volume24h: pair.volume?.h24 || 0,
          liquidityUsd: pair.liquidity?.usd || 0,
          buys24h: pair.txns?.h24?.buys || 0,
          sells24h: pair.txns?.h24?.sells || 0,
        });
      }
    } catch (err) {
      console.error('Failed to fetch dexscreener data', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return { data, isLoading, refetch: fetchStats };
}
