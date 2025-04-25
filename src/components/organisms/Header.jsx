import React from 'react';
import Navbar from '../molecules/Navbar';

export default function Header() {
  return (
    <header className="w-full h-max bg-amber-800 text-amber-50 py-5 px-10 mb-5 shadow-lg fixed top-0 left-0 z-10">
      <div className=" mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold hover:text-amber-300 transition-colors">
          NiaCoffee
        </h1>
        <Navbar />
        <div className='flex gap-2'>
          <span className='w-5 h-5 rounded-full cursor-pointer bg-amber-50 border-3 border-amber-50 hover:bg-transparent transition-colors'></span>
          <span className='w-5 h-5 rounded-full cursor-pointer bg-amber-400 border-3 border-amber-400 hover:bg-transparent transition-colors'></span>
          <span className='w-5 h-5 rounded-full cursor-pointer bg-amber-900 border-3 border-amber-900 hover:bg-transparent transition-colors'></span>
        </div>
      </div>
    </header>
  );
}