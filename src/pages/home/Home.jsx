import React from 'react'
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Feature from "../../components/Feature";
import Parking from "../../components/ParkingGrid";
import About from "../../components/About";
import Footer from "../../components/Footer";

import './home.css';


function Home() {
  return (
    <>
        <Header />
        <Hero />
        <Feature />
        <Parking />
        <About />
        <Footer />
    </>
  )
}

export default Home
