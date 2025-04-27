import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBestCoffees } from '../../redux/reducers/BestProductSlice';
import ProductCard from '../molecules/ProductCard';

export default function BestProductContainer() {

    const dispatch = useDispatch();
    const { value, status, error } = useSelector((state) => state.BestProduct);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchBestCoffees());
        }
    }, [status, dispatch]);

    return (
        <div className="max-w-6xl h-1/2 bg-gradient-to-t from-amber-100 to-transparent p-6 rounded-xl">
            <h2 className="text-5xl font-bold underline underline-offset-8 text-amber-900 mb-10">Best Seller</h2>
            {status === "loading" && (
                <div className="flex justify-center items-center">
                    <img src="/images/loading.gif" alt="Loading..." className="w-16 h-16 animate-spin" />
                </div>
            )}
            {status === "failed" && (
                <div className="text-red-500 text-center">
                    <p>{error}</p>
                </div>
            )}
            {status === "succeeded" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-5">
                    {value.map((product) => (
                        <ProductCard
                            key={product.idDrink}
                            title={product.strDrink}
                            price={15000}
                            image={'/images/menu.png'}
                        />
                    ))}
                </div>
            )}

        </div>
    )
}
