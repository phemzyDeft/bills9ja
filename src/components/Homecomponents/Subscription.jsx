import React from 'react'
import {BsPhoneFlip} from "react-icons/bs"
import {BsPhone} from 'react-icons/bs'
import {PiTelevisionLight} from 'react-icons/pi'
import {IoWifiOutline} from 'react-icons/io5'
import {HiOutlineRadio, HiOutlineSquares2X2} from 'react-icons/hi2'
import {LiaMoneyBillWaveAltSolid} from 'react-icons/lia'

const Subscription = () => {
  return (
    <section className="about-area ptb-100" id='subscriptions'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single-about-box">
              <div className="icon"><BsPhone size={30}/></div>
              <h3>Airtime Purchase</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="btn-box">
              <span type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalToggle5">
                Buy Now
              </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-about-box">
              <div className="icon"><IoWifiOutline size={30}/></div>
              <h3>Data Purchase</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="btn-box">
              <span type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dataModalToggle1">
                Buy Now
              </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-about-box">
              <div className="icon"><PiTelevisionLight size={30}/></div>
              <h3>CableTV Subscriptions</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="btn-box">
              <span type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalToggle5">
                Buy Now
              </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-about-box">
              <div className="icon"><HiOutlineRadio size={30}/></div>
              <h3>Electricity Purchase</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="btn-box">
              <span type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#electricityModalToggle1">
                Buy Now
              </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-about-box">
              <div className="icon"><LiaMoneyBillWaveAltSolid size={30}/></div>
              <h3>Airtime to Cash</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="btn-box">
              <span type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalToggle5">
                Buy Now
              </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-about-box">
              <div className="icon"><HiOutlineSquares2X2 size={30}/></div>
              <h3>Other Bills Payments</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="btn-box">
              <span type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalToggle5">
                Other Subscription
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Subscription