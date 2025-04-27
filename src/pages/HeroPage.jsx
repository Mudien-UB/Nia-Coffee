import React from "react";
import BestProductContainer from "../components/organisms/BestProductContainer";

export default function HeroPage() {


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

            <BestProductContainer />
            
        </section>
    );
}
