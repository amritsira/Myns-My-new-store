import React from 'react';

import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import {Route,Routes} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div className="app">
      {/* <Switch>
          <Route exact path="/" component="Home" />
          <Route path="/product" component="Product" />
      </Switch> */}
      <Routes>
          <Route  path="/" element={<Home/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/productlist" element={<ProductList/>} />

          
      </Routes>


        {/* <Home/> */}
        {/* <Product/> */}
        {/* <ProductList/> */}
        {/* <Cart/> */}
        
    </div>
  );
}

export default App;
