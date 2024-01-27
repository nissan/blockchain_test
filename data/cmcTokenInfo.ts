export type CMCTokenInfo = {
    id: number,
    cmc_rank: number,
    name: string,
    icon: string,
    symbol: string,
    market_cap: number,
    price: number,
    circulating_supply: number,
    total_supply: number|null, ////some tokens like ETH have no max supply so concept of "total" supply won't apply
    max_supply: number|null, //some tokens like ETH have no max supply
    num_market_pairs: number,
    volume_24h: number,
    percent_change_1h: number,
    percent_change_24h: number,
    percent_change_7d: number
  }