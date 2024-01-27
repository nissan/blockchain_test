export type CMCTokenInfo = {
  id: number;
  name: string;
  symbol: string;
  logo: string;
  slug: string;
  num_market_pairs: number;
  date_added: Date;
  tags: string[];
  max_supply: number;
  circulating_supply: number;
  total_supply: number;
  infinite_supply: boolean;
  platform: null; // or any specific type if platform can have other types of values
  cmc_rank: number;
  self_reported_circulating_supply: null | number;
  self_reported_market_cap: null | number;
  tvl_ratio: null | number;
  last_updated: string; // or Date if you prefer
  quote: {
      USD: {
          price: number;
          volume_24h: number;
          volume_change_24h: number;
          percent_change_1h: number;
          percent_change_24h: number;
          percent_change_7d: number;
          percent_change_30d: number;
          percent_change_60d: number;
          percent_change_90d: number;
          market_cap: number;
          market_cap_dominance: number;
          fully_diluted_market_cap: number;
          tvl: null | number;
          last_updated: string; // or Date if you prefer
      };
  };
};
