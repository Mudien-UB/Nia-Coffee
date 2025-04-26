import React from "react";
import ProductCard from "../components/molecules/ProductCard";

export default function HeroPage() {
    const productBestSeller = [
        {
            id: 1,
            title: "Espresso",
            price: 20000,
            image: "/images/menu.png",
        },
        {
            id: 2,
            title: "Cappuccino",
            price: 25000,
            image: "/images/menu.png",
        },
        {
            id: 3,
            title: "Latte",
            price: 30000,
            image: "/images/menu.png",
        },
        {
            id: 4,
            title: "Mocha",
            price: 35000,
            image: "/images/menu.png",
        },
    ];

    return (
        <section className="w-full min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 flex flex-col justify-center items-center gap-10 px-4 py-12">

            <div className="max-w-4xl h-[80vh] flex flex-col justify-center items-center mx-auto text-center space-y-8">

                <div className="animate-fade-in-up delay-200">
                    <img
                        src="/images/CodeNia.png"
                        alt="logo"
                        className="relative w-48 h-48 md:w-64 md:h-64 object-contain aspect-square mx-auto transition-transform ease-out duration-300 hover:scale-105"
                    />
                </div>

                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-amber-900 animate-fade-in-down">
                        Coffee Shop
                    </h1>
                    <h3 className="text-2xl md:text-3xl text-amber-800 font-medium animate-fade-in-up delay-100">
                        Code running on a cup of coffee
                    </h3>
                </div>

                <button className="mt-8 px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ease-in-out">
                    Order Your Coffee
                </button>
            </div>

            <div className="max-w-6xl h-1/2 bg-gradient-to-t from-amber-100 to-transparent p-6 rounded-xl">
                <h2 className="text-5xl font-bold underline underline-offset-8 text-amber-900 mb-10">Best Seller</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-5">
                    {productBestSeller.map((product) => (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>
            </div>

        </section>
    );
}
