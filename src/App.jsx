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
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false)

  useEffect(() => {
    const ctrl = new AbortController();

    if (page === 1){
      setLoading(true)
    } else{
      setLoadingMore(true)
    }

    getTopCoins({ perPage: 100, page, signal: ctrl.signal })
      .then((data) => {
        setCoins((prev) => page === 1 ? data : [...prev, ...data]);
      })
      .catch((error) => {
        if (ctrl.signal.aborted) return;
        setError(error);
      })
      .finally(() => {
        setLoading(false);
        setLoadingMore(false)
      });

    return () => ctrl.abort();
  }, [page]);

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
      <button onClick={() => setPage((prev) => prev + 1)}
        disabled={loadingMore}
        className="w-full p-2 mt-4 border rounded disabled:opacity-50 disabled:cursor-not-allowed">
        {loadingMore ? "Loading..." : "Load more"}
      </button>
      </>
  );
}