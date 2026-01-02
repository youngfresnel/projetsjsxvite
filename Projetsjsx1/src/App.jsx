import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Product from './Component/Product/Product'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Topproduct from './Component/TopProduct/Topproduct'
import Banner from './Component/Banner /Banner'
import Subscribe from './Component/Subscribe/Subscribe'
import Testimonials from './Component/Teestimonials/Testimonials'
import Footers from './Component/Footer/Footers'
import Popup from './Component/Popup/Popup'
const App = () => {
  const [orderPopup, setOderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOderPopup(!orderPopup);
  }

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
    <div className='bg-white dark:bg-gray-900
    dark:text-white duration-200'>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Product/>
      <Topproduct handleOrderPopup={handleOrderPopup}/>
      <Banner/>
      <Subscribe/>
      <Product/>
      <Testimonials/>
      <Footers/>
      <Popup orderPopup={orderPopup} setOderPopup={setOderPopup}/>
    </div>
  )
}


export default App
















