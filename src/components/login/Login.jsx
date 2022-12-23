import React from 'react'
import './login.css'
const Login = () => {
  return (
    <div id='login-page' >
      <div className="container login-box" >
        <div className="row">
          <div className="col-6 p-5"> <h1 className='app-title text-primary'>X-Shadowbook</h1>
            <span className='app-discription'>X-Shadowbook is a clone web app of facebook made with react js.</span> </div>
          <div className="col-4 login-card p-3">
            <input type="text" className='form-control mt-2 ' placeholder='Emai address or phone number' />
            <input type="password" className='form-control mt-2 ' placeholder='password' />
            <button className="btn my-3 btn-primary  form-control">Log in</button>
            <div className="text-center"><a href="/">Forgotten password?</a></div>
            <hr />
            <div className="d-flex py-3"><button className="btn p-2 btn-success mx-auto" data-toggle="modal" data-target="#ModalCenter">Create New Account</button></div>
            <div class="modal fade" id="ModalCenter" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <div class="modal-title" id="ModalLongTitle"><h5>Sign up</h5><span>It's quick and easy</span>
                    </div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div className="input-group  mt-2">
                      <input type="text" className=' form-control ' placeholder='First Name' />
                      <input type="text" className=' form-control ' placeholder='Surname' />
                    </div>
                    <input type="text" className='form-control mt-2 ' placeholder='Emai address or phone number' />
                    <input type="password" className='form-control mt-2 ' placeholder='password' />
                    <label htmlFor="dob"><span className='dob text-muted'>Date of birth</span></label>
                    <input type="date" name="dob" className='form-control' />
                    <label htmlFor="gender"><span className='gen text-muted'>Gender</span></label>
                    <div className="d-flex justify-content-between mx-2">
                      <div className="radio-box mx-1 "><span>Male</span> <input type="radio" className='ml-auto' name="gender" value="male" /></div>
                      <div className="radio-box mx-1 ">
                        <span>Female</span> <input type="radio" className='ml-auto' name="gender" value="female" />
                      </div>
                      <div className="radio-box mx-1 ">
                        <span>Other</span> <input type="radio" className='ml-auto' name="gender" value="Other" />
                      </div>
                    </div>
                    <span className='text-muted des'>People who use our service may have uploaded your contact information to Facebook.</span>
                  </div>
                  <div class="modal-footer justify-content-center">

                    <button type="button" class="btn btn-success px-5 ">Sign up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login