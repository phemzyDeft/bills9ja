import React from 'react'

const About = () => {
  return (
    <div className="about-inner-area">
    <div className="container-fluid">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="about-image">
            <img src="../images/laptop.png" alt="about" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="about-inner-content">
            <div className="about-item">
              <div className="icon"><i className="fas fa-phone"></i></div>
              <h3>Free Calling Service</h3>
              <p>
                Plan ahead by day, week, or month, and see project status
                at a glance. Search and filter to focus in on anything
                form a single project to an individual person&#x27;s
                workload.
              </p>
            </div>
            <div className="about-item">
              <div className="icon"><i className="fas fa-gift"></i></div>
              <h3>Daily Free Gift</h3>
              <p>
                Plan ahead by day, week, or month, and see project status
                at a glance. Search and filter to focus in on anything
                form a single project to an individual person&#x27;s
                workload.
              </p>
            </div>
            <div className="about-item">
              <div className="icon"><i className="fas fa-qrcode"></i></div>
              <h3>QR Code Scaner</h3>
              <p>
                Plan ahead by day, week, or month, and see project status
                at a glance. Search and filter to focus in on anything
                form a single project to an individual person&#x27;s
                workload.
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