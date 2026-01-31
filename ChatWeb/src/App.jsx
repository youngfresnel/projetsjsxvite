import React from 'react'
import Navlinks from './Component/Navlinks';
import Chatbox from './Component/Chatbox';
import Login from './Component/Login';
import Register from './Component/Register';
import Chatlist from './Component/Chatlist';

const App = () => {
  return (
    <div>
      <div className='flex lg:flex-row flex-col  w-[100%] h-screen'>
        <Navlinks/>
        <Chatlist/>
        <Chatbox/>

      </div>
      <div className='hidden'>
        <Login/>
        <Register/>

      </div>
    </div>
  )
}

export default App