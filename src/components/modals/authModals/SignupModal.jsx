import React from 'react'
import { Link } from 'react-router-dom'
const SignupModal = () => {
  return (
    <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">CREATE YOUR ACCOUNT</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <section className="login-area">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="login-form">
                    <form>
                      <div className="form-group">
                        <label>
                          Phone Number
                        </label>
                        <input type="number" className="form-control" placeholder="Enter Phone Number" />
                      </div>
                      <div className="form-group">
                        <label>
                          Email
                        </label>
                        <input type="email" className="form-control" placeholder="Email Address" />
                      </div>
                      <div className="form-group">
                        <label>
                          Password
                        </label>
                        <input type="password" className="form-control" placeholder="Password" />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Sign Up
                      </button>
                      <p className='text-center'>
                        Already a registered user? {"   "}
                        <Link href={"/"} className="" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                          Signin
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </section>            
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupModal