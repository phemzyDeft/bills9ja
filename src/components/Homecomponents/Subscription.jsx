import React from 'react'
import {BsPhoneFlip} from "react-icons/bs"
import {PiTelevisionLight} from "react-icons/pi"
import {PiAirplaneInFlightThin} from "react-icons/pi"

const Subscription = () => {
  return (
    <section className="about-area ptb-100">
      {/* <AirtimeModal /> */}
            <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single-about-box">
              <div className="icon"><BsPhoneFlip size={30}/></div>
              <h3>Airtime Recharge</h3>
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
              <div className="icon"><PiAirplaneInFlightThin size={30} /></div>
              <h3>Flight Ticket</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-about-box">
              <div className="icon"><PiTelevisionLight size={30}/></div>
              <h3>Cable Television</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-about-box">
              <div className="icon"><BsPhoneFlip size={30}/></div>
              <h3>Airtime Recharge</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-about-box">
              <div className="icon"><PiAirplaneInFlightThin size={30} /></div>
              <h3>Flight Ticket</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-about-box">
              <div className="icon"><PiTelevisionLight size={30}/></div>
              <h3>Cable Television</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Subscription