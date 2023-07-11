import React from 'react'

const Header = () => {
  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg navbar-style-one navbar-light bg-light"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={"/images/logo.png"} width={107} height={77} alt="logo" />
          <img src={"/images/black-logo.png"} width={149} height={46} alt="logo"/>
        </a>
        <button
          className="navbar-toggler navbar-toggler-right collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-item"><a className="nav-link" href="#faq">Faq</a></li>
          </ul>
          <ul className="others-option">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">
              Sign In
            </button>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header