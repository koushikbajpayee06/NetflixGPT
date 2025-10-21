import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
const [isSignInForm, setIsSignInForm] = useState(true);

const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm);
}
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/024bfb98-9e9d-441d-9c5f-d2c798d8e42f/web/IN-en-20251013-TRIFECTA-perspective_b6324826-0535-47c5-be5f-4f50e9663eaf_large.jpg">
        </img>
      </div>
      <form className='absolute p-12 bg-black/60 w-3/12 my-36 mx-auto right-0 left-0 text-white'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In": "Sign Up"}</h1>
        {!isSignInForm && (<input type='text' placeholder='Full Name' className='p-4 my-4 bg-gray-800 w-full  rounded'></input>)}
        <input type='text' placeholder='Email Address' className='p-4 my-4 bg-gray-800 w-full  rounded'></input>
        <input type="password" placeholder='Password' className='p-4 my-4 bg-gray-800 w-full rounded'></input>
        <button className='p-4 my-6 bg-red-600 text-white rounded font-bold  w-full'>{isSignInForm ? "Sign In": "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now": "Already registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login
