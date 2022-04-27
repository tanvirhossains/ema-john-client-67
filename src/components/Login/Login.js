import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../_firebase-init';
import './Login.css'


const Login = () => {
    const [email, serEamil] = useState()
    const [password, setPassword] = useState()


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        serEamil(event.target.value)
    }

    const handlePassword = event => {
        setPassword(event.target.value)
    }


    if (user) {
        navigate(from, { replace: true })
    }


    const handleFormSubmitt = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }


    return (
        <div className='form-container'>
            <div>
                <h1>Log in</h1>
                <form className='form' onSubmit={handleFormSubmitt}>
                    <div className='input-group'>
                        <label htmlFor="Email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePassword} type="password" name="password" id="" required />
                        </div>
                        <input className='submit-btn' type="submit" value="log in" required />
                        <p>{error?.message}</p>
                    </div>
                    <p>
                        New to Ema-john? <Link to="/signin">Create an account</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;