export function SearchBar({ value, onChange }) {
    return (
        <div className="relative w-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute w-4 h-4 text-text-tertiary pointer-events-none left-3 top-1/2 -translate-y-1/2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>


            <input className="bg-surface w-full py-2.5 border border-border rounded-card text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-brand pl-10 pr-3" type="text" placeholder="Search by name or symbol..." value={value} onChange={(e) => onChange(e.target.value)} />
        </div>

    )
}