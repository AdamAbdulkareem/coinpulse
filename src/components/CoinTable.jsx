import { CoinRow } from "./CoinRow";

export function CoinTable(props) {
    const { coins, sortKey, sortDirection, onSort } = props;
    const headerCell =
        "py-2 px-2 md:py-3 md:px-3 text-text-secondary text-xs font-medium uppercase tracking-wide sticky top-0 bg-surface z-10";
    return (
        <div className="w-full min-w-0 bg-surface rounded-card border border-border">
            <table className="w-full table-fixed">
                <thead>
                    <tr className="border-b border-border">
                        <th className={`${headerCell} text-left w-10 md:w-12`}>
                            <button
                                type="button"
                                onClick={() => onSort("rank")}
                                className="flex items-center gap-1 justify-start bg-transparent border-0 cursor-pointer p-0 text-inherit uppercase tracking-wide"
                            >
                                <span>#</span>
                                {sortKey === "rank" && (
                                    <span className="text-brand text-[10px]">
                                        {sortDirection === "asc" ? "▲" : "▼"}
                                    </span>
                                )}
                            </button>
                            </th>
                        <th className={`${headerCell} text-left`}>
                        <button
                                type="button"
                                onClick={() => onSort("name")}
                                className="flex items-center gap-1 justify-start bg-transparent border-0 cursor-pointer p-0 text-inherit uppercase tracking-wide"
                            >
                                <span>Coin</span>
                                {sortKey === "name" && (
                                    <span className="text-brand text-[10px]">
                                        {sortDirection === "asc" ? "▲" : "▼"}
                                    </span>
                                )}
                            </button></th>
                        <th className={`${headerCell} text-right w-25 md:w-50`}>
                        <button
                                type="button"
                                onClick={() => onSort("price")}
                                className="flex items-center gap-1 justify-end w-full bg-transparent border-0 cursor-pointer p-0 text-inherit uppercase tracking-wide"
                            >
                                <span>Price</span>
                                {sortKey === "price" && (
                                    <span className="text-brand text-[10px]">
                                        {sortDirection === "asc" ? "▲" : "▼"}
                                    </span>
                                )}
                            </button>
                            
                            </th>
                        <th className={`${headerCell} text-right w-18.75 md:w-20`}>
                        <button
                                type="button"
                                onClick={() => onSort("change")}
                                className="flex items-center gap-1 justify-end w-full bg-transparent border-0 cursor-pointer p-0 text-inherit uppercase tracking-wide"
                            >
                                <span>24h %</span>
                                {sortKey === "change" && (
                                    <span className="text-brand text-[10px]">
                                        {sortDirection === "asc" ? "▲" : "▼"}
                                    </span>
                                )}
                            </button></th>
                        <th className={`${headerCell} text-right hidden md:table-cell`}>
                        <button
                                type="button"
                                onClick={() => onSort("market_cap")}
                                className="flex items-center gap-1 justify-end w-full bg-transparent border-0 cursor-pointer p-0 text-inherit uppercase tracking-wide"
                            >
                                <span>Market Cap</span>
                                {sortKey === "market_cap" && (
                                    <span className="text-brand text-[10px]">
                                        {sortDirection === "asc" ? "▲" : "▼"}
                                    </span>
                                )}
                            </button>
                        </th>
                        <th className={`${headerCell} text-right hidden md:table-cell md:w-35`}>
                        <button
                                type="button"
                                onClick={() => onSort("volume")}
                                className="flex items-center gap-1 justify-end w-full bg-transparent border-0 cursor-pointer p-0 text-inherit uppercase tracking-wide"
                            >
                                <span>Volume</span>
                                {sortKey === "volume" && (
                                    <span className="text-brand text-[10px]">
                                        {sortDirection === "asc" ? "▲" : "▼"}
                                    </span>
                                )}
                            </button>
                        </th>
                        <th className={`${headerCell} text-right hidden md:table-cell w-40`}>7d</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin) => (
                        <CoinRow key={coin.id} coin={coin} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
