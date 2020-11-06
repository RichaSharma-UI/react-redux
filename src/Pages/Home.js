import React, { useEffect, useState } from 'react';

import { ProductList, ProductFilter } from '../Components';

const Home = () => {
    const [selectedFilter, setFilter] = useState({
        color:"",
        month: ""   
    });
    
    const onFilterColor = (colorFilter) => {
        setFilter({...selectedFilter, ...colorFilter});
    }

    const onFilterMonth = (monthFilter) => {
        setFilter({...selectedFilter, ...monthFilter});
    }

    return (
        <> 
            <div className="col-lg-5">
                <h2>Product Filter</h2>
                <ProductFilter onFilterColor={onFilterColor} onFilterMonth={onFilterMonth}/>
            </div>
            <div className="col-lg-7">
                <ProductList selectedFilter={selectedFilter}/>
            </div>
        </>
    )
}
export { Home };