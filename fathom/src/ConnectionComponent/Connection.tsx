// import React from 'react'
import { Maskgroup, Vector } from '../constantes/Imgpath'
import LineComponent from './LineComponent';
import ScreenGroup from './conditionner';
// import Phoneconnection from './Phoneconnection';
import EmailConnection from './EmailConnection';
import Phoneconnection from './Phoneconnection';
import { memo } from 'react';

export const Connection = () => {
  return (
    <div className=' flex flex-row  w-screen h-screen bg-white' >
      <div className='w-187/360 '>
        <img src={Maskgroup} alt="#" className='rounded-none flex w-full h-full'/>
      </div>
      <div className='w-158 min-w-[232] rounded mx-60 mt-5'>
        <div className=' flex '>
          <img src={Vector} alt="#" className='mt-5' />
        </div>
        <div className='mt-10'>
          <h1 className='font-bold text-black text-7xl'>We’ve got your back.</h1>
          <p className="text-gray-500 text-2xl mt-2">Track your spending, avoid surprises, and stay in control effortlessly.</p>
        </div>
        <div>
          <div className='translate-y-20'>
            <LineComponent width='432' />
          </div>
          <div className='' >
            <ScreenGroup   boutton={[{label:'Email', content:<EmailConnection/>},
            {label:'Phone number', content:<Phoneconnection/>}]}/>
          </div>
        
        </div>
      </div>
    </div>
  )
}
export default memo(Connection);