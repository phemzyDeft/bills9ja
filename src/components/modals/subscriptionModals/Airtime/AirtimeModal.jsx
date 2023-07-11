import React from 'react'
import {BsPhoneFlip} from "react-icons/bs"
import { Link } from 'react-router-dom'

const AirtimeModal = () => {
  return (
    <div>
        <div className="modal fade" id="exampleModalToggle5" aria-hidden="true" aria-labelledby="exampleModalToggleLabel5" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalToggleLabel5">Buy Airtime</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <section className="login-area">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="login-form">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="phone_number">
                                            Phone Number
                                        </label>
                                        <input type="number" id="phone_number" maxLength="11" required className="form-control" placeholder="Enter Phone Number" />
                                    </div>
                                    <div class="network d-flex justify-content-between">
                                        <div class="form-check form-check-inline">
                                            <input class="mtn form-check-input" type="radio" name="inlineRadioOptions" id="mtn" value="mtn" />
                                            {/* <label class="form-check-label" for="inlineRadio1">1</label> */}
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="airtel form-check-input" type="radio" name="inlineRadioOptions" id="airtel" value="airtel" />
                                            {/* <label class="form-check-label" for="inlineRadio2">2</label> */}
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="glo form-check-input" type="radio" name="inlineRadioOptions" id="glo" value="glo" />
                                            {/* <label class="form-check-label" for="inlineRadio3">3</label> --> */}
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="_9mobile form-check-input" type="radio" name="inlineRadioOptions" id="_9mobile" value="9Mobile" />
                                            {/* <label class="form-check-label" for="inlineRadio4">4</label> */}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="amount">
                                            Amount
                                        </label>
                                        <input type="number" id="amount" required className="form-control" placeholder="Enter amount to recharge" />
                                    </div>
                                    <button type="submit" data-bs-target="#exampleModalToggle6" data-bs-toggle="modal" className="btn btn-primary">
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
        <div className="modal fade" id="exampleModalToggle6" aria-hidden="true" aria-labelledby="exampleModalToggleLabel6" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalToggleLabel6">Modal 2</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <section className="login-area">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="login-form">
                                <form>
                                    Confirm to Proceed Modal
                                    <button type="submit" className="btn btn-primary">
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
    </div>
  )
}

export default AirtimeModal