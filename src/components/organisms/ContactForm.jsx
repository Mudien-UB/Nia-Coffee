import React, { useState } from 'react'

export default function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });
    const isEmpty = (value) => !value || value.trim() === '';


    const validationName = (name) => {

        setFormData((prev) => ({ ...prev, name }));
        if(isEmpty(name)){
            setErrors((prev) => ({ ...prev, name: 'Name is required' }));
        }
        else if (name.length < 3) {
            setErrors((prev) => ({ ...prev, name: 'Name must be at least 3 characters long' }));
        }
        else{
            setErrors((prev) => ({ ...prev, name: '' }));
        }
        }
        const validationEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setFormData((prev) => ({ ...prev, email }));
            if (isEmpty(email)) {
                setErrors((prev) => ({ ...prev, email: 'Email is required' }));
            } else if (!emailRegex.test(email)) {
                setErrors((prev) => ({ ...prev, email: 'Invalid email format' }));
            } else {
                setErrors((prev) => ({ ...prev, email: '' }));
            }
        }
        const validationMessage = (message) => {
            setFormData((prev) => ({ ...prev, message }));
            if (isEmpty(message)) {
                setErrors((prev) => ({ ...prev, message: 'Message is required' }));
            } else if (message.length < 10) {
                setErrors((prev) => ({ ...prev, message: 'Message must be at least 10 characters long' }));
            } else {
                setErrors((prev) => ({ ...prev, message: '' }));
            }
        }


        const handleSubmit = (e) => {
            e.preventDefault();
            alert('Form submitted successfully!');

            // Here you can add your form submission logic
            console.log('Form Data:', formData);
        }

        const handleBlur = () => {
            setErrors({ name: '', email: '', message: '' });
        }

        return (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-lg font-bold text-amber-900">Name</label>
                    <input type="text" id="name" value={formData.name} onBlur={handleBlur} className="border border-amber-900 rounded-lg p-2" placeholder='Fulan Rahman' onChange={(e) => validationName(e.target.value)} />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-lg font-bold text-amber-900">Email</label>
                    <input type="email" id="email" value={formData.email} onBlur={handleBlur} className="border border-amber-900 rounded-lg p-2" placeholder='fulanrahman@fulan.com' onChange={(e) => validationEmail(e.target.value)} />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-lg font-bold text-amber-900">Message</label>
                    <textarea id="message" value={formData.message} rows={4} onBlur={handleBlur} className="border border-amber-900 rounded-lg p-2" placeholder='Your message here...' onChange={(e) => validationMessage(e.target.value)} />
                    {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
                </div>
                <button
                    type="submit"
                    disabled={!errors.name || !errors.email || !errors.message}
                    className={`bg-amber-900 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:bg-amber-800 hover:scale-105 ${!errors.name || !errors.email || !errors.message ? 'opacity-50 cursor-not-allowed' : ''}`}
                >Send</button>
            </form>
        )
    }
