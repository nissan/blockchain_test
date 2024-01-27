"use client"
import { CMCTokenInfo } from "@/data/cmcTokenInfo";
import TokenInfoTable from "../components/token-info-table";
import { mockData } from "@/data/mockData";
import { useTokensStore } from "@/data/store";
import { Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { tokens, addToken, removeToken, addFavToken, favTokenIds } = useTokensStore();
  useEffect(() => {
    setLoading(true);
    const fetchLogo = async (symbol: string) => {
      const response = await fetch(`api/coinmarketcap/info?symbol=${symbol}`)
      const json = await response.json();
      const jsonData = json.data;
      const logo = jsonData.data[symbol].logo;
      return logo;

    }
    const fetchData = async () => {
      try {
        setLoading(true); // Begin loading
        const limit="10";
        const response = await fetch(`/api/coinmarketcap/listing?limit=${limit}`,
          {
            method: 'GET', // Fetch API method
          });
        const jsonData = await response.json();
        const data = jsonData.data.data;
        if (data) {
          data.forEach(async (cmcToken: CMCTokenInfo) => {
            const {
              id,
              cmc_rank,
              name,
              symbol,
              quote,
              circulating_supply,
              total_supply,
              max_supply,
              num_market_pairs,
            } = cmcToken;

            cmcToken.logo = await fetchLogo(cmcToken.symbol);



            if (tokens.find(token => token.id === cmcToken.id)) {
              // assume new data is more updated than the current data
              // so remove the old one and add again
              removeToken(cmcToken.id)
            }
            addToken(cmcToken);
          })
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
        // Optionally, update state to indicate error, show error messages, etc.
      } finally {
        setLoading(false);
        setLoaded(true);
        // End loading
      }
    };
    fetchData();

  }, [])
  return (
    <>
      {tokens.length > 0 &&
        <>
          <TokenInfoTable tokens={tokens} />
        </>
      }
      {tokens.length === 0 && loading && <div>Loading...</div>}
      {tokens.length === 0 && !loading && loaded && <div>No data found</div>}
      <Link href="/my-tokens">View My Tokens</Link>
    </>
  );
}
