
import React, { useState } from 'react'

import{useDispatch}from "react-redux";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
   const [email, setEmail] = useState("");
  const [passWord, setpassWord] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(Login({ email,passWord }, navigate));
    navigate('/UserProfile')
  }
  return (
    <div><div id="main-wrapper" className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="card border-0">
            <div className="card-body p-0">
              <div className="row no-gutters">
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="mb-5">
                      <h3 className="h4 font-weight-bold text-theme">Login</h3>
                    </div>
                    <h6 className="h5 mb-0">Welcome back!</h6>
                    <p className="text-muted mt-2 mb-5">
                      Enter your email address and password to access admin
                      panel.
                    </p>
                    <form 
                     
                    >
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <input onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                         
                        />
                      </div>
                      <div className="form-group mb-5">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input  onChange={(e)=>setpassWord(e.target.value)}
                        value={passWord}
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                         
                        />
                      </div>
                      <Link to={'/dashboard'}><button  className="btn btn-theme">
                        Login
                      </button></Link>
             
                      <a
                        href="#l"
                        className="forgot-link float-right text-primary"
                      >
                        Forgot password?
                      </a>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-none d-lg-inline-block">
                  <div className="account-block rounded-right">
                    <div className="overlay rounded-right" />
                    <div className="account-testimonial">
                      <h4 className="text-white mb-4">
                        This beautiful theme yours!
                      </h4>
                      <p className="lead text-white">
                        "Best investment i made for a long time. Can only
                        recommend it for other users."
                      </p>
                      <p>- Admin User</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end card-body */}
          </div>
          {/* end card */}
          <p className="text-muted text-center mt-3 mb-0">
            Don't have an account? 
            <Link to={'/register'}><a className="text-primary ml-1" >register</a></Link>
          </p>
          {/* end row */}
        </div>
        {/* end col */}
      </div>
      {/* Row */}
    </div></div>
  )
}

export default Login
  
