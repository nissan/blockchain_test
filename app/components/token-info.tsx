type TokenInfoProps = {
    rank: number,
    icon: string,
    symbol: string,
    marketCap: string,
    price: number,
    percentage_change: number
}

const TokenInfo: React.FC<TokenInfoProps> = ({ rank, icon, symbol, marketCap, percentage_change }) => {
    return (
        <>
            <tr>
                <td>{rank}</td>
                <td><span>{icon}{symbol}</span>
                    <br />
                    <span>{marketCap}</span>
                </td>
                <td>
                    {percentage_change}
                </td>
            </tr>
        </>
    )
}

export default TokenInfo;