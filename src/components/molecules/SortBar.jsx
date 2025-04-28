import React, { useState } from 'react';
import {  BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi';

export default function SortBar({ onSelect, className }) {
  const [sortBy, setSortBy] = useState(null);
  const [order, setOrder] = useState('asc');


  const values = [
    { value: 'name', label: 'Name' },
    { value: 'price', label: 'Price' },
  ]

  const handleSelect = (value) => {
    setSortBy(value);
    if (onSelect) {
      onSelect({ sortBy: value, order });
    }
  };


  const toggleOrder = () => {
    const newOrder = order === 'asc' ? 'desc' : 'asc';
    setOrder(newOrder);
    if (onSelect) {
      onSelect({ sortBy: sortBy ?? 'id', order: newOrder });
    }
  };

  return (
    <div className={`flex gap-2 justify-end ${className}`}>
      <select
        className="flex-shrink-0 px-4 py-2 rounded-lg font-bold text-md transition duration-300 ease-in-out transform hover:scale-105 bg-amber-200 text-amber-800"
        value={sortBy || ''}
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value="" disabled>
          Sort
        </option>
        {values.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className={`flex-shrink-0 px-4 py-2 rounded-lg font-bold text-md transition duration-300 ease-in-out transform hover:scale-105 ${
              option.value === sortBy
                ? 'bg-amber-600 text-amber-50'
                : 'bg-amber-200 text-amber-800'
            }`}
          >
            {option.label}
          </option>
        ))}
      </select>

      <button
        type="button"
        className={`flex-shrink-0 px-4 py-2 rounded-lg font-bold text-md transition duration-300 ease-in-out transform hover:scale-105 bg-amber-200 text-amber-800`}
        onClick={toggleOrder}
      >
        {order === 'asc' ? (<BiUpArrowAlt className="text-amber-800 text-2xl" />) : (<BiDownArrowAlt className="text-amber-800 text-2xl" />)}
      </button>
    </div>
  );
}
