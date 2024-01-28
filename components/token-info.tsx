import { useTokensStore } from "@/data/store";
import { Icon, Stat, StatArrow, StatHelpText, StatLabel, Td, Tr, Wrap, WrapItem } from "@chakra-ui/react";
import Image from "next/image";
import { FaStar as FilledStar, FaRegStar as EmptyStar } from 'react-icons/fa';


type TokenInfoProps = {
    id: number,
    rank: number,
    logo: string,
    symbol: string,
    market_cap: number,
    price: number,
    percentage_change: number
}

const TokenInfo: React.FC<TokenInfoProps> = ({ id, rank, logo, symbol, market_cap, price, percentage_change }) => {
    const { userId, favTokenIds, addFavToken, removeFavToken } = useTokensStore();
    // Check if the current token ID is in the list of favorite token IDs
    const isFav = favTokenIds.includes(id);
    const handleRemoveFav = async () => {
        //remove from the database, then update the store

        try {
            removeFavToken(id);
            const response = await fetch(`api/favTokens`,
                {
                    method: "DELETE",
                    body: JSON.stringify({userId, id})
                })
            const json = await response.json();

        } catch (error) {
            console.error('Error deleting user fav token:', error);
        }
    };
    const handleAddFav = async () => {
        //inject to the database, then update the store
        try {
            addFavToken(id); //update the state as well
            const response = await fetch(`api/favTokens`,
                {
                    method: "POST",
                    body: JSON.stringify({userId, id})
                })
            const json = await response.json();

        } catch (error) {
            console.error('Error adding user fav token:', error);
        }
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
                                <Image src={logo} alt={symbol} height={24} width={24} />
                            </WrapItem>
                            <WrapItem>
                                {symbol}
                            </WrapItem>
                        </Wrap>
                    </StatLabel>

                    <StatHelpText>
                        {formatAsBillions(market_cap)}
                        {/* {market_cap} */}
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

function formatAsBillions(marketCap: number): string {
    return `${(marketCap / 1000000000).toFixed(2)} Bn`
}

function formatAsCurrency(price: number) {
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return USDollar.format(price);
}

export default TokenInfo;