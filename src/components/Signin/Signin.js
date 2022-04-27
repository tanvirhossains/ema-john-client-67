import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../_firebase-init';

const Signin = () => {

        const [email, setEmail] = useState()
        const [password, setPassword] = useState()
        const [confirmPassword, setConfirmedPassword] = useState()
        const [error, setError] = useState()
        const navigate = useNavigate()


        const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)


        const handleEmailBlur = (event) => {
            setEmail(event.target.value)

        }
        const handlePasswordBlur = (event) => {
            setPassword(event.target.value)
        }

        const handleConfirmPassword = event => {
            setConfirmedPassword(event.target.value)
        }

    const handleCreateUser = (event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            setError('password do not matched')
            return
        }
        if (password.length < 6) {
            setError('Password must be a 6 characters or longer')
            return
        }
        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/shop')
    }

    return (
        <div className='form-container'>
            <div>
                <h1>Sign Up</h1>
                <form className='form' onSubmit={handleCreateUser}>
                    <div className='input-group'>
                        <label htmlFor="Email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="confirm-password" > Confirm Password</label>
                        <input onBlur={handleConfirmPassword} type="confirm-password" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='submit-btn' type="submit" value="Sign up" required />

                    <p>
                        Account alrealy exist? <Link to="/login">Log in</Link>
                    </p>

                    <div className='hr-line'>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signin;