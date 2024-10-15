import './App.css';
import './styles/styles.css';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyUsSection from './components/organisms/WhyUs';
import Footer from './components/Footer';
import Navbar from './components/organisms/Navbar';
import Contactus from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
      <WhyUsSection/>
      <Contactus/>
      <Footer/>
    </div>
  );
}

export default App;
