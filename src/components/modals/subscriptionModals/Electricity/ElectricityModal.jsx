import React from 'react'
import {BsPhoneFlip} from "react-icons/bs"
import { Link } from 'react-router-dom'
import styles from "../../../../../styles/Modals.module.css"
import {HiOutlineArrowLongLeft} from "react-icons/hi2"

const ElectricityModal = () => {
  return (
    <div>
        <div className="modal fade" id="electricityModalToggle1" aria-hidden="true" aria-labelledby="electricityModalToggleLabel1" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="electricityModalToggleLabel1">Buy Data</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <section className=".login-area">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="login-form">
                                <form>
                                <div className="form-group">
                                    <label htmlFor="amount">
                                        Electricity Company
                                    </label>
                                    <select class="form-select form-control" aria-label="Default select example">
                                        <option selected>Select Company</option>
                                        <option value="1">Abuja Electricity Distribution Company - Aedc</option>
                                        <option value="2">Eko Electric Payment - Ekedc</option>
                                        <option value="3">Ikeja Electric Payment - Ikedc</option>
                                        <option value="4">Jos Electric - Jed</option>
                                        <option value="5">Kaduna Electric - Kaedco</option>
                                        <option value="6">Kano Electric - Kedco</option>
                                        <option value="7">Port Harcourt Electric - Phed</option>
                                        <option value="8">Ibadan Electricity Distribution Company - Ibedec</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="amount">
                                        Meter Type
                                    </label>
                                    <select class="form-select form-control" aria-label="Default select example">
                                        <option selected>Prepaid</option>
                                        <option value="1">Postpaid</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone_number">
                                        Meter Number
                                    </label>
                                    <input type="text" id="meter_number" pattern='[0-9]{11}' required className="form-control" placeholder="Enter Meter Number" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone_number">
                                        Phone Number
                                    </label>
                                    <input type="text" id="phone_number" maxLength={11} pattern='[0-9]{11}' required className="form-control" placeholder="Enter Phone Number" />
                                </div>
                                    <button type="submit" data-bs-target="#electricityModalToggle2" data-bs-toggle="modal" className="btn btn-primary w-100">
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
        <div className="modal fade" id="electricityModalToggle2" aria-hidden="true" aria-labelledby="electricityModalToggleLabel2" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <span className='me-2' type="submit" data-bs-target="#electricityModalToggle2" data-bs-toggle="modal">
                    <HiOutlineArrowLongLeft size={20}/>
                </span>
                <h1 className="modal-title fs-5" id="dataModalToggleLabel2">Transaction Verification</h1>
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
                                            <td>Electricity Purchase</td>
                                            </tr>
                                            <tr className={`${styles.details_text}`}>
                                            <td className={`${styles.details_text_bold}`}>Phone: </td>
                                            <td>08123456789</td>
                                            </tr>
                                            <tr className={`${styles.details_text}`}>
                                            <td className={`${styles.details_text_bold}`}>Meter Number: </td>
                                            <td>239863456789</td>
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

export default ElectricityModal