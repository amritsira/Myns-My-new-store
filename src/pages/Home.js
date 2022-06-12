import React, { useEffect } from 'react'
import Categories from '../components/Categories';
import './Home.css';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { Slider } from '../components/Slider';
import {useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import Notecontext from '../context/Notecontext';

function Home() {

    let contextdata = useContext(Notecontext);
    const navigateto = useNavigate();

    const islogin = ()=>{
        return Boolean(sessionStorage.login);
      }
     
      
   
    useEffect(()=>{
        if(islogin()!=true)
        {
            contextdata.setlogin(false);
            console.log(islogin())
            navigateto('/login')
        }else{
            contextdata.setlogin(true);
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
