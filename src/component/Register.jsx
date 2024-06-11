import React, { useState } from 'react'
import '../stylesheets/register.css'
import { Link } from 'react-router-dom'

import registerimage from '../assets/register.png'

const Register = () => {
  let handleForm = (e) => {
    console.log(e.target);
  }
  return (
    <div className='main text-white main flex-col flex items-center justify-center bg-[#020617] overflow-y-hidden h-screen'>
      <div className='box3 flex border-[1px] rounded-lg pr-10 py-10 border-slate-800 items-center justify-center'>

        <div className='container h-3/6 w-3/5 object-cover flex items-center justify-center'>
          <img src={registerimage} className=' h-[400px] image ' />
        </div>
        <div className=' box'>
          <h1 className='text-center text-3xl mb-5 '>Register</h1>
          <form onSubmit={handleForm} className='border-[1px] rounded-lg border-slate-800 p-3 flex items-center flex-col gap-6 py-4 px-5'>
            <div className='flex flex-col relative'>
              <label htmlFor='imageupload'>
                <input
                  type='file'
                  id='imageupload'
                  className='hidden'
                />
                <div className='profile size-12 rounded-full bg-white cursor-pointer' >
                  <img src='https://static.vecteezy.com/system/resources/previews/026/625/675/non_2x/user-icon-symbol-design-illustration-vector.jpg' alt='Profile' className='rounded-full' />
                </div>
              </label>
            </div>
            <div className='flex flex-col relative'>
              <span className=' text-slate-500 rounded-lg bg-[#020717] absolute top-[-10px] px-1 left-[10px] text-sm'> Username</span> <input type="text" name='text' required className=' txtbox bg-transparent border-[1px] border-slate-800 rounded-lg px-2 py-2 w-80 outline-none focus:border-green-500' />
            </div>
            <div className='flex flex-col relative'>
              <span className=' text-slate-500 rounded-lg bg-[#020717] absolute top-[-10px] px-1 left-[10px] text-sm'> Email</span> <input type="email" name='email' required className=' txtbox bg-transparent border-[1px] border-slate-800 rounded-lg px-2 py-2 w-80 outline-none focus:border-green-500' />
            </div>
            <div className='flex flex-col relative'>
              <span className=' text-slate-500 rounded-lg bg-[#020717] absolute top-[-10px] px-1 left-[10px] text-sm'>Password</span> <input type="password" required name='text' className=' txtbox bg-transparent border-[1px] border-slate-800 rounded-lg px-2 py-2 w-80 focus:border-green-500 outline-none' />
            </div>
            <div className='flex flex-col relative'>
              <span className=' text-slate-500 rounded-lg bg-[#020717] absolute top-[-10px] px-1 left-[10px] text-sm'>Confirm Password</span> <input type="password" required name='password' className=' txtbox bg-transparent border-[1px] border-slate-800 rounded-lg px-2 py-2 w-80 focus:border-green-500 outline-none' />
            </div>
            <h4 className=' font-normal text-white flex gap-1'>Already have an account? <h3 className='text-green-500'><Link to="/login">Sign in</Link></h3></h4>

            <input type="submit" value='Sign Up' className=' bg-green-500 px-4 text-black font-semibold text-md rounded-lg py-1 cursor-pointer' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register