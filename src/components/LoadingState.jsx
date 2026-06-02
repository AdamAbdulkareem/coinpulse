export function LoadingState(){
    return (
        <div className="flex items-center justify-center gap-3 p-8">
            <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-800 rounded-full animate-spin"></div>
            <span>Loading coins...</span>
        </div>
    )
}