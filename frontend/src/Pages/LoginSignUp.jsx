import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignUp = () =>{
return(
    <div className='loginsignup'>
     <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
            <input type="text" placeholder='Enter Your Name' />
            <input type="email" placeholder='Enter Email Address' />
            <input type="password" placeholder='Enter Your Password' />
        </div>
        <button>Continue</button>
        <p className='loginsingnup-loin'>Already have an account <span>Login hear</span></p>
        <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, I agree the terms of use & privacy policy</p>
        </div>
     </div>
    </div>
)
}

export default LoginSignUp