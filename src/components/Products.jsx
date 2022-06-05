import React from 'react'
import {popularProducts} from '../data';
import Product from "./Product";

const Products = () => {
  return (
        <div className='Container'>
            {popularProducts.map(item=>(
                <Product item={item.img} key={item.id}/>
            ))}
        </div>
  )
}

export default Products