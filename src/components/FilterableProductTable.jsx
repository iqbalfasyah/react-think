
import { useState } from "react";

import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default function FilterableProductTable({ products }) {
    const [filterProdutcs, setFilterProducts] = useState(products);


    function FilterProducts(search, isStock) {

        let filterProducts = products;

        if (isStock) {
            filterProducts = products.filter(item =>
                item.stocked === isStock
            );
        }

        if (search.length) {
            filterProducts = filterProducts.filter(item =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );
        }


        setFilterProducts(filterProducts);

        return;
    }


    return (
        <div>
            <SearchBar filterProducts={FilterProducts} />
            <ProductTable products={filterProdutcs} />
        </div>
    );
}