import React from 'react';

import { ProductList } from '../Components';

const Home = () => {
    return (
        <> 
            <div className="col-lg-5">
                <h3>Left side</h3>
            </div>
            <div className="col-lg-7">
                <ProductList/>
            </div>
        </>
    )
}
export { Home };