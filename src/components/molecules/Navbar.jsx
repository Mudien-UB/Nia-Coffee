import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='flex justify-evenly items-center font-black text-lg'>
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          `font-bold hover:text-amber-300 transition-colors px-3 py-1 rounded-lg ${
            isActive ? 'text-amber-300 bg-amber-800 bg-opacity-60 underline underline-offset-5' : 'text-amber-100'
          }`
        }
      >
        Home
      </NavLink>
      
      <NavLink 
        to="/about"
        className={({ isActive }) => 
          `hover:text-amber-300 transition-colors px-3 py-1 rounded-lg ${
            isActive ? 'text-amber-300 bg-amber-800 bg-opacity-60 underline underline-offset-5' : 'text-amber-100'
          }`
        }
      >
        About
      </NavLink>
      
      <NavLink 
        to="/contact"
        className={({ isActive }) => 
          `hover:text-amber-300 transition-colors px-3 py-1 rounded-lg ${
            isActive ? 'text-amber-300 bg-amber-800 bg-opacity-60 underline underline-offset-5' : 'text-amber-100'
          }`
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}