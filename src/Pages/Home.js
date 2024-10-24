import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyUsSection from '../components/WhyUs';
import Contactus from '../components/Contact';
import Footer from '../components/Footer';
import TeamGrid from '../components/TeamGrid';
import About from '../components/About';
import Values from '../components/organisms/Values';
 
const Home = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <ServicesSection/>
    <About/>
    <Values/>
    <WhyUsSection/>
    <TeamGrid/>
    <Contactus/>
    <Footer/> 
    </> 
  );
};

export default Home;
