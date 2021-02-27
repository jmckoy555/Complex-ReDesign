import React from 'react';
import Cards from '../Cards';
import Footer from '../Footer';
import Hero from '../Hero';
import { SliderData } from '../../data/SliderData';


function Home () {
    return (
        <>
          <Hero slides={SliderData}/>
          <Cards/>
          <Footer/>
            
        </>
    )
}

export default Home



