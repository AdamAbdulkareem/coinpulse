import { useState, useEffect } from "react";
import { getTopCoins } from "./api"

export default function App(){
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ctrl = new AbortController();

    getTopCoins({ perPage: 100, signal: ctrl.signal })
      .then((data) => {
        console.log("CoinGecko /coins/markets response:", data);
        setCoins(data);
      })
      .catch((error) => {
        if (ctrl.signal.aborted) return;
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => ctrl.abort();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error.message}</p>;
  return (
    <ul>
      {coins.map((coin) => (
        <li key={coin.id}>
          {coin.market_cap_rank}. {coin.name} ({coin.symbol.toUpperCase()}) -- ${coin.current_price}
        </li>
      ))}
    </ul>
  );
}
