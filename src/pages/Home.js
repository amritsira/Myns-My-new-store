import React from 'react'
import Categories from '../components/Categories';
// import Footer from '../components/Footer';
import './Home.css';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { Slider } from '../components/Slider';
// import Header from '../components/Header';
function Home({cartqty ,addtocart , addtowishlist}) {
    return (
        <div className='home'>
            {/* <Header cartqty={cartqty}/> */}
            <Slider/>
            <Categories/>
            <Products addtocart={addtocart} addtowishlist={addtowishlist}/>
            <Newsletter/>
            {/* <Footer/> */}
        </div>
    )
}

export default Home
