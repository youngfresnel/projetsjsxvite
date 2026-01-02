import React from 'react'
import { DeviceMobile, FacebookLogo, InstagramLogo, LinkedinLogo,NavigationArrow } from 'phosphor-react';
import footerLogo from '../../assets/logo.png';
import Banner from '../../assets/website/footer-pattern.jpg'

const BannerImg ={
  backgroundImage: `url(${Banner})`,
  backgroundPosition:'bottom',
  backgroundRepeat:'no-repeat',
  backgroundSize:'100%',
  height:'100%',
  width:'100%'
};

const FooterLinks = [
    {
      title:'Home',
      link:'/#',
    },
    {
      title:'About',
      link:'/#about',
    },
    {
      title:'Contact',
      link:'/#contact',
    },
    {
      title:'Blog',
      link:'/#blog',
    },
     
]

const Footers = () => {
  return (
      <div style={BannerImg} className='text-white mb-20'>
        <div 
        className='container' >
          <div
          data-aos="zoom-in"
          className=' grid md:grid-cols-3 pb-44 pt-5'>
            {/* Company details  */}
            <div className='py-8 px-4 ' >
              <h1
              className='sm:text-3xl text-xl font-bold sm:text-left 
              text-justify mb-3 flex items-center gap-3'
              >
                <img src={footerLogo} alt="" 
                className='max-w-[50px]'
                />
                Marius Phone </h1>
              <p> 
              C'est deja la fin de notre presentation dans 
              cette  plateforme de presnetation de<br/> notre produit. 
              Maintenant vous avez toutes les informations  </p>
            </div>
            {/* Footer Links  */}
            <div className='grid grid-cols-2 sm:grid-cols-3
            col-span-2 md:pl-10 gap-60'>
              <div className=''>
                <div className='py-8 px-4'>
                  <h1 className='sm:text-3xl text-xl 
                  font-bold sm:text-left text-justify mb-3'>
                    Liens importants
                  </h1>
                  <ul className=''>
                    {
                      FooterLinks.map((link) => (
                        <li
                        key={link.title}
                        className='cusor-pointer
                        hover:text-primary
                        hover:translate-x-1 duration-300
                      text-gray-200' 
                        >
                          <span>{link.title}</span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
              <div className=''>
                <div className='py-8 px-4'>
                  <h1 className='sm:text-3xl text-xl 
                  font-bold sm:text-left text-justify mb-3'>
                    Liens 
                  </h1>
                  <ul className=''>
                    {
                      FooterLinks.map((link) => (
                        <li
                        key={link.title}
                        className='cusor-pointer
                        hover:text-primary
                        hover:translate-x-1 duration-300
                      text-gray-200' 
                        >
                          <span>{link.title}</span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
              {/* Social Lins  */}
              <div>
                <div className='flex items-center gap-3'>
                  <a href=""
                  className=''
                  >
                    <InstagramLogo
                    className='text-3xl'
                    />
                  </a>
                   <a href=""
                  className=''
                  >
                    <FacebookLogo
                    className='text-3xl'
                    />
                  </a>
                   <a href=""
                  className=''
                  >
                    <LinkedinLogo
                    className='text-3xl'
                    />
                  </a>
                </div>
                <div className='mt-6'>
                    <div className='flex items-center gap-3'>
                    <NavigationArrow size={24} weight="regular" />
                    <p>Noida, Uttar Prodesh</p>
                    </div>
                    <div className='flex items-center gap-3 mt-1'>
                      <DeviceMobile/>
                      <p>+237655813270</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footers