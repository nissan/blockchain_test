import { CMCTokenInfo } from "@/data/cmcTokenInfo"
import TokenInfo from "./token-info"

type TokenInfoTableProps = {
    tokens: CMCTokenInfo[]
}
export const TokenInfoTable: React.FC<TokenInfoTableProps> = ({ tokens }) => {
    return (
        <>
            {tokens.map((token) => (
                <div key={token.id}>
                    <TokenInfo
                        rank={token.cmc_rank}
                        icon={token.icon}
                        symbol={token.symbol}
                        price={token.price}
                        marketCap={token.market_cap.toString()}
                        percentage_change={token.percent_change_1h}
                    />
                </div>
            ))}
        </>
    )
}

export default TokenInfoTable;
