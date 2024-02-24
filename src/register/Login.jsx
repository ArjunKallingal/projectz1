import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'
import './Register.css'

const Login = () => {

    const [uname, setUname] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const [error, setError] = useState();

  const submit = (e) => {

    const storedUname = localStorage.getItem('username');
    const storedPass = localStorage.getItem('password');
    const obj = {};

    if (!uname || !password) {
      if (!uname) {
        obj.uname = 'Please enter your name'
      }
      if (!password) {
        obj.password = 'please enter password'
      }
      setError(obj);
    }
    else {
      if ((uname === storedUname && password === storedPass) || (uname === 'admin' && password === '123')) {
        navigate('/admin-panel');
      }
      else {
        alert("incorrect username or password")
      }
    }
  }

  const handlChange = (e) => {
    setUname(e.target.value)
    setError({
      ...error ,
      uname:''
    })
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
    setError({
      ...error,
      password:''
    })
  }

    return (
        <div>
            <div className='login-border border'>
                <h1 className='text-center'>Login</h1>
                <div className="text-center">
                    <form action="post" className='mt-5'>
                        <input className='label-login container' type="text" value={uname} placeholder='enter your name' onChange={handlChange} /><br />
                        {error?.uname && <strong className='text-danger'>Please enter your name</strong>}
                        <input className='label-login mt-2 container' type="password" value={password} placeholder='enter password' onChange={handlePassword} />
                        {error?.password && <strong className='text-danger'>Please enter your password</strong>}<br />
                        <Button className='mt-3' variant="danger" onClick={submit}>Submit</Button>
                    </form>
                    <p>your have already an account? <a href="/singup">Go to singup</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login