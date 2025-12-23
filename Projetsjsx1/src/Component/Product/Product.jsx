import React from 'react'
import { Star, StarFour } from 'phosphor-react';
import Img1 from '../../assets/women/women.png';
import Img2 from '../../assets/women/women2.jpg'
import Img3 from '../../assets/women/women3.jpg'
import Img4 from '../../assets/women/women4.jpg'
import Img5 from '../../assets/women/women2.jpg'

const ProductData = [
    {
        id:1,
        img:Img1,
        title:'Women Ethnic',
        rating:5.0,
        color:'white',
        aosDeplay:'0',
    },
    {
        id:2,
        img:Img2,
        title:'Women western',
        rating:4.5,
        color:'red',
        aosDeplay:'200',
    },
    {
        id:3,
        img:Img3,
        title:'Googles',
        rating:5.0,
        color:'brown',
        aosDeplay:'400',
    },
    {
        id:4,
        img:Img4,
        title:'Printed T-Shirt',
        rating:4.4,
        color:'yellow',
        aosDeplay:'0',
    },
    {
        id:5,
        img:Img5,
        title:'Fashin T-shirt',
        rating:4.5,
        color:'pink',
        aosDeplay:'0',
    },
];

const Product = () => {
  return (
    <section  id="product-section" >
        <div className='mt-14 mb-12'>
            <div className='container'>
                {/* Header section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p  data-aos='fade-up' className='text-sm text-primary'>Top selling Product for you </p>
                    <h1  data-aos='fade-up' className='text-3xl font-bold'>Products</h1>
                    <p  data-aos='fade-up' className='text-xs text-gray-400'>
                        Ici on vous monte les produits accessible a tous dans ce chapitre.
                        Ainsi tous les produit sont regrouper par un bon ordre et referencer 
                        dans vos achats 
                    </p>
                </div>
                {/* Body section */}
                <div>
                    <div
                    className='grid grid-cols-1 sm:grid-cols-3
                    md:grid-cols-4 lg:grid-cols-5 place-items-center
                    gap-5'
                    >
                        {/* card section */}
                        {
                            ProductData.map((data) => (
                                <div 
                                data-aos='fade-up'
                                data-aos-delay={data.aosDelay}
                                key={data.id}
                                className='space-y-3'
                                > {/* ← Ajoute key */}
                                    <img 
                                    src={data.img} 
                                    alt={data.title}
                                    className='h-[220px] w-[150px]
                                    object-cover rounded-md'
                                    />
                                    <div>
                                        <h3 className='font-semibold'>{data.title}</h3>
                                        <p className='text-sm text-gray-600'>{data.color}</p>
                                        <div className='flex items-center gap-1'>
                                            <Star weight='fill' className='text-yellow-400'/>
                                            <span>{data.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* view all button */}
                    <div className='flex justify-center'>
                        <button className='text-center mt-10 
                        cursor-pointer bg-primary text-white py-1
                        px-5 rounded-md'>View all button</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Product;
