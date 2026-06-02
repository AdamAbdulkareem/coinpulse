export function ErrorState({ message }){
    return (
        <div className="border border-red-300 bg-red-50 text-red-800 rounded p-4 max-w-md">
        <p className="font-medium">Something went wrong</p>
        <p className="text-sm mt-1">{message}</p>
    </div>
    )
}