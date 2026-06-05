export function ErrorState({ message }) {
    return (
        <div className="border border-negative/50 bg-surface rounded-card p-4 max-w-md">
            <p className="text-negative font-medium">Something went wrong</p>
            <p className="text-sm mt-1 text-text-secondary">{message}</p>
        </div>
    )
}