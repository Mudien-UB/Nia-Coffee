import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className='flex justify-evenly items-center font-black text-lg'>
      {navigation.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) => 
            `font-bold hover:text-amber-300 transition-colors px-3 py-1 rounded-lg ${
              isActive ? 'text-amber-300 bg-amber-800 bg-opacity-60 underline underline-offset-5' : 'text-amber-100'
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}
