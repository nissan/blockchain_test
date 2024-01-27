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
                                    rank={token.cmc_rank}
                                    icon={token.icon}
                                    symbol={token.symbol}
                                    price={token.price}
                                    marketCap={token.market_cap.toString()}
                                    percentage_change={token.percent_change_1h}
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
