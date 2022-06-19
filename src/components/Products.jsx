import React from 'react'
import { allproducts} from '../data';
import Product from "./Product";

const header_css = {
  background: "repeating-linear-gradient(90deg, rgb(0 0 0), rgb(57 162 8) 6px)",
    padding: "6px",
    textAlign: "center",
    color: "rgb(233 233 233)",
    fontFamily: "initial",
    fontSize: "x-large",
    marginTop: "2vh"
}

function Headermsg({msg}){
  return(
      <div className="product_header_msg" style={header_css}>
          <h1>{msg}</h1>
      </div>
  )
}


const Products = ({params}) => {

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
console.log(params);

let productlist ;
if(params){
    if(params.cat !== 'undefined'){
        productlist = allproducts.filter((pd)=>{
            return pd.category === params.cat;
        })

        if(params.gender != null){
          console.log("sdfk");
          productlist = productlist.filter((pd)=>{
            return pd.gender === params.gender;
        })
        }
    }else{
        productlist = allproducts;
    }
}else{
  productlist = allproducts.filter((pd)=>{
    return pd.rating.rate >= 4;
})
}



// console.log("productlist : "+ productlist);

  return (

    <>
        <Headermsg msg={(params)? params.cat.toUpperCase() +"  PRODUCTS" :"MOST POPULAR PRODUCTS" }/>
        <div className='Container'>
            {(productlist.length ===0)? <h2 style={{textAlign:"center" ,flex:"1"}}>OOPs.. No Product Available For This Category</h2> : ""}
            {
              productlist.map((item)=>{
                return(
                      <Product item={item} />
                  
                )
                
                })
            }


        </div>
    </>
  )
}

export default Products