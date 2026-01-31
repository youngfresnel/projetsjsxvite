import React, {useState, useEffect} from 'react'
import {RiMore2Fill} from 'react-icons/ri';
import defaultAvatar from '../../public/assets/default.jpg'
import SearchModal from './SearchModal'
import chatData from '../data/chats'
const Chatlist = () => {

console.log(chatData);
  const [chats, setChats] = useState([]);
  useEffect(() => {
    setChats(chatData);
  },[]);


  return (
  <section className='relative hidden lg:flex flex-col items-start justify-start bg-white h-[100vh] w-[100%] md:w-[600px]'>
    <header className='flex items-center justify-between w-[100%] lg:border-b border-b-1 border-[#160303b9] p-4 sticky md:static top-0 z-[100]'>
      <main className='flex items-center gap-3'>
        <img src={defaultAvatar} className="w-[44px] h-[44px] object-cover rounded-full" alt="" />
        <span>
          <h3 className='p-0 font-semibold text-[#2A3D39] md:text-[17px]'>{"Chatfrik User"}</h3>
          <p className='p-0 font-light text-[#2A3D39] text-[15px]'>@chatfrik</p>
        </span>
      </main>
      <button className='bg-[#D9F2ED] w-[35px] h-[35px] p-2 flex items-center justify-center rounded-lg'>
        <RiMore2Fill color='#01AA85' className='w-[28px] h-[28px]'/>
      </button>
    </header>
    <div className='w-[100%] mt-[10px] px-5'>
      <header className='flex items-center justify-between'>
        <h3 className='text-[16px]'>Message ({chats?.length || 0})</h3>
        <SearchModal/>
      </header>
    </div>


    <main className='flex flex-col w-[100%] items-start mt-[1.5rem] pb-3 '>
    {chats?.map((chat) => (
        <button className=' flex w-[100%] justify-between border-b border-[#0909092c] px-5 pb-3 pt-3'>
        <div className='flex items-start gap-3'>
          <img src={defaultAvatar} alt="" className='h-[40px] w-[40px] flex rounded-full object-cover'/>
          <span>
            <h2 className='p-0 font-semibold text-[#2A3d39] text-left text-[17px]'>Destiny Franck</h2>
            <p className='p-0 font-light text-[#2A3d39] text-left text-[17px]'>Here there , How hare you</p>
          </span>
        </div>
        <p className='p-0 font-regular text-gray-400 text-left text-[11px]'>6th Febuary, 2025</p>
      </button>
    ))}
    </main>
  </section>
  )
}

export default Chatlist;