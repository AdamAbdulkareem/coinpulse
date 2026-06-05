import { formatPrice, formatPercent, formatMarketCap } from "../utils/format"

export function CoinRow(props){
    const { coin } = props
    const change = coin.price_change_percentage_24h
    const numericCell = "py-3 px-3 border-b border-border tabular-nums text-right"

    const changeClass = change > 0 ? "text-positive" : change < 0 ? "text-negative" : "text-text-tertiary";
    return (
        <tr className="hover:bg-surface-elevated transition-colors">
            <td className="py-3 px-3 border-b border-border text-text-tertiary text-sm">{coin.market_cap_rank}</td>
            <td className="py-3 px-3 border-b border-border">
                <div className="flex items-center gap-2">
                    <img className="w-6 h-6" src={coin.image} alt={coin.name}/>
                    <div className="flex flex-col min-w-0">
                        <span className="text-text-primary font-medium truncate max-w-[7rem]">{coin.name}</span>
                        <span className="text-text-tertiary text-xs">{coin.symbol.toUpperCase()}</span>
                    </div>
                </div>
            </td>
            <td className={numericCell}>{formatPrice(coin.current_price)}</td>
            <td className={`${numericCell} ${changeClass}`}>{formatPercent(change)}</td>
            <td className={`${numericCell} hidden md:table-cell`}>{formatMarketCap(coin.market_cap)}</td>
            <td className={`${numericCell} hidden md:table-cell`}>{formatMarketCap(coin.total_volume)}</td>
        </tr>
    )
}