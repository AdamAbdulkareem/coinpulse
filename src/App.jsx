import { useState, useEffect } from "react";
import { getTopCoins } from "./api"
import { CoinTable } from "./components/CoinTable"
import { LoadingState } from "./components/LoadingState"
import { ErrorState } from "./components/ErrorState"
import { SearchBar } from "./components/SearchBar"


export default function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false)


  useEffect(() => {

    const ctrl = new AbortController();

    if (page === 1) {
      setLoading(true)
    } else {
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
    <div className="flex flex-col  w-full gap-6 max-w-5xl mx-auto px-4 py-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-semibold">Coin Pulse</h1>
        <p className="text-text-secondary">Feel the pulse of the crypto market.</p>
      </header>
      <SearchBar value={query} onChange={setQuery} />
      {filteredCoins.length === 0 ? <p className="text-center py-12 text-text-secondary">No coins match "{query}".</p> :
        <CoinTable coins={filteredCoins} />
      }
      <button onClick={() => setPage((prev) => prev + 1)}
        disabled={loadingMore}
        className="w-full py-2.5 px-4 bg-surface hover:bg-surface-elevated border border-border rounded-card text-text-primary font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
        {loadingMore ? "Loading..." : "Load more"}
      </button>
    </div>
  );
}