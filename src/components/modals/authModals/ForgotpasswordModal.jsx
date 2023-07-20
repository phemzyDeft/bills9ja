import React from 'react'

const ForgotpasswordModal = () => {
  return (
    <div className="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabIndex="-1">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalToggleLabel3">FORGET PASSWORD</h1>
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
                      <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Proceed
                    </button>
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

export default ForgotpasswordModal