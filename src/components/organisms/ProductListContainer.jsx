import React from 'react'
import { ProductCard } from '../molecules/ProductCard'
import Loading from '../atoms/Loading'

export default function ProductListContainer({products, isLoading}) {
  
    if(isLoading) {
        return (
            <div className='w-full h-1/2 flex flex-col justify-center items-center p-10 relative'>
                <Loading className={'scale-200'} />
            </div>
        )
    }

    if(!products || products.length === 0) {
        return (
            <div className='w-full flex flex-col justify-center items-center px-10 relative'>
                <h2 className='text-2xl font-bold text-amber-900'>No products available</h2>
            </div>
        )
    }

    

    return (
    <div className='w-full flex flex-wrap gap-10 justify-center items-center px-15 relative'>

        {products.map((product) => (
            <ProductCard key={product.id} title={product.name} price={product.price} category={product.category} image={'/images/menu.png'} />
        ))}
    </div>
  )
}
