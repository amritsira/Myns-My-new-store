import React, { useEffect } from 'react'
import Categories from '../components/Categories';
import './Home.css';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { Slider } from '../components/Slider';
import {useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import Notecontext from '../context/Notecontext';

import Header from '../components/Header';
import Footer from '../components/Footer';
function Home() {

    let contextdata = useContext(Notecontext);
    const navigateto = useNavigate();

    const islogin = ()=>{
        return sessionStorage.login;
      }

    useEffect(()=>{
        if(islogin()==='false')
        {
            contextdata.setlogin(false);
            // console.log(islogin())
            navigateto('/login')
        }else{
            contextdata.setlogin(true);
        }
    },[]);
     
      
  
    return (
        <div className='home'>
            <Header />
            <Slider/>
            <Categories/>
            <Products ratingAbove="4" />
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home
