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
    const favTokens = tokens.filter((token) => favTokenIds.includes(token.id));
    return (
        <>
            {favTokens.length > 0 ?
                <>
                    <TokenInfoTable tokens={favTokens} />
                </>
                :
                <div>No favourites data found</div>
            }

            <Link href="/">View All Tokens</Link>
        </>
    );
}

