'use client'
import Button from '@/components/Button';
import React from 'react'

const Login = () => {
  return (
    <section className='w-full mt-10 max-w-[352px] min-h-[652px] h-full mx-auto'>
      <div className=' pt-20 px-6 py-8'>
      <h1 className=' font-bold text-lg'>Login</h1>
      <form className=' flex flex-col gap-y-4' >
        <label>Please sign in to continue</label>
      <input placeholder='Email*' className="border border-orange-200 outline-none rounded focus:border-orange-600 w-full px-4 h-14 text-sm" required/>
      <input placeholder='Password*' className="border border-orange-200 outline-none rounded focus:border-orange-600 w-full px-4 h-14 text-sm" required/>
      <div className=''>
      <Button onClick={() => {
        console.log('desling')
      }} type='button' title='Login' variant=" bg-orange-500 hover:bg-orange-600 transition w-full lg:max-w-[162px] h-16 text-white" />
      </div>
    </form>
    </div>
    </section>
  )
}

export default Login;
