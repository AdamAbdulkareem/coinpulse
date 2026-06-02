import { CoinRow } from "./CoinRow"

export function CoinTable(props){
    const { coins } = props
    return (
        <table className="w-full text-left">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Coin</th>
                    <th>Price</th>
                    <th>24h %</th>
                    <th>Market Cap</th>
                    <th>Volume</th>
                </tr>
            </thead>
            <tbody>
                {coins.map((coin) => (
                    <CoinRow key={coin.id} coin={coin} />                  
                ))}
            </tbody>
        </table>
    )
}