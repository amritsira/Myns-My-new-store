import React,{useEffect,useState} from 'react'
import { allproducts} from '../data';
import Product from "./Product";

const Products = () => {

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
          
            {
              allproducts.map((item)=>{
                return(
                  
                    <Product item={item} />
                  
                )
                
                })
            }


        </div>
  )
}

export default Products