import React, { useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar'
import '../login/login.css'


const Login = () => {
    useEffect(() => {
        if(localStorage.getItem('token')){
            navigate('/');
        }
    }, [])
    const navigate = useNavigate()
    const username = useRef(null);
    const password = useRef(null);

    function login() {
        const userValue = username.current.value
        const passValue = password.current.value
        const payload = {username: userValue, password: passValue}

        fetch(`http://localhost:3001/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            localStorage.setItem('token', data.access_token)
            navigate('/')
        })
        .catch((error) => {
            console.log('ini ada error pada saat login');
        })
    }


  return (
    <>
    <Navbar/>
    <div className='login-table'>
        <div className='login-form'>
            <label htmlFor='username'>Username</label>
            <input type="text" id='username' ref={username}/>
            <label htmlFor='password'>password</label>
            <input type="password" name="" id="password" ref={password}/>
            <button className='login-button' onClick={login}>login</button>
        </div>
    </div>
    </>
  )
}

export default Login