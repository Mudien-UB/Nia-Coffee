import React from 'react'
import { NavLink } from 'react-router'

export default function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-amber-50">
        <h1 className="text-4xl font-bold text-amber-900">404 - Page Not Found</h1>
        <p className="text-lg text-amber-900">The page you are looking for does not exist.</p>
        <NavLink to="/" className="text-amber-900 hover:underline">Go back to Home</NavLink>
    </section>
  )
}
