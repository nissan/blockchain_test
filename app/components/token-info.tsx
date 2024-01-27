import { Td, Tr, Wrap, WrapItem } from "@chakra-ui/react";
import Image from "next/image";

type TokenInfoProps = {
    rank: number,
    icon: string,
    symbol: string,
    marketCap: number,
    price: number,
    percentage_change: number
}

const TokenInfo: React.FC<TokenInfoProps> = ({ rank, icon, symbol, marketCap, price, percentage_change }) => {
    return (
        <>
            <Td>{rank}</Td>
            <Td>
                <Wrap>
                    <WrapItem>
                        <Image src={icon} alt={symbol} height={24} width={24} />
                    </WrapItem>
                    <WrapItem>
                        {symbol}
                    </WrapItem>
                </Wrap>

                <Wrap>
                    <WrapItem>
                        {formatAsBillions(marketCap)}
                    </WrapItem>
                </Wrap>

            </Td>
            <Td>
                {formatAsCurrency(price)}
            </Td>
            <Td>
                {percentage_change}
            </Td>
        </>
    )
}

function formatAsBillions(marketCap:number) {
    return `${marketCap/1000000000} Bn`
}

function formatAsCurrency(price:number) {
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return USDollar.format(price);
}

export default TokenInfo;