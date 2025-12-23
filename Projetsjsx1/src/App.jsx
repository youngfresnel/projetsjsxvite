import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Product from './Component/Product/Product'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Topproduct from './Component/TopProduct/Topproduct'
import Banner from './Component/Banner /Banner'
import Subscribe from './Component/Subscribe/Subscribe'
const App = () => {

  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:'ease-in-sine',
      delay:100,
    });
    AOS.refresh(-1);
  },[]);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Product/>
      <Topproduct/>
      <Banner/>
      <Subscribe/>
      <Product/>
    </div>
  )
}


export default App
















