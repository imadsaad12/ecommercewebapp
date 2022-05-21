import React, { useState } from 'react'
import Product from './Product'
import "../products.css"
import {productsdata} from "../productsdata"
export default function 
() {
  const[products,setproducts]=useState(productsdata)
  const sortproduct =()=>{
    const aux=products.sort((a, b) => (a.price - b.price))
    console.log(aux)
    setproducts(aux)
  }
  return (
    <div className="productsdiv">  
      
        {products.map(product =>{
          console.log(product)
            return (<Product item = {product} key ={product.title}/>)
        })}
                <button onClick={sortproduct}>sort</button>
    </div>
  )
      }
