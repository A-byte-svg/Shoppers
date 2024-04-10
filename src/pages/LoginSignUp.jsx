import React from 'react'
import './Css/loginsignup.css'
export const LoginSignUp = () => {
  return (
    <div className='login-signup'>

      <div className="loginsignup-container">
        <h1>Sign-Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Enter Your Name' />
          <input type="email" placeholder='Enter Your Email' />
          <input type="password" placeholder='Enter Your Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an Account? <span>Login Here!</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='check' />
          <p>By Continuing, I Agree To the Terms of Use & Privacy Policy.</p>
        </div>
      </div>
    </div>
  )
}
