import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import ContactForm from '../components/organisms/ContactForm'

export default function ContactPage() {
    return (
        <section className='w-full min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 flex flex-col justify-center items-center gap-10 px-4 py-12'>
            <h1 className="text-4xl font-black underline underline-offset-8 text-amber-900 mb-24 -mt-5">
                Contact Us
            </h1>
            <div className='w-full flex justify-center items-center'>

                <div className="flex flex-col md:flex-row items-start gap-10 max-w-6xl px-4">
                    <div className="w-full md:w-1/2">
                        <ContactForm />
                    </div>

                    <div className="flex flex-col gap-6 text-amber-900 w-full md:w-1/2">
                        <p className="text-lg font-semibold">
                            For inquiries, feedback, or just to say hello, feel free to reach out to us at:
                        </p>

                        <p className="text-lg font-semibold">
                            Instagram:
                            <a href="https://instagram.com/nia_coffee" className="text-amber-900 hover:underline flex items-center gap-2">
                                <FaInstagram className="text-2xl" /> @nia_coffee
                            </a>
                        </p>

                        <p className="text-lg font-semibold">
                            WhatsApp:
                            <a href="https://wa.me/+6281234567890" className="text-amber-900 hover:underline flex items-center gap-2">
                                <FaWhatsapp className="text-2xl" /> +62 812-3456-7890
                            </a>
                        </p>
                    </div>


                </div>
            </div>
        </section>
    )
}
