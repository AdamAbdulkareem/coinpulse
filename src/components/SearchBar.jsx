export function SearchBar({ value, onChange}){
    return(
        <input className="w-full p-2 border rounded mb-4" type="text" placeholder="Search by name or symbol..." value={value} onChange={(e) => onChange(e.target.value)}/>
    )
}