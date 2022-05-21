import React, { useState,useEffect } from 'react'
import Product from './Product'
import "../products.css"
import {productsdata} from "../productsdata"
 const Products=()=> {
  const[products,setproducts]=useState([])
  useEffect(() => {
     setproducts(productsdata)
  },[products]);
  const sortproduct =()=>{
    const aux=products.sort((a, b) => (a.price - b.price))
    console.log(aux)
    setproducts([...aux])
  }
  return (
    <div className="productsdiv">  
        {products.map(product =>{
            return (
              <Product item = {product} key ={product.title}/>
            )
        })}
          <button onClick={sortproduct}>sort</button>
    </div>
  )
      }

export default Products;