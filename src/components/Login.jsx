import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';

const Login = () => {
const [isSignInForm, setIsSignInForm] = useState(true);
const [errorMessage, setErrorMessage] = useState(null);

const name = useRef(null);
const email = useRef(null);
const password = useRef(null);


const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm);
}

const handleButtonClick = ()=>{
  const nameValue = !isSignInForm ? name.current.value : null;
  // Validate the form data
  // console.log(name.current.value)
  console.log(email.current.value)
  console.log(password.current.value)
  
  const message =  checkValidData(nameValue,email.current.value,password.current.value);
  // console.log(message);
  setErrorMessage(message);

  // Sign In /Sign Up
}
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/024bfb98-9e9d-441d-9c5f-d2c798d8e42f/web/IN-en-20251013-TRIFECTA-perspective_b6324826-0535-47c5-be5f-4f50e9663eaf_large.jpg">
        </img>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='absolute p-12 bg-black/60 w-3/12 my-36 mx-auto right-0 left-0 text-white'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In": "Sign Up"}</h1>
        {!isSignInForm && (<input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 bg-gray-800 w-full  rounded'></input>)}
        <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 bg-gray-800 w-full  rounded'></input>
        <input ref={password} type="password" placeholder='Password' className='p-4 my-4 bg-gray-800 w-full rounded'></input>
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-600 text-white rounded font-bold  w-full' onClick={handleButtonClick}>{isSignInForm ? "Sign In": "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now": "Already registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login
