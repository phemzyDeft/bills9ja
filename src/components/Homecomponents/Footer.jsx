import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer-area bg-fffcf4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <div className="single-footer-widget">
              <div className="logo">
                <a href="/"
                  ><img src="../images/logo.png" alt="logo"
                /></a>
              </div>
              <ul className="contact-info">
                <li>No 2, River Valley Estate, Ojodu Berger, Lagos State, Nigeria.</li>
                <li><a href="tel:+2348130827751">(+234) 81 308 277 51</a></li>
                <li>
                  <a
                    href="https://genial-react.envytheme.com/cdn-cgi/l/email-protection#13606663637c61675374767d7a727f3d707c7e"
                    ><span
                      className="__cf_email__"
                      >oluwadavid081@gmail.com</span></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Support</h3>
              <ul className="list">
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Terms &amp; Conditions</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget">
              <h3>My Account</h3>
              <ul className="list">
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><a href="/">Support Center</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-7">
              <p>
               All Rights Reserved
                <a href="/"> &nbsp; Bills9ja.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="map2"><img src="../images/map2.png" alt="map" /></div>
    </footer>
    )
}

export default Footer