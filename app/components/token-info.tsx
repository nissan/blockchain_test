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
            <tr style={{ contentVisibility: "auto", containIntrinsicSize: "60px" }}>
                <td style={{
                    lineHeight: "1.5",
                    width: "50px",
                    margin: "0px",
                    color: "rgb(88,102,126)",
                    fontSize: "14px"
                }}>{rank}</td>
                <td style={{
                    width: "300px"
                }}><span>
                        <Image src={icon} alt={symbol} height={24} width={24} />
                        {symbol}
                    </span>
                    
                    <span>{marketCap}</span>
                </td>
                <td style={{
                    width: "85px"
                }}>
                    {price}
                </td>
                <td style={{
                    width: "85px"
                }}>
                    {percentage_change}
                </td>
            </tr>
        </>
    )
}

export default TokenInfo;