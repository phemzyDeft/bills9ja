import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import styles from "../../../../styles/Modals.module.css"
import { useState } from 'react'

const LoginModal = () => {

  const [toggle, setToggle] = useState(false)

  const handleToggle = () =>{
    setToggle(!toggle);
  }

  return (
    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalToggleLabel">WELCOME BACK</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <section className=".login-area">
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
                      <div className='position-relative'>
                        <input type={toggle ? "text" : "password"} className="form-control" placeholder="Password" />
                        <span className={`${styles.showpassword}`} onClick={handleToggle}>
                          {toggle? 
                          <AiOutlineEye size={20}/>
                          :
                          <AiOutlineEyeInvisible size={20}/>
                          }
                        </span>

                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Login
                    </button>
                    <p className='text-center d-flex justify-content-between pt-1'>
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