import { useState, useEffect } from 'react';

export interface DexscreenerData {
  priceUsd: string;
  volume24h: number;
  liquidityUsd: number;
  buys24h: number;
  sells24h: number;
}

const CA = '52hneKeDvX3QMpysYXERquicq3QXxfVChqsEtYaLpump';

export function useDexscreener() {
  const [data, setData] = useState<DexscreenerData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${CA}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();

      let pair = json.pairs?.[0];

      if (!pair && json.pair) {
        pair = json.pair;
      }

      if (pair) {
        setData({
          priceUsd: pair.priceUsd ?? '0',
          volume24h: pair.volume?.h24 ?? 0,
          liquidityUsd: pair.liquidity?.usd ?? 0,
          buys24h: pair.txns?.h24?.buys ?? 0,
          sells24h: pair.txns?.h24?.sells ?? 0,
        });
      } else {
        setError('No pair data');
      }
    } catch (err) {
      console.error('Failed to fetch dexscreener data', err);
      setError('Network error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return { data, isLoading, error, refetch: fetchStats };
}
