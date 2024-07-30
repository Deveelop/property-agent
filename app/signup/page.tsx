'use client'
import React from 'react'
import Button from '@/components/Button'

const page = () => {
  return (
    <section className='w-full mt-10 max-w-[352px] min-h-[652px] h-full mx-auto'>
      <div className=' pt-20 px-6 py-8'>
        <h1 className=' font-bold text-lg mb-5'>Create Account</h1>
        <form className=' flex flex-col gap-y-4' >
            <input placeholder='FULL NAME' className="border border-orange-200 outline-none rounded focus:border-orange-600 w-full px-4 h-14 text-sm" required/>
            <input placeholder='EMAIL' className="border border-orange-200 outline-none rounded focus:border-orange-600 w-full px-4 h-14 text-sm" required/>
            <input placeholder='PASSWORD' className="border border-orange-200 outline-none rounded focus:border-orange-600 w-full px-4 h-14 text-sm" required/>
            <input placeholder='CONFIRM PASSWORD' className="border border-orange-200 outline-none rounded focus:border-orange-600 w-full px-4 h-14 text-sm" required/>
            <div className=' flex justify-center'>
            <Button onClick={() => {
        console.log('desling')
      }} type='button' title='Login' variant=" bg-orange-500 hover:bg-orange-600 transition w-full lg:max-w-[162px] h-16 text-white" />
      </div>
        </form>
      </div>
    </section>
  )
}

export default page;
