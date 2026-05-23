// This config file exposes the .env variable to other files in the codebase
export const API_CONFIG = {
    baseURL: import.meta.env.VITE_COINGECKO_BASE_URL,
    apiKey: import.meta.env.VITE_COINGECKO_API_KEY,
    timeoutMs: 15000,
    defaultCurrency: "usd",
}

if(!API_CONFIG.baseURL){
    throw new Error("VITE_COINGECKO_BASE_URL is missing. Did you create a .env file at the project root?")
}