import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div>
      <div id="home" className="app-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="app-banner-content">
                    <h1>
                      Welcome to Bills9ja
                    </h1>
                    <p>
                    Discover the Future of Bill Payments with Bills9ja - Your All-In-One Services for Managing Your Bills
                    </p>
                    <div className="btn-box">
                      <Link to="/" className="btn btn-primary">Get Started</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="app-banner-image">
                    <img src="../images/phone.svg" alt="phone" />
                    {/* <img src="../images/phones_flat.png" alt="phone" /> */}
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

export default Banner