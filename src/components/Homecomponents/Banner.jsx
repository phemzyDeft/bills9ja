import React from 'react'

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
                      Ultimate Platform to Monitor Your Best Workflow.
                    </h1>
                    <p>
                      It should be noted that although application software is
                      thought of as a program, it can be anything that runs on a
                      computer.
                    </p>
                    <div className="btn-box">
                      <a className="btn btn-primary" href="index.html#">Get Started</a>
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