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

window.pingApi = pingApi
