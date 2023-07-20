import React from 'react'
import {BsPhoneFlip} from "react-icons/bs"
import { Link } from 'react-router-dom'
import styles from "../../../../../styles/Modals.module.css"
import {HiOutlineArrowLongLeft} from "react-icons/hi2"

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
                <section className=".login-area">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="login-form">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="phone_number">
                                            Phone Number
                                        </label>
                                        <input type="text" id="phone_number" maxLength={11} pattern='[0-9]{11}' required className="form-control" placeholder="Enter Phone Number" />
                                    </div>
                                    <div class="network d-flex justify-content-between">
                                        <div class="form-check form-check-inline">
                                            <input class="mtn form-check-input" type="radio" name="inlineRadioOptions" id="mtn" value="mtn" />
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="airtel form-check-input" type="radio" name="inlineRadioOptions" id="airtel" value="airtel" />
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="glo form-check-input" type="radio" name="inlineRadioOptions" id="glo" value="glo" />
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="_9mobile form-check-input" type="radio" name="inlineRadioOptions" id="_9mobile" value="9Mobile" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="amount">
                                            Amount
                                        </label>
                                        <input type="number" id="amount" required className="form-control" placeholder="Enter amount to recharge" />
                                    </div>
                                    <button type="submit" data-bs-target="#exampleModalToggle6" data-bs-toggle="modal" className="btn btn-primary w-100">
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
                <span className='me-2' type="submit" data-bs-target="#exampleModalToggle5" data-bs-toggle="modal">
                    <HiOutlineArrowLongLeft size={20}/>
                </span>
                <h1 className="modal-title fs-5" id="exampleModalToggleLabel6">Transaction Verification</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <section className=".login-area">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="login-form">
                                <form>
                                    <table class="table">
                                        <tbody>
                                            <tr className={`${styles.details_text}`}>
                                            <td className={`${styles.details_text_bold}`}>Transaction Type:</td>
                                            <td>Data Purchase</td>
                                            </tr>
                                            <tr className={`${styles.details_text}`}>
                                            <td className={`${styles.details_text_bold}`}>Network: </td>
                                            <td>MTN</td>
                                            </tr>
                                            <tr className={`${styles.details_text}`}>
                                            <td className={`${styles.details_text_bold}`}>Plan: </td>
                                            <td>5GB-SME-30DAYS</td>
                                            </tr>
                                            <tr className={`${styles.details_text}`}>
                                            <td className={`${styles.details_text_bold}`}>Phone: </td>
                                            <td>08123456789</td>
                                            </tr>
                                            <tr className={`${styles.details_text}`}>
                                            <td className={`${styles.details_text_bold}`}>Price: </td>
                                            <td>1,000.00</td>
                                            </tr>
                                            <tr className={`${styles.details_text}`}>
                                            <td className={`${styles.details_text_bold}`}>TransactionID: </td>
                                            <td>197741084724618429</td>
                                            </tr>
                                            <tr className={`${styles.details_text}`}>
                                            <td className={`${styles.details_text_bold}`}>Status: </td>
                                            <td>Pending Payment</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button type="submit" className="w-100 btn btn-primary" data-bs-dismiss='modal'>
                                        Buy Now
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