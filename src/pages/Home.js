import React from 'react'
import Categories from '../components/Categories';
// import Footer from '../components/Footer';
import './Home.css';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { Slider } from '../components/Slider';
// import {useNavigate} from 'react-router-dom';
// import {useContext} from 'react';
// import Notecontext from '../context/Notecontext';

// import Header from '../components/Header';
function Home() {

    // let contextdata = useContext(Notecontext);
    // const navigateto = useNavigate();

  
     
      
  
    return (
        <div className='home'>
            {/* <Header /> */}
            <Slider/>
            <Categories/>
            <Products />
            <Newsletter/>
            {/* <Footer/> */}
        </div>
    )
}

export default Home
