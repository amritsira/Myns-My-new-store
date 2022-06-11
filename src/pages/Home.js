import React, { useEffect } from 'react'
import Categories from '../components/Categories';
// import Footer from '../components/Footer';
import './Home.css';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { Slider } from '../components/Slider';
import {useNavigate} from 'react-router-dom';

// import Header from '../components/Header';
function Home() {

    const navigateto = useNavigate();

    const islogin = ()=>{
        return Boolean(sessionStorage.login);
      }
     
      
   
    useEffect(()=>{
        if(islogin()!=true)
        {
            console.log("hlsakjflksf")
            navigateto('/login')
        }
    },[]);

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
