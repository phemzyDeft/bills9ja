import React from 'react'
import {GoVerified} from 'react-icons/go'

const About = () => {
  return (
    <div className="about-inner-area">
    <div className="container-fluid">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="about-image">
            <img src="/images/whatwedo.svg" alt="about" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="about-inner-content">
            <div className="about-item">
              <div className="icon d-flex align-items-center justify-content-center"><GoVerified /></div>
              <h3>The Cheapest Deal</h3>
              <p>
                Even when you are low on funds, Bills9ja can help you manage your bills with our affordable prices.
              </p>
            </div>
            <div className="about-item">
              <div className="icon d-flex align-items-center justify-content-center"><GoVerified /></div>
              <h3>Accurate Analytics</h3>
              <p>
                We let you know how you spend and what you spend it on. Our dashboard gives full transactions analysis.
              </p>
            </div>
            <div className="about-item">
            <div className="icon d-flex align-items-center justify-content-center"><GoVerified /></div>
              <h3>Security</h3>
              <p>
                We take data security serious at Bills9ja, we assure you that your details are not at risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About