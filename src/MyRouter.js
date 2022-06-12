import React from 'react'
import {Route,Routes} from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Register from './pages/Register';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import {useContext} from 'react';
import Notecontext from './context/Notecontext';

const MyRouter = () => {

    let contextdata = useContext(Notecontext);
    const islogin = ()=>{
        // return Boolean(sessionStorage.login);
        console.log(contextdata);
        return contextdata.login;
      }


    return (
        <>


             {(islogin() ==true) ? <Header/> : undefined }

        <Routes>

            <Route path="/" exact element={<Home/>} />
            <Route path="/product/:id" element={<Product   />} />
            <Route path="/wishlist" element={<Wishlist  />} />
            <Route path="/cart" element={<Cart  />} />
            <Route path="/productlist" element={<ProductList  />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" index element={<Login />} />
            <Route path="*"  element={<h1>404 Page not found</h1>} />


        </Routes>

        {(islogin() ==true) ? <Footer/> : undefined }

        </>

  )
}

export default MyRouter
