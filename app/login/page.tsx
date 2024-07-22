import React from 'react'

const Login = () => {
  return (
    <section className='w-full mt-10 max-w-[352px] min-h-[652px] h-full mx-auto'>
        <h1 className=''>Login</h1>
    <form className=' flex flex-col gap-y-4' >
        
      <input placeholder='Email*' className="border border-orange-200 outline-none rounded focus:border-orange-600 w-full px-4 h-14 text-sm" required/>
      <input placeholder='Password*' className="border border-orange-200 outline-none rounded focus:border-orange-600 w-full px-4 h-14 text-sm" required/>
     
    </form>
    </section>
  )
}

export default Login;
