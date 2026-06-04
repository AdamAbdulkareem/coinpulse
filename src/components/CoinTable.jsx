import { CoinRow } from "./CoinRow";

export function CoinTable(props) {
    const { coins } = props;
    const headerCell =
        "py-3 px-3 text-text-secondary text-xs font-medium uppercase tracking-wide";
    return (
        <div className="bg-surface rounded-card border border-border overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-surface">
                        <tr className="border-b border-border">
                            <th className={`${headerCell} text-left`}>#</th>
                            <th className={`${headerCell} text-left`}>Coin</th>
                            <th className={`${headerCell} text-right`}>Price</th>
                            <th className={`${headerCell} text-right`}>24h %</th>
                            <th className={`${headerCell} text-right`}>Market Cap</th>
                            <th className={`${headerCell} text-right`}>Volume</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coins.map((coin) => (
                            <CoinRow key={coin.id} coin={coin} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
