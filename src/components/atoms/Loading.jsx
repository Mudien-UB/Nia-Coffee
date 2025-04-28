import React from 'react'
import { AiOutlineLoading, AiOutlineLoading3Quarters } from 'react-icons/ai'
import { VscLoading } from 'react-icons/vsc'

export default function Loading({  className}) {
  return (
    <div className={` w-max h-max flex flex-col justify-center items-center relative ${className}`}>
      <AiOutlineLoading3Quarters className="animate-spin text-amber-600 text-6xl absolute" />
      <AiOutlineLoading className="animate-[spin_2s_linear_infinite_reverse] 100 text-amber-600 text-4xl transform rotate-180 absolute" />
    </div>
  )
}

