"use client";
import Image from "next/image";
import TokenInfoTable from "./components/token-info-table";
import { mockData } from "@/data/mockData";
import { useAllTokensStore } from "@/data/store";
import { Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { tokens, addToken, removeToken } = useAllTokensStore();
  useEffect(() => {
    setLoading(true);
    mockData.forEach(data => {
      if (tokens.find(token => token.id===data.id)){
        //assume the new data is more updated than the old data for now, 
        // so remove the old one and add again
        removeToken(data.id);
      }
      addToken(data)
    });
    setLoading(false);
    setLoaded(true);
  }, [loaded])
  return (
    <>
      {tokens.length>0 &&
        <>
          <TokenInfoTable tokens={tokens} />
        </>
      }
      {tokens.length===0 && loading && <div>Loading...</div>}
      {tokens.length===0 && !loading && loaded && <div>No data found</div>}
      <Link href="/my-tokens">View My Tokens</Link>
    </>
  );
}
