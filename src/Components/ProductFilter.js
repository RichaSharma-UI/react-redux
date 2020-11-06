import React, { useState } from 'react';

import { ProductsResponse } from '../MockData/Products';
import './ProductList.scss';

const ProductFilter = (props) => {
  const [filterColors, setFilterColors] = useState([]);
  const [filterMonths, setFilterMonths] = useState([]);
  const productsColors = ProductsResponse.products.forEach((product) => {
    product.variant.forEach((varia) => {
      if(filterColors.indexOf(varia.color) < 0){
        filterColors.push(varia.color);
      }
    });
  });
  const productsMonths = ProductsResponse.products.forEach((product) => {
    product.variant.forEach((varia) => {
      varia.months.forEach((month) => {
        if(filterMonths.indexOf(month) < 0){
          filterMonths.push(month);
        }
      });
    });
  });
  const handleColor = (color) => {
    props.onFilterColor({color});
  }
  const handleMonth = (month) => {
    props.onFilterMonth({month});
  }
  return (
    <> 
      <div className="mb-4">
        <h5>Color Filter</h5>
        <ul className="product-color-list">
          {filterColors.map((color, index) => {
            return(
            <li key={index} className="d-flex my-2 text-capitalize" onClick={() => handleColor(color)}><div style={{background: color}} className="mr-1"></div>{color}</li>
            )
          })}
        </ul>
      </div>
      <div className="mb-4">
        <h5>Month Filter</h5>
        <ul className="product-color-list">
          {filterMonths.map((month, index) => {
            return(
            <li key={index} className="d-flex my-2 text-capitalize" onClick={() => handleMonth(month)}>{month}</li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
export { ProductFilter };