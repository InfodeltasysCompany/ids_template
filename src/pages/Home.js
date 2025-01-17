import React from 'react';
import Swiper1 from '../components/home/Swiper1';
// import "./Home.css"
import Quote from '../components/home/Quote';
import HomeCntrctPrcdre from '../components/home/HomeCntrctPrcdre';
import HomeCompany from '../components/home/HomeCompany';
function Home() {  

  return (
    <div >
        <Swiper1/>
        
        <Quote/>
        <HomeCntrctPrcdre/>
        <HomeCompany/>
    </div>
  );
}

export default Home;
