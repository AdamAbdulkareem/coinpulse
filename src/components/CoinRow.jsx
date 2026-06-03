import { formatPrice, formatPercent, formatMarketCap } from "../utils/format"

export function CoinRow(props){
    const { coin } = props
    const change = coin.price_change_percentage_24h

    const changeClass = change > 0 ? "text-green-600" : change < 0 ? "text-red-600" : "text-gray-500";
    return (
        <tr className="hover:bg-gray-100 transition-colors">
            <td className="p-2 border-b">{coin.market_cap_rank}</td>
            <td className="p-2 border-b"><img className="w-6 h-6 inline mr-2" src={coin.image} alt={coin.name}/>{coin.name} {coin.symbol.toUpperCase()}</td>
            <td className="p-2 border-b">{formatPrice(coin.current_price)}</td>
            <td className={`p-2 border-b ${changeClass}`}>{formatPercent(change)}</td>
            <td className="p-2 border-b">{formatMarketCap(coin.market_cap)}</td>
            <td className="p-2 border-b">{formatMarketCap(coin.total_volume)}</td>
        </tr>
    )
}