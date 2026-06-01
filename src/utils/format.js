const priceFormatter = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD", maximumFractionDigits: 2})

const smallPriceFormatter = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD", maximumFractionDigits: 8})


const percentFormatter = new Intl.NumberFormat("en-US", {style: "percent", signDisplay: "exceptZero", maximumFractionDigits: 2})

const marketCapFormatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", notation: "compact", maximumFractionDigits: 2})


export function formatPrice(value){
    if (value == null || Number.isNaN(value)){
        return "-"
    } else if (value >= 1){
    return priceFormatter.format(value) 
    } else{
        return smallPriceFormatter.format(value)
    }
}

export function formatPercent(value){
    if (value == null || Number.isNaN(value)){
        return "-"
    }
    const percent = percentFormatter.format(value / 100)
    return percent
}

export function formatMarketCap(value){
    if (value == null || Number.isNaN(value)){
        return "-"
    }
    return marketCapFormatter.format(value)
}