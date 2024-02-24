import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Singup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState();
    const obj = {};

    const btnClick = (e) => {
        if (!name || !email || !password) {
            if (!name) {
                obj.name = "please enter your name"
            }
            if (!email) {
                obj.email = "please enter your email"
            }
            if (!password) {
                obj.password = "please enter your password"
            }
            setError(obj);
        }
        else {
            if (name && password) {
                localStorage.setItem('username', name);
                localStorage.setItem('password', password);
                navigate('/login')
            }
        }

    }

    return (
        <div>
            <div className='login-border border'>
                <h1 className='text-center'>Sing up</h1>
                <div className="text-center">
                    <form action="post" className='mt-5'>
                        <input className='label-login container' type="text" placeholder='enter your name' onChange={(e) => (setName(e.target.value), setError({ ...error, name: '' }))} value={name} /><br />
                        {error?.name && <strong className='text-danger'>Please enter your name</strong>}
                        <input className='label-login container mt-3' type="text" placeholder='enter your email' value={email} onChange={(e) => (setEmail(e.target.value), setError({ ...error, email: '' }))} /><br />
                        {error?.email && <strong className='text-danger'>Please enter your e-mail</strong>}
                        <input className='label-login mt-3 container' type="password" onChange={(e) => (setPassword(e.target.value), setError({ ...error, password: '' }))} value={password} placeholder='enter password' /><br />
                        {error?.password && <strong className='text-danger'>Please enter your password</strong>}<br />
                        <Button className='mt-3' onClick={btnClick} variant="success">Submit</Button>
                    </form>
                    <p>Back to <a href="/login">Login</a></p>
                </div>
            </div>
        </div>
    )
}

export default Singup