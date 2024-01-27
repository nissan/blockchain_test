import { CMCTokenInfo } from "@/data/cmcTokenInfo"
import TokenInfo from "./token-info"
import { Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react"

type TokenInfoTableProps = {
    tokens: CMCTokenInfo[]
}
export const TokenInfoTable: React.FC<TokenInfoTableProps> = ({ tokens }) => {
    return (
        <>
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>Token List</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Favourite</Th>
                            <Th>Rank</Th>
                            <Th>Stats</Th>
                            <Th>Price</Th>
                            <Th>% Change</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {tokens.map((token) => (
                            <Tr key={token.id}>
                                <TokenInfo
                                    id = {token.id}
                                    rank={token.cmc_rank}
                                    logo={token.logo}
                                    symbol={token.symbol}
                                    price={token.quote.USD.price}
                                    market_cap={token.quote.USD.market_cap}
                                    percentage_change={token.quote.USD.percent_change_24h}
                                />
                            </Tr>
                        ))}     
                    </Tbody>

                </Table>
            </TableContainer>
        </>
    )
}

export default TokenInfoTable;
