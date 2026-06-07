import { LineChart, Line } from "recharts"

export function Sparkline({ prices }) {
    if (!prices?.length) return null
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    const range = max - min || 1;

    const first = prices[0];
    const last = prices[prices.length - 1];

    const data = prices.map((value, i) => ({ i, value: ((value - min) / range) * 100, }));
    const stroke = last > first ?  "#16C784" : last < first ? "#EA3943" : "#6B7385";

    return (
        <div className="flex items-center justify-end">
            <LineChart data={data} width={120} height={40} margin={{ top: 2, right: 0, bottom: 2, left: 0 }}>
                <Line type="monotone" dataKey="value" stroke={stroke} strokeWidth={1.5} dot={false} />
            </LineChart>
        </div>
    )
}