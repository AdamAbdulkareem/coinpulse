import { useState, useEffect } from "react";
import { getTopCoins } from "./api"
import { CoinTable } from "./components/CoinTable"
import { LoadingState } from "./components/LoadingState"
import { ErrorState } from "./components/ErrorState"
import { SearchBar } from "./components/SearchBar"


export default function App(){
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

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

  const filteredCoins = coins.filter((coin) => {
    if (query === "") return true;
    const q = query.toLowerCase();
    return coin.name.toLowerCase().includes(q) || coin.symbol.toLowerCase().includes(q)
  })

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error.message} />;
  return (
      <>
      <SearchBar value={query} onChange={setQuery} />
      {filteredCoins.length === 0 ? <p className="text-center p-4 text-gray-500">No coins match "{query}".</p> :
      <CoinTable coins={filteredCoins} />
      }
      </>
  );
}