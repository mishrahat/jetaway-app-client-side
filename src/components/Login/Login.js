import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import google from '../../assets/images/google-logo.png';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInWithGoogle } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const onSubmit = data => {
        console.log(data)
        reset();
    };
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className='container'>
            <h1 style={{ fontFamily: 'Poppins', fontWeight: '600' }} className='text-center'>Welcome Back <br /> To Jetaway.</h1>
            <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                <input className='w-50 form-input' {...register("email", { required: true, maxLength: 20 })} placeholder='email' />
                <br />
                <input className='mt-3 w-50 form-input' {...register("password")} placeholder='password' />
                <br />
                <input className='mt-3 form-btn' type="submit" value='Login' />
            </form>
            <div className='other-btn'>
                <p style={{ fontFamily: 'Poppins' }}>New To Jetaway? <Link to='/register'>Register</Link></p>
                or
                <p style={{ fontFamily: 'Poppins' }}><button onClick={handleGoogleLogin}>Login With <img src={google} alt="" /></button></p>

            </div>
        </div>
    );
};

export default Login;