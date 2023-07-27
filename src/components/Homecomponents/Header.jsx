import React from 'react'
import styles from "../../../styles/Mobile.module.css"
import { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { LiaTimesSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const Header = () => {

  const [toggle, setToggle] = useState(true)

  const handleToggle = () =>{
    setToggle(!toggle)
  }

  return (
    <nav
      id="navbar"
      className={`navbar navbar-expand-lg navbar-style-one navbar-light bg-light`}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={"/images/logo.png"} width={107} height={77} alt="logo" />
          <img src={"/images/black-logo.png"} width={149} height={46} alt="logo"/>
        </a>
        <button
          className="navbar-toggler outline-0 navbar-toggler-right collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={toggle ? "false" : "true"}
          aria-label="Toggle navigation"
          onClick={()=>handleToggle()}
        >
          {toggle ? <IoIosMenu /> : <LiaTimesSolid />}
          {/* <span className="navbar-toggler-icon"></span> */}
        </button>
        <div className={`collapse navbar-collapse ${styles.mobileView}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link"
                href="#subscriptions">
                  <span
                    onClick={()=>handleToggle()}
                    data-bs-toggle={"collapse"}
                    data-bs-target={"#navbarSupportedContent"}
                    aria-controls={"navbarSupportedContent"}
                    aria-expanded={toggle ? 'true' : 'false'}
                    >
                  Subscriptions
                  </span>
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">
                <span
                  onClick={()=>handleToggle()}
                  data-bs-toggle={"collapse"}
                  data-bs-target={"#navbarSupportedContent"}
                  aria-controls={"navbarSupportedContent"}
                  aria-expanded={toggle ? 'true' : 'false'}
                  >
                  Testimonials
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">
                <span
                  onClick={()=>handleToggle()}
                  data-bs-toggle={"collapse"}
                  data-bs-target={"#navbarSupportedContent"}
                  aria-controls={"navbarSupportedContent"}
                  aria-expanded={toggle ? 'true' : 'false'}
                  >
                Faq
                </span>
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                <span
                  onClick={()=>handleToggle()}
                  data-bs-toggle={"collapse"}
                  data-bs-target={"#navbarSupportedContent"}
                  aria-controls={"navbarSupportedContent"}
                  aria-expanded={toggle ? 'true' : 'false'}
                  >
                  Dashboard
                </span>
              </Link>
            </li>
          </ul>
          <ul className=".others-option">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">
              <span
                onClick={()=>handleToggle()}
                data-bs-toggle={"collapse"}
                data-bs-target={"#navbarSupportedContent"}
                aria-controls={"navbarSupportedContent"}
                aria-expanded={toggle ? 'true' : 'false'}
                >
              Sign In
              </span>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header