import React from 'react'
import "./CSS/login.css"
const login = () => {
    return (
        <div className='loginSignup'>
            <div className="loginSighup-container">
                <h1>Sign up</h1>
                <div className="loginSignup-fields">
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='Email Address' />
                    <input type="password" placeholder='Password' />
                </div>
                <button>
                    Continue
                </button>
                <p className="loginSignup-login">
                    Already have an Accoutn <span>Login here</span>
                </p>
                <div className="loginSignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>I agree to the terms and conditions</p>
                </div>
            </div>
        </div>
    )
}

export default login