import React from 'react'
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import './Home.css';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { Slider } from '../components/Slider';
import Header from '../components/Header';
function Home() {
    return (
        <div className='home'>
            <Header/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home
