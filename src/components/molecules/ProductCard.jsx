import React from 'react';

export default function ProductCard({ title = 'unknown', price = 0, image = '/images/menu.png' }) {
  return (
    <div className="w-64 bg-amber-50 rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden flex flex-col">
      <div className="w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-contain opacity-50"
        />
      </div>
      <div className="flex-1 p-4 flex flex-col justify-between">
        <h2 className="text-lg font-semibold text-amber-900 mb-2">{title}</h2>
        <h3 className="text-xl font-bold text-amber-700">
          {new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
          }).format(price)}
        </h3>
      </div>
      <button className="mt-4 px-4 py-2 bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition-colors duration-300 ease-in-out">
        Order Now
      </button>
    </div>
  );
}
