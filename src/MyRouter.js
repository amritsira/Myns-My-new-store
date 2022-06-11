import React from 'react'
import {Route,Routes} from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Register from './pages/Register';
import Login from './pages/Login';


const MyRouter = ({cartqty ,cartItems,addtocart , deleteitem , wishlist , addtowishlist , removewishlist}) => {
    return (
        <Routes>

            <Route path="/" exact element={<Home/>} />
            <Route path="/product/:id" element={<Product   />} />
            <Route path="/wishlist" element={<Wishlist  />} />
            <Route path="/cart" element={<Cart  />} />
            <Route path="/productlist" element={<ProductList  />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" index element={<Login />} />
            <Route path="*"  element={<h1>404 Page not found</h1>} />


            {/* <Route path="/" element={<Home  cartItems={cartItems} addtocart={addtocart} addtowishlist={addtowishlist} />} /> */}

            {/* <Route path="/product/:id" element={<Product  cartItems={cartItems} addtocart={addtocart} addtowishlist={addtowishlist} />} />
            <Route path="/wishlist" element={<Wishlist  wishlist={wishlist} addtocart={addtocart} removewishlist={removewishlist}/>} />
            <Route path="/cart" element={<Cart  cartItems={cartItems} addtocart={addtocart} deleteitem={deleteitem} addtowishlist={addtowishlist}/>} />
            <Route path="/productlist" element={<ProductList  cartItems={cartItems}  addtocart={addtocart} addtowishlist={addtowishlist}/>} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} /> */}

        </Routes>

  )
}

export default MyRouter