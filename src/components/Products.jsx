import React,{useEffect,useState} from 'react'
import {popularProducts , allproducts} from '../data';
import Product from "./Product";

const Products = ({addtocart , addtowishlist}) => {

  // const [data , setData] = useState([]);

  // const getData = async ()=>{
  //   const response = await fetch('https://fakestoreapi.com/products/');
  //   const data = await response.json();
  //   // console.log(data);
    // setData(data);
  // }
  

  // useEffect( ()=>{
  //     getData();
  // },[])

  return (
        <div className='Container'>
            {/* {popularProducts.map(item=>(
                <Product item={item.img} key={item.id}/>
            ))} */}

            {
              allproducts.map((item)=>{
                return(
                  
                    <Product item={item} addtocart={addtocart} addtowishlist={addtowishlist}/>
                  
                )
                
                })
            }


        </div>
  )
}

export default Products