import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />

            <div className="home_row">
                <Product 
                id="12321442"
                title="Lean Startup" 
                price={29.99} 
                image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY327_FMwebp_QL65_.jpg"
                rating={5} 
                />
                <Product 
                id="12321432"
                title="Apple iPhone 7 4G LTE Prepaid Smartphone - 32GB - Black - Carrier Locked" 
                price={239} 
                image="https://m.media-amazon.com/images/I/31+rHqWgOrL._AC_UY327_FMwebp_QL65_.jpg"
                rating={5} 
                />
                <Product 
                id="12321432"
                title="Apple iPhone 7 4G LTE Prepaid Smartphone - 32GB - Black - Carrier Locked" 
                price={239} 
                image="https://m.media-amazon.com/images/I/31+rHqWgOrL._AC_UY327_FMwebp_QL65_.jpg"
                rating={5} 
                />
                <Product 
                id="12321432"
                title="Apple iPhone 7 4G LTE Prepaid Smartphone - 32GB - Black - Carrier Locked" 
                price={239} 
                image="https://m.media-amazon.com/images/I/31+rHqWgOrL._AC_UY327_FMwebp_QL65_.jpg"
                rating={5} 
                />
            </div>
            <div className="home_row">
            <Product 
                id="12321442"
                title="Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking, Bordeaux/Copper Rose, One Size" 
                price={198} 
                image="https://m.media-amazon.com/images/I/71jiGaztijL._AC_UY327_FMwebp_QL65_.jpg"
                rating={3} 
                />
                <Product 
                id="12321498"
                title="Sceptre E248W-19203R 24' Ultra Thin 75Hz 1080p LED Monitor" 
                price={104} 
                image="https://m.media-amazon.com/images/I/71qCGPWI8aL._AC_UY327_FMwebp_QL65_.jpg"
                rating={2} 
                />
                <Product 
                id="12321400"
                title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal
                " 
                price={49} 
                image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UL480_FMwebp_QL65_.jpg"
                rating={4} 
                />
            </div>
            <div className="home_row">
                {/* Product */}
                {/* Product */}
            </div>
            </div>
            
            
        </div>
    )
}

export default Home
