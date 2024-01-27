import { useTokensStore } from "@/data/store";
import { Icon, Stat, StatArrow, StatHelpText, StatLabel, Td, Tr, Wrap, WrapItem } from "@chakra-ui/react";
import Image from "next/image";
import { FaStar as FilledStar, FaRegStar as EmptyStar } from 'react-icons/fa';


type TokenInfoProps = {
    id: number,
    rank: number,
    icon: string,
    symbol: string,
    marketCap: number,
    price: number,
    percentage_change: number
}

const TokenInfo: React.FC<TokenInfoProps> = ({ id, rank, icon, symbol, marketCap, price, percentage_change }) => {
    const { favTokenIds, addFavToken, removeFavToken } = useTokensStore();
    // Check if the current token ID is in the list of favorite token IDs
    const isFav = favTokenIds.includes(id);
    const handleRemoveFav = () => {
        removeFavToken(id);
    };
    const handleAddFav = () => {
        addFavToken(id);
    }
    return (
        <>
            <Td>
                {isFav ? (
                    <Icon as={FilledStar} color="yellow.500" w={6} h={6} onClick={handleRemoveFav} cursor="pointer" />
                ) : (
                    <Icon as={EmptyStar} w={6} h={6} onClick={handleAddFav} cursor="pointer" />
                )}
            </Td>
            <Td>{rank}</Td>
            <Td>
                <Stat>
                    <StatLabel>
                        <Wrap>
                            <WrapItem>
                                <Image src={icon} alt={symbol} height={24} width={24} />
                            </WrapItem>
                            <WrapItem>
                                {symbol}
                            </WrapItem>
                        </Wrap>
                    </StatLabel>

                    <StatHelpText>
                        {formatAsBillions(marketCap)}
                    </StatHelpText>
                </Stat>
            </Td>
            <Td>
                {formatAsCurrency(price)}
            </Td>
            <Td>
                <Stat>
                    <StatHelpText>
                        {(percentage_change > 0) && <>
                            <StatArrow type="increase" />
                            {percentage_change}%
                        </>}
                        {(percentage_change < 0) && <>
                            <StatArrow type="decrease" />
                            {percentage_change}%
                        </>}
                        {(percentage_change == 0) && <>
                            {percentage_change}%
                        </>}
                    </StatHelpText>
                </Stat>

            </Td>
        </>
    )
}

function formatAsBillions(marketCap: number) {
    return `${marketCap / 1000000000} Bn`
}

function formatAsCurrency(price: number) {
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return USDollar.format(price);
}

export default TokenInfo;