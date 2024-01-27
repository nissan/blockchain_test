"use client";
import Image from "next/image";
import TokenInfoTable from "../components/token-info-table";
import { useTokensStore } from "@/data/store";
import { Link } from "@chakra-ui/react";
import { useState } from "react";

export default function MyTokens() {
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const { tokens, favTokenIds, removeFavToken } = useTokensStore();
    const getFavTokens = () => {
        const favTokens = tokens.filter((token) => favTokenIds.includes(token.id));
        console.log(JSON.stringify(tokens));
        console.log(JSON.stringify(favTokenIds));
        console.log(JSON.stringify(favTokens));
        return favTokens;
      };
    return (
        <>
            <TokenInfoTable tokens={getFavTokens()} />
            <Link href="/">View All Tokens</Link>
        </>
    );
}
