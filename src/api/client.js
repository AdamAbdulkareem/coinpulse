import { API_CONFIG } from "./config.js"

export class ApiError extends Error {
    constructor(message, { status, url, data } = {}) {
        super(message)
        this.name = "ApiError"
        this.status = status;
        this.url = url;
        this.data = data;
    }
}

export function buildQueryString(params) {
    if (params == undefined || Object.keys(params).length === 0) return ""
    else {
        const filteredParams = Object.entries(params).filter(
            ([, value]) => value !== undefined && value !== null)
        const searchParams = new URLSearchParams(filteredParams)
        return searchParams.toString() ? `?${searchParams.toString()}` : ""
    }
}

export async function request(path, options = {}) {
    const { method = "GET", params, body, headers: extraHeaders, signal } = options

    const baseURL = path.startsWith("http") ? "" : API_CONFIG.baseURL

    const url = `${baseURL}${path}${buildQueryString(params)}`

    const headers = {
        Accept: "application/json",
        ...(body ? { "Content-Type": "application/json" } : {}),
        ...(API_CONFIG.apiKey ? { "x-cg-demo-api-key": API_CONFIG.apiKey } : {}),
        ...extraHeaders,
    }
    const controller = new AbortController()
    const timerId = setTimeout(() => {
        controller.abort()
    }, API_CONFIG.timeoutMs)

    if (signal?.aborted) controller.abort();
    if (signal) {
        signal.addEventListener("abort", () => controller.abort())
    }

    try {
        const response = await fetch(url, {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined,
            signal: controller.signal
        })
        const contentType = response.headers.get("content-type") || "";
        const data = contentType.includes("application/json") ? await response.json() : await response.text();
        if (!response.ok) {
            throw new ApiError(`Request failed with status ${response.status}`, {
                status: response.status,
                url,
                data,
            });
        }
        return data;
    } catch (error) {
        if (error.name === "AbortError") {
            throw new ApiError("Request was aborted or timed out", { url });
        } else {
            throw error
        }
    } finally {
        clearTimeout(timerId)
    }
}

export const apiClient = {
    get: (path, options) => request(path, { ...options, method: "GET" }),
    post: (path, body, options) => request(path, { ...options, method: "POST", body }),
    put: (path, body, options) => request(path, { ...options, method: "PUT", body }),
    delete: (path, options) => request(path, { ...options, method: "DELETE" })
}