import React from 'react';
import '../stylesheets/navbar.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar border-b-[1px] w-auto border-slate-800 text-white text-lg flex items-center justify-around bg-[#0F172A] py-4'>
      <div className='logo hidden py-2 w-full items-center justify-center'>
        <h1 className='py-[2px] text-center font-semibold text-green-500 flex items-center justify-center'>
          <img className='h-12 w-12' src={logo} alt="logo" /> SkillSwap
        </h1>
      </div>
      <input type='search' placeholder='search here' className='bg-[#1a2336] w-[200px] px-2 py-1 outline-none rounded-xl hide' />
      <ul className='flex items-center gap-5'>
        <li><a href='#' className='cta bg-yellow-400 text-black px-5 py-2 rounded-3xl'>Become a Mentor</a></li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="h-6 w-6 stroke-white stroke-[2px] dark:stroke-grey-400">
            <path d="M7.795 17.5a3.32 3.32 0 0 0 2.205.834 3.32 3.32 0 0 0 2.205-.834M15 6.667a5 5 0 0 0-10 0c0 2.575-.65 4.338-1.375 5.505-.613.983-.919 1.475-.907 1.612.012.152.044.21.167.301.11.082.609.082 1.606.082h11.018c.997 0 1.495 0 1.606-.082.122-.09.155-.149.167-.3.011-.138-.295-.63-.907-1.614C15.65 11.006 15 9.243 15 6.668"></path>
          </svg>
        </li>
        <li>Profile</li>
        <li className='rounded-lg text-green-500'>
          <h3 className='border-[1px] border-green-500 text-sm px-2 py-1 rounded-md '><Link to="/login">Login</Link></h3>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
