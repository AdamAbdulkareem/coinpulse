import { formatPrice, formatPercent, formatMarketCap } from "../utils/format"
import { Sparkline } from "./Sparkline"

export function CoinRow(props){
    const { coin } = props
    const change = coin.price_change_percentage_24h
    const numericCell = "py-3 px-3 border-b border-border tabular-nums text-right text-sm md:text-base"

    const changeClass = change > 0 ? "text-positive" : change < 0 ? "text-negative" : "text-text-tertiary";
    return (
        <tr className="hover:bg-surface-elevated transition-colors">
            <td className="py-3 px-5 border-b border-border text-text-tertiary text-sm">{coin.market_cap_rank}</td>
            <td className="py-2 px-2 md:py-3 md:px-3 border-b border-border min-w-0">
                <div className="flex items-center gap-1.5 md:gap-2 min-w-0">
                    <img className="w-5 h-5 md:w-6 md:h-6 shrink-0" src={coin.image} alt={coin.name}/>
                    <div className="flex flex-col min-w-0">
                        {/* Mobile: symbol only */}
                        <span className="text-text-primary font-medium text-sm md:hidden">{coin.symbol.toUpperCase()}
                        </span>
                         {/* Desktop: name + symbol */}
                        <span className="hidden md:block text-text-primary font-medium">{coin.name}</span>
                        <span className="hidden md:block text-text-tertiary text-xs">{coin.symbol.toUpperCase()}</span>
                    </div>
                </div>
            </td>
            <td className={numericCell}>{formatPrice(coin.current_price)}</td>
            <td className={`${numericCell} ${changeClass}`}>{formatPercent(change)}</td>
            <td className={`${numericCell} hidden md:table-cell`}>{formatMarketCap(coin.market_cap)}</td>
            <td className={`${numericCell} hidden md:table-cell`}>{formatMarketCap(coin.total_volume)}</td>
            <td className={`${numericCell} hidden md:table-cell`}>
                <Sparkline 
                prices={coin.sparkline_in_7d?.price}
                />
            </td>
        </tr>
    )
}