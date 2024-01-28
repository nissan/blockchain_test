"use client"
import { CMCTokenInfo } from "@/data/cmcTokenInfo";
import TokenInfoTable from "../components/token-info-table";
import { useTokensStore } from "@/data/store";
import { Center, Heading, Button, Link, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { tokens, addToken, removeToken, userId, setUserId, setFavTokenIds } = useTokensStore();
  useEffect(() => {
    setLoading(true);
    const fetchFavTokenIds = async (userId: string) => {
      return [] as number[];
    }
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
        const limit = "15";
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
          if (userId && userId.length>0) {
            const storedFavTokenIds = await fetchFavTokenIds(userId);
            if (storedFavTokenIds) {
              setFavTokenIds(storedFavTokenIds);
            }
          }
          if (!userId || userId == undefined) {
            setUserId(uuidv4());
          }
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
      <Center bg='purple.700' h='100px' color='white'>
        <Heading pr="5">
          Top Tokens By MarketCap
        </Heading>
        {" "}
        <Button colorScheme='blue'><Link href="/my-tokens">View My Favourite Tokens</Link></Button>
      </Center>

      {tokens.length > 0 &&
        <>
          <TokenInfoTable tokens={tokens} />
        </>
      }
      {tokens.length === 0 && loading &&
        <>
          <table>
            <tr>
              <td><SkeletonText width="50px" /></td>
              <td><SkeletonCircle size='10' /></td>
              <td><SkeletonText width="200px" /></td>
              <td><SkeletonText width="200px" /></td>
            </tr>
          </table>
        </>
      }
      {tokens.length === 0 && !loading && loaded && <div>No data found</div>}

    </>
  );
}
