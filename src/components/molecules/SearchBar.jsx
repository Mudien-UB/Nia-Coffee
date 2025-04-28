import React from 'react';
import { BiSearch } from 'react-icons/bi';

export default function SearchBar({ onChange, onSubmit, className }) {
  return (
    <form onSubmit={onSubmit} className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-full">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500">
          <BiSearch size={25} />
        </span>
        <input
          type="text"
          onChange={onChange}
          placeholder="Search..."
          className="border border-amber-400 rounded-lg p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-amber-500 w-full"
        />
      </div>
    </form>
  );
}
