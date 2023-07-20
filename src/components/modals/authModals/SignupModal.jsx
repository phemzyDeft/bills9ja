import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import styles from "../../../../styles/Modals.module.css"
import { useState } from 'react'

const SignupModal = () => {

  const [toggle, setToggle] = useState(false)
  
  const handleToggle = () =>{
    setToggle(!toggle)
  }

  return (
    <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">CREATE YOUR ACCOUNT</h1>
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
                          Phone Number
                        </label>
                        <input type="text" id="phone_number" maxLength={11} pattern='[0-9]{11}' required className="form-control" placeholder="Enter Phone Number" />
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