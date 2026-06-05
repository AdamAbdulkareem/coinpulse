export function SearchBar({ value, onChange}){
    return (
        <input className="bg-surface w-full px-3 py-2.5 border border-border rounded-card text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-brand" type="text" placeholder="Search by name or symbol..." value={value} onChange={(e) => onChange(e.target.value)}/>
    )
}