export function LoadingState() {
    return (
        <div className="flex items-center justify-center gap-3 p-8">
            <div className="w-6 h-6 border-2 border-border border-t-brand rounded-full animate-spin"></div>
            <span className="text-text-secondary">Loading coins...</span>
        </div>
    )
}