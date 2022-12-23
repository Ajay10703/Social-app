import React from 'react'

const LoginCard = () => {
  return (
    <div className="col-4 login-card p-3">
            <input type="text" className='form-control mt-2 ' placeholder='Emai address or phone number'/>
            <input type="password" className='form-control mt-2 ' placeholder='password'/>
            <button className="btn my-3 btn-primary  form-control">Log in</button>
            <div className="text-center"><a href="/">Forgotten password?</a></div>
            <hr />
            <div className="d-flex py-3"><button className="btn p-2 btn-success mx-auto">Create New Account</button></div>
          </div>
  )
}

export default LoginCard