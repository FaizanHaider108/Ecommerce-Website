import React, { useState } from 'react';
import "./CSS/login.css";

const Login = () => {
    const [state, setState] = useState("Sign up");
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    // login functionality
    const login = async() => {
        console.log("Login working", formData);
        let responseData;
        await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify(formData),
            })
        .then((response) => response.json())
        .then((data) => responseData=data)

        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace("/");
        } else {
            alert(responseData.errors)
        }
    }

    // Signup Functionality
    const Signup = async() => {
        console.log("Signup working", formData);
        let responseData;
        await fetch('http://localhost:4000/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify(formData),
            })
        .then((response) => response.json())
        .then((data) => responseData=data)

        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace("/");
        } else {
            alert(responseData.errors)
        }
    }

    return (
        <div className='loginSignup'>
            <div className="loginSighup-container">
                <h1>{state}</h1>
                <div className="loginSignup-fields">
                    {
                        state === "Sign up" ?
                            <input
                                name='username'
                                value={formData.username}
                                onChange={handleChange}
                                type="text" placeholder='Your Name' /> : <></>
                    }
                    <input
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        type="email" placeholder='Email Address' />
                    <input
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        type="password" placeholder='Password' />
                </div>
                <button
                    onClick={() => { state === "Sign up" ? Signup() : login() }}
                >
                    Continue
                </button>
                {state === "Sign up" ?
                    <p onClick={() => { setState("login") }} className="loginSignup-login">
                        Already have an Account <span>Login here</span>
                    </p>
                    :
                    <p onClick={() => { setState("Sign up") }} className="loginSignup-login">
                        Create an Account ? <span>Click here</span>
                    </p>
                }
                <div className="loginSignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>I agree to the terms and conditions</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
