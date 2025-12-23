import React from 'react'
import Img1 from '../../assets/shirt/shirt.png'
import Img2 from '../../assets/shirt/shirt2.png'
import Img3 from '../../assets/shirt/shirt3.png'
import { Star } from 'phosphor-react'
import { data } from 'autoprefixer'

const productsData = [
        {
            id:1,
            img:Img1,
            title:'Casual Wear',
            description:
            "ici il s'agit d'un vetement tres important dans le secteur de la mode.Nous somme actuellement dans une promotion speciale. Un vetement achetr egal a un vetement offer ",
        },
          {
            id:2,
            img:Img2,
            title:'Printed shirt',
            description:
            "ici il s'agit d'un vetement tres important dans le secteur de la mode.Nous somme actuellement dans une promotion speciale. Un vetement achetr egal a un vetement offer ",
        },
          {
            id:3,
            img:Img3,
            title:'Women shirt',
            description:
            "ici il s'agit d'un vetement tres important dans le secteur de la mode.Nous somme actuellement dans une promotion speciale. Un vetement achetr egal a un vetement offer ",
        },
]

const Topproduct = () => {
  return (
    <div>
        <div className='container'>
            {/* Header section */}
            <div className='text-left mb-24'>
                <p data-aos='fade-up' className='text-sm text-primary'>
                    Top Rating Product for you
                </p>
                <h1 data-aos='fade-up' className='text-3xl font-bold'>
                   Best Product
                </h1>
                <p data-aos='fade-up' className='text-1xl text-gray-400'>
                    Ici on retrouve toutes les production du jour, 
                    semaine , mois et annee.Pour vous monter ma bonne fois 
                </p>
            </div>
            {/* Body section */}
            <div
            className='grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-3 gap-20 md:gap-5 place-items-center'
            >
                {
                    productsData.map((data)=>(
                        <div data-aos='zoom-in'
                        className=' rounded-2xl bg-white dark:bg-gray-800
                        hover:bg-black/80 dark:hover:bg-primary
                        hover:text-white relative shadow-xl
                        duration-high group max-w-[300px] top-5'
                        >
                            {/* image section */}
                            <div className='h-[170px]'>
                                <img src={data.img} alt=''
                                className='max-w-[140px] block mx-auto 
                                transform -transform-y-20 group-hover:scale-105 duration-300
                                drop-shadow-md'
                                />
                            </div>
                            {/* details sectio */}
                            <div className='p-4 text-center'>
                                {/* start rating */}
                                <div className='w-full flex items-center 
                                justify-center gap-1'>
                                    <Star size={24} weight='fill' className='text-yellow-500'/>
                                    <Star size={24} weight='fill' className='text-yellow-500'/>
                                    <Star size={24} weight='fill' className='text-yellow-500'/>
                                    <Star size={24} weight='fill' className='text-yellow-500'/>
                                </div>
                                <h1 className='text-xl font-blod'>{data.title}</h1>
                                <p
                                className='text-gray-400
                                group-hover:text-white
                                duration-300 text-sm line-clamp-2'>{data.description}
                                </p>
                                <button className='bg-primary hover:scale-105
                                duration-300 text-white py-1 px-4
                                rounded-full mt-4 group-hover:bg-white
                                group-hover:text-primary'>
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Topproduct
