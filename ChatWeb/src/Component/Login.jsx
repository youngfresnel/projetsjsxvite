import React, { useState } from 'react'
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa'

const Login = () => {
   
    const [userData, setUserData] = useState({email:'',password:''});
    const handleChangeUSerData = (e) => {
        const {name, value} = e.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]:value
        }))
    }; 

    // console.log(userData.email)
    // console.log(userData.password)

    const handleAuth = async () => {
        try{
            alert("Login Successful")
        }catch(error){
            console.log(error)
        }
    }

  return (
       <section className="flex flex-col justify-center items-center h-[100vh] background-image">
            <div className='bg-white shadow-lg p-5 rounded-xl h-[27rem] w-[20rem] flex flex-col items-center justify-center'>
                <div className='mb-10'>
                    <h1 className='text-center text-[28px] font-bold'>Sign in</h1>
                    <p className='text-center text-sm text-gray-400'>Welcom back login to continues</p>
                </div>
                <div className='w-full'>
                    <input type="email" name='email' onChange={handleChangeUSerData}  className='border border-green-200 w-full p-2 rounded-md bg-[#01aa851d] text-[#004939f3] mb-3 font-medium outline-none placeholder:text-[#00493958]' placeholder='Email'/>
                    <input type="password" name='password' onChange={handleChangeUSerData} className='border border-green-200 w-full p-2 rounded-md bg-[#01aa851d] text-[#004939f3] mb-3 font-medium outline-none placeholder:text-[#00493958]' placeholder='Password'/>
                </div>
                <div className="w-full">
                    <button className='bg-[#01aa85] text-white font-bold w-full p-2 rounded-md flex items-center gap-2 justify-center'>
                        Login <FaSignInAlt/>
                    </button>
                </div>
                <div className='mt-5 text-center text-gray-400 text-sm'>
                    <button onClick={handleAuth}>Don't have an account yet? sign up  </button>
                </div>
            </div>
       </section>
  )
}

export default (Login)