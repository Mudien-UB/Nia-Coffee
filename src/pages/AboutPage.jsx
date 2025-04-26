import React from 'react'

export default function AboutPage() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 flex flex-col justify-center items-center gap-10 px-4 py-12">
      <h1 className="text-4xl font-black underline underline-offset-8 text-amber-900 mb-10">
        About Us
      </h1>

      <div className="flex flex-col md:flex-row items-start gap-10 max-w-5xl px-4">
        <div className="w-max h-max flex flex-col items-center md:items-start gap-4">
          <img
            src="/images/CodeNia.png"
            alt="Nia's Photo"
            className="w-52 h-56 md:w-64 md:h-64 object-contain rounded-lg shadow-lg transition-transform ease-out duration-300 hover:scale-105"
          />
          <p className="text-center md:text-left text-amber-900 font-semibold text-lg opacity-75">
            - This is Nia, a passionate university student and the proud owner of NiaCoffee.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-amber-900">
          <p className="text-lg font-semibold">
            At NiaCoffee, we believe that coffee is more than just a drink; it's an experience. Our mission is to provide you with the finest coffee sourced from the best beans around the world, expertly roasted to perfection.
          </p>
          <p className="text-lg font-semibold">
            Our team of passionate baristas is dedicated to crafting the perfect cup of coffee for you, whether you prefer a classic espresso, a creamy latte, or a refreshing iced brew.
          </p>
          <p className="text-lg font-semibold">
            We take pride in our commitment to quality and sustainability, ensuring that every sip you take supports ethical sourcing practices.
          </p>
          <p className="text-lg font-semibold">
            Whether you're looking for a quick pick-me-up or a cozy spot to unwind, we've got you covered. Come visit us and experience the magic of coffee at NiaCoffee!
          </p>
        </div>
      </div>
    </section>
  )
}
