import { CMCTokenInfo } from "./cmcTokenInfo";

export const bitcoinInfo: CMCTokenInfo = {
    id: 1,
    cmc_rank: 1,
    name: "Bitcoin",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    symbol: "BTC",
    market_cap: 56000000000,
    price: 26123.21, // Example price in USD
    circulating_supply: 19200000,
    total_supply: 21000000,
    max_supply: 21000000,
    num_market_pairs: 3,
    volume_24h: 510.21,
    percent_change_1h: -0.5,
    percent_change_24h: 2.0,
    percent_change_7d: 5.0

  };

  export const ethereumInfo: CMCTokenInfo = {
    id: 2,
    cmc_rank: 2,
    name: "Ethereum",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
    symbol: "BTC",
    market_cap: 56000000000,
    price: 26123.21,
    circulating_supply: 19200000,
    total_supply: 21000000,
    max_supply: 21000000,
    num_market_pairs: 3,
    volume_24h: 510.21,
    percent_change_1h: -0.5,
    percent_change_24h: 2.0,
    percent_change_7d: 5.0
  };

  export const mockData:CMCTokenInfo[] = [
    {
      id: 1,
      cmc_rank:1,
      symbol: "BTC",
      name: "Bitcoin",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      price: 40000,
      volume_24h: 20000000000,
      market_cap: 750000000000,
      percent_change_1h: 0.1,
      percent_change_24h: -0.5,
      percent_change_7d: 2.0,
      circulating_supply: 18750000,
      total_supply: 21000000,
      max_supply: 21000000,
      num_market_pairs: 3,


    },
    {
      id:2,
      symbol: "ETH",
      name: "Ethereum",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
      cmc_rank: 2,
      price: 2500,
      volume_24h: 10000000000,
      market_cap: 300000000000,
      percent_change_1h: 0.2,
      percent_change_24h: 1.0,
      percent_change_7d: 5.0,
      circulating_supply: 115000000,
      total_supply: null,
      max_supply: null,
      num_market_pairs: 3,

    },
    {
      id:3,
      symbol: "BCH",
      name: "Bitcoin Cash",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png",
      cmc_rank: 10,
      price: 600,
      volume_24h: 1500000000,
      market_cap: 10000000000,
      percent_change_1h: -0.2,
      percent_change_24h: -1.5,
      percent_change_7d: -3.0,
      circulating_supply: 18700000,
      total_supply: 21000000,
      max_supply: 21000000,
      num_market_pairs: 3,
    }
  ]
  