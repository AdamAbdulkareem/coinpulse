export const ENDPOINTS = {
    ping: "/ping",
    search: "/search",
    trending: "/search/trending",
    globalMarket: "/global",
    coinsList: "/coins/list",
    coinsMarkets: "/coins/markets",
    coinById: (id) => `/coins/${encodeURIComponent(id)}`,
    coinMarketChart: (id) => `/coins/${encodeURIComponent(id)}/market_chart`,
    coinOhlc: (id) => `/coins/${encodeURIComponent(id)}/ohlc`,
}