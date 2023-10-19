 
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

export default function Signup() {
 const [formdata , setformdata]= useState({});
 const [error,seterror] = useState(null)
 const [loading,setloading] =useState(false)
 const navigate = useNavigate()
  const handlechange = (e)=>{
        setformdata({
          ...formdata,
          [e.target.id]: e.target.value,
        })
  }
  const handlesubmit = async (e)=>{
    e.preventDefault();
    try {
      
      setloading(true)
      const res =  await fetch('/api/auth/signup',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(formdata)
  
      })
      const data = await res.json()
      console.log(data)
      if(data.success === false){
        seterror(data.message);
        setloading(false);
        return ;
      }
      setloading(false)
      seterror(null)
      navigate('/sign-in')
    } catch (error) {
      setloading(false)
      seterror(error.message)
    }
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handlesubmit} className='flex flex-col gap-4'>
        <input  onChange={handlechange} type="text" className='border rounded-lg p-3' id="username" placeholder='username' />
        <input  onChange={handlechange}type="email" className='border rounded-lg p-3' id="email" placeholder='email' />
        <input  onChange={handlechange}type="password" className='border rounded-lg p-3' id="password" placeholder='password' />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading?'loading...':'sign up'}</button>
      </form>
        <div className='flex gap-2'>
          <p>Have an account Already?</p>
          <Link to='/sign-in' className=' text-blue-700'>sign in</Link>
        </div>
        {error && <p className='text-red-700 mt-5'>{error}</p>}
    </div>
  )
}
