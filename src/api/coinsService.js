import { apiClient } from "./client.js";
import { ENDPOINTS } from "./endpoints.js";
import { API_CONFIG } from "./config.js";



export async function pingApi(options = {}) {
    const { signal } = options
    return (apiClient.get(ENDPOINTS.ping, { signal }))
}

export async function getTopCoins(options = {}) {
    const { 
        signal,
        vsCurrency = API_CONFIG.defaultCurrency,
        perPage = 100,
        page = 1,
        order = "market_cap_desc",
        ids,
        sparkline = false,
        priceChangePercentage, } = options

    const params = {
        vs_currency: vsCurrency,
        per_page: perPage,
        page,
        order,
        ids: Array.isArray(ids) ? ids.join(",") : ids,
        sparkline,
        price_change_percentage: priceChangePercentage,
    }
    return apiClient.get(ENDPOINTS.coinsMarkets, { signal, params })
}


export async function getTrendingCoins(options = {}){
    const { signal } = options
    return apiClient.get(ENDPOINTS.trending, { signal })
}

export async function getGlobalMarketData(options = {}){
    const { signal } = options
    return apiClient.get(ENDPOINTS.globalMarket, { signal })
}

export async function searchCoins(options = {}){
    const { query, signal } = options
    if (!query) throw new Error("searchCoins requires a query")
    const params = { query }
    return apiClient.get(ENDPOINTS.search, { signal, params })
}

export async function getCoinDetails(options = {}){
    const {id,
        signal,
        localization = false,
        tickers = false,
        marketData = true,
        communityData = false,
        developerData = false,
        sparkline = false,
    } = options

    if(!id) throw new Error("getCoinDetails requires an id")
    const params = {
        localization,
        tickers,
        market_data: marketData,
        community_data: communityData,
        developer_data: developerData,
        sparkline,
    }
    return apiClient.get(ENDPOINTS.coinById(id), { signal, params })
}

export async function getCoinMarketChart(options = {}){
    const {
        id,
        signal,
        vsCurrency = API_CONFIG.defaultCurrency,
        days = 7,
        interval,
    } = options
    if(!id) throw new Error("getCoinMarketChart requires an id")
    const params = {
        vs_currency: vsCurrency,
        days,
        interval,
    }
    return apiClient.get(ENDPOINTS.coinMarketChart(id), { signal, params })
}



// window.pingApi = pingApi