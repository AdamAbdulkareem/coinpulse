import { CoinRow } from "./CoinRow";

export function CoinTable(props) {
    const { coins } = props;
    const headerCell =
        "py-3 px-3 text-text-secondary text-xs font-medium uppercase tracking-wide sticky top-0 bg-surface z-10";
    return (
        <div className="w-full min-w-0 bg-surface rounded-card border border-border">
            <table className="w-full table-fixed">
                <thead>
                    <tr className="border-b border-border">
                        <th className={`${headerCell} text-left `}>#</th>
                        <th className={`${headerCell} text-left`}>Coin</th>
                        <th className={`${headerCell} text-right`}>Price</th>
                        <th className={`${headerCell} text-right`}>24h %</th>
                        <th className={`${headerCell} text-right hidden md:table-cell`}>Market Cap</th>
                        <th className={`${headerCell} text-right hidden md:table-cell`}>Volume</th>
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
