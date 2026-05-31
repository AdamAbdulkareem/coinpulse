export function CoinRow(props){
    const { coin } = props
    return (
        <tr>
            <td className="p-2 border-b">{coin.market_cap_rank}</td>
            <td className="p-2 border-b"><img className="w-6 h-6 inline mr-2" src={coin.image} alt={coin.name}/>{coin.name} {coin.symbol.toUpperCase()}</td>
            <td className="p-2 border-b">{coin.current_price}</td>
            <td className="p-2 border-b">{coin.price_change_percentage_24h}</td>
            <td className="p-2 border-b">{coin.market_cap}</td>
            <td className="p-2 border-b">{coin.total_volume}</td>
        </tr>
    )
}