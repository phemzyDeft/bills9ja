import React from 'react'
import { Link } from 'react-router-dom'

const LoginModal = () => {
  return (
    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalToggleLabel">WELCOME BACK</h1>
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
                      Login
                    </button>
                    <p>
                      <Link to={"/"} className="pull-left" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
                        Create a new account
                      </Link>
                      <Link to={"/"} className="pull-right" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal">
                        Forgot Password?
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

export default LoginModal