import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css';
import Button from './components/buttonsection';
import Footer from './components/footer';
import Grid from './components/grid section';
import Header from './components/header';
import Hero from './components/hero';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Slider from './components/slider';



export default function App() {
  return (

    <>
      <div className='bg-[#19191B] '>
        <Header />
        <Hero />
      </div>
      <Section1 />
      <Section2 />
      <Grid />
      <Button />
      <Slider />
      <Footer />





    </>

  )
}