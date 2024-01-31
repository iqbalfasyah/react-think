import { useState } from "react";

export default function SearchBar({filterProducts}) {
    const [search, setSearch] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    
    function setFilter(inSearch, inStock){
        setSearch(inSearch);
        setInStockOnly(inStock);

        filterProducts(inSearch, inStock);
    }

    return (
        <form>
            <input type="text" placeholder="Search..." value={search} onChange={(e)=> setFilter(e.target.value, inStockOnly)} />
            <label>
                <input type="checkbox" checked={inStockOnly} onChange={(e)=> setFilter(search, e.target.checked)}/>
                {' '}
                Only show products in stock
            </label>
        </form>
    );
}
