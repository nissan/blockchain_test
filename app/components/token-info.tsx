import { Td, Tr } from "@chakra-ui/react";
import Image from "next/image";

type TokenInfoProps = {
    rank: number,
    icon: string,
    symbol: string,
    marketCap: string,
    price: number,
    percentage_change: number
}

const TokenInfo: React.FC<TokenInfoProps> = ({ rank, icon, symbol, marketCap, price, percentage_change }) => {
    return (
        <>
            <Tr>
                <Td>{rank}</Td>
                <Td><span>
                        <Image src={icon} alt={symbol} height={24} width={24} />
                        {symbol}
                    </span>
                    
                    <span>{marketCap}</span>
                </Td>
                <Td>
                    {price}
                </Td>
                <Td>
                    {percentage_change}
                </Td>
            </Tr>
        </>
    )
}

export default TokenInfo;