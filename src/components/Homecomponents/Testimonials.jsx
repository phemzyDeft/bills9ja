import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';
import { TestimonialSettings } from '../../../Utils/data';

const Testimonial = () => {
  return (
    <section id="testimonials" className="testimonial-area ptb-100 bg-image">
      <div className="container">
        <div className="app-section-title">
          <h2>What Say Our <span>Clients</span></h2>
          <p>
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
            maecenas accumsan lacus vel facilisis.
          </p>
        </div>
        <div className="swiper testimonial-slides">
          <Slider {...TestimonialSettings} className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="client-image">
                  <img src="../images/author1.jpg" alt="feedback" />
                </div>
                <div className="testimonial-content">
                  <div className="desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed malesuada vulputate nisi in fermentum. Vivamus ac
                      libero quis nisi auctor pulvinar. Aenean sit amet lectus
                      posuere, mattis massa eget, ullamcorper diam. Nunc sit
                      amet felis eget arcu congue dictum.
                    </p>
                  </div>
                  <div className="client-info">
                    <h3>John Smith</h3>
                    <span>Web Developer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="client-image">
                  <img src="../images/author2.jpg" alt="feedback" />
                </div>
                <div className="testimonial-content">
                  <div className="desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed malesuada vulputate nisi in fermentum. Vivamus ac
                      libero quis nisi auctor pulvinar. Aenean sit amet lectus
                      posuere, mattis massa eget, ullamcorper diam. Nunc sit
                      amet felis eget arcu congue dictum.
                    </p>
                  </div>
                  <div className="client-info">
                    <h3>John Smith</h3>
                    <span>Web Developer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="client-image">
                  <img src="../images/author3.jpg" alt="feedback" />
                </div>
                <div className="testimonial-content">
                  <div className="desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed malesuada vulputate nisi in fermentum. Vivamus ac
                      libero quis nisi auctor pulvinar. Aenean sit amet lectus
                      posuere, mattis massa eget, ullamcorper diam. Nunc sit
                      amet felis eget arcu congue dictum.
                    </p>
                  </div>
                  <div className="client-info">
                    <h3>John Smith</h3>
                    <span>Web Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
          {/* <div className="swiper-pagination"></div> */}
        </div>
      </div>
    </section>
  )
}

export default Testimonial