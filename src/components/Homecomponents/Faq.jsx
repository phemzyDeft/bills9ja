import React from 'react'

const Faq = () => {
  return (
    <section id="faq" className="faq-area ptb-100 bg-f9f9f9">
    <div className="container">
      <div className="section-title">
        <h2>Frequently Asked <span>Question</span></h2>
        <p>
          Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
          maecenas accumsan lacus vel facilisis.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="faq-accordion">
            <div className="accordion" id="accordionExample">
              <div
                className="accordion__item"
              >
                <div>
                  <div
                    className="accordion__button"
                    type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                  >
                    What is bill payment?
                  </div>
                </div>
                <div
                  id="collapseOne" 
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <p className='accordion__panel'>
                    Bill payment refers to the process of settling and paying bills for various services, such as utilities, telecommunications, credit cards, subscriptions, and more.
                  </p>
                </div>
              </div>

              {/* second accordion item */}
              <div
                className="accordion__item"
              >
                <div>
                  <div
                    className="accordion__button"
                    type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
                  >
                    Is it safe to make bill payments online?
                  </div>
                </div>
                <div
                  id="collapseTwo" 
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <p className='accordion__panel'>
                  Online bill payment methods provided by reputable service providers are generally safe. It's important to ensure you are using secure and trusted websites or apps, and to protect your personal and financial information.
                  </p>
                </div>
              </div>

              {/* third accordion item */}
              <div
                className="accordion__item"
              >
                <div>
                  <div
                    className="accordion__button"
                    type="button" data-bs-toggle="collapse" data-bs-target="#collapseThird" aria-expanded="false" aria-controls="collapseThird"
                  >
                    What are the advantages of online bill payment?
                  </div>
                </div>
                <div
                  id="collapseThird" 
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <p className='accordion__panel'>
                  Online bill payment offers convenience, time-saving, and the ability to track and manage your payments easily. It reduces the need for manual paperwork, eliminates the risk of lost mail, and provides quick access to payment history and receipts.
                  </p>
                </div>
              </div>

              {/* fourth accordion item */}
              <div
                className="accordion__item"
              >
                <div>
                  <div
                    className="accordion__button"
                    type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourth" aria-expanded="false" aria-controls="collapseFourth"
                  >
                    What types of bills can I pay?
                  </div>
                </div>
                <div
                  id="collapseFourth" 
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <p className='accordion__panel'>
                  You can pay a wide range of bills, including electricity, water, gas, internet, cable TV, phone, credit card bills, insurance premiums, rent, mortgage, and more. The availability of bill payment options may vary depending on your location and service providers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="faq-image">
            {/* <img src="../images/faq.svg" alt="img" /> */}
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}

export default Faq