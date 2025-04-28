import React from 'react'
import Loading from '../components/atoms/Loading'

export default function LoadingPage() {
  return (
    <section className='w-full min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 flex flex-col justify-center items-center gap-10 px-4 py-12'>
        <Loading className={'scale-200'} />
    </section>
  )
}
