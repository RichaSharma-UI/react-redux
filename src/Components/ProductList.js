import React, { useEffect, useState } from 'react';

import { ProductsResponse } from '../MockData/Products';
import './ProductList.scss';

const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let products = ProductsResponse.products.map((product) => {
      return {
        ...product,
        selectedVariationId: product.variant[0].variationId,
        bgcolor: product.variant[0].color,
        price: product.variant[0].cost
      }
    })

    if (props.selectedFilter.color !== '' && props.selectedFilter.month !== '') {
      products = products.filter((product) => product.variant.some((item) => item.color === props.selectedFilter.color && item.months.indexOf(props.selectedFilter.month) > -1));
    } else if (props.selectedFilter.color !== '') {
      products = products.filter((product) => product.variant.some((item) => item.color === props.selectedFilter.color));
    } else if (props.selectedFilter.month !== '') {
      products = products.filter((product) => product.variant.some((item) => item.months.indexOf(props.selectedFilter.month) > -1));
    }

    setProducts(products);
  }, [ProductsResponse, props]);

  const handleColor = (selectedVariant, selectedProduct) => {
    const updatedProducts = products.map((product) => {
      return {
        ...product,
        selectedVariationId: product.id === selectedProduct.id ? selectedVariant.variationId : product.selectedVariationId,
        bgcolor: product.id === selectedProduct.id ? selectedVariant.color : product.bgcolor,
        price: product.id === selectedProduct.id ? selectedVariant.cost : product.price
      }
    })
    setProducts(updatedProducts);
  }
  return (
    <> 
      <h2>Product List</h2>
      <ul className="mt-4">
        {products.length === 0 && "No data available."}
        {products.map((product) => {
          return (
          <li key={product.id}>{
            <div className="border my-3 p-3 d-flex">
              <div className="col-lg-4 product-image" style={{background: product.bgcolor}}>
              </div>
              <div className="col-lg-8">
                <h5>{product.name}</h5>
                <h6>By: {product.brand}</h6>
                <p>Price: {product.price}</p>
                <div className="border p-3 d-flex product-color-list">
                  {product.variant.map((feature) => {
                    return (
                    <div key={feature.variationId} className={product.selectedVariationId === feature.variationId ? "mx-3 active" : "mx-3"} onClick={() => handleColor(feature, product)}
                    style={{background: feature.color}}></div>
                    )  
                    })}
                </div>
              </div>
            </div>
          }</li>
          )
        })}
      </ul>
    </>
  )
}
export { ProductList };