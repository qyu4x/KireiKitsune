import React from 'react'
import Annonuncement from '../components/Annonuncement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Catgories from '../components/Categories'
import Products from '../components/Products'
import Newsletters from '../components/Newsletters'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'


export const Home = () => {
    return (
        <div>
            <Annonuncement/>
            <Navbar/>
            <Slider/>
            <Catgories/>
            <Products/>
            <Newsletters/>
            <Footer/>
            <Copyright/>
            
        </div>
    )
}
