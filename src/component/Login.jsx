import React, { useState } from 'react'
import '../stylesheets/login.css'
import loginimage from '../assets/login.png'
import { Link } from 'react-router-dom'
const Login = () => {
  let handleForm = (e) => {
    console.log(e.target);
  }
  return (
    <div className='text-white main flex-col flex items-center justify-center bg-[#020617] overflow-hidden h-screen w-screen'>

      <div className='box2 flex border-[1px] rounded-lg pr-10 py-10 border-slate-800 items-center justify-center'>
        <div className='container h-3/6 w-3/5 object-cover flex items-center justify-center'>
          <img src={loginimage} className=' h-[400px] ' />
        </div>
        <div className='box'>
          <h1 className=' text-3xl mb-5 text-center'>Login</h1>
          <form onSubmit={handleForm} className='myform bg-[#020617]  rounded-lg py-9 border-[1px] border-slate-800 p-3 flex items-center flex-col gap-6 px-5'>
            <div className='flex flex-col relative'>
              <span className=' text-slate-500 rounded-lg bg-[#020617] absolute top-[-10px] px-1 left-[10px] text-sm'> Email</span> <input type="email" name='email' required className=' txtbox bg-transparent border-[1px] border-slate-800 rounded-lg px-2 py-2 w-80 outline-none focus:border-green-500' />
            </div>
            <div className='flex flex-col relative'>
              <span className=' text-slate-500 rounded-lg bg-[#020617] absolute top-[-10px] px-1 left-[10px] text-sm'>Password</span> <input type="password" required name='password' className=' txtbox bg-transparent border-[1px] border-slate-800 rounded-lg px-2 py-2 w-80 focus:border-green-500 outline-none' />
            </div>
            <h4 className=' font-normal text-white flex gap-1'>Don't have an account? <h3 className='text-green-500'><Link to="/register">Sign Up</Link></h3></h4>
            <input type="submit" value='Sign in' className=' bg-green-500 px-4 text-black font-semibold text-md rounded-lg py-1 cursor-pointer' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login