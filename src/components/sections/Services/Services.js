import React from "react"
import "./Services.scss"

const Services = () => {

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__content">
          <div className="services__image-block">
            <img src={require('../../../assets/services-phone.png').default} alt="" />
          </div>
          <div className="services__text-block">
            <div className="services__subtitle-block">
              <div className="services__line" />
              <h6 className="services__subtitle">Approach</h6>
            </div>
            <h2 className="services__title">Our services</h2>
            <p className="services__text">
              We are A-Team, software development company with great experience!<br/><br/>
              We are proposing our expertise to help your business grow. We try to be sensitive to the requirements of the customer.<br/><br/>
              Our main goal is to build long-term relationships with the client for the development and improving of his business by providing quality.<br/><br/>
              Our expertise is full-cycle software development, we have the flexible SCRUM teams: PM, PO, FE and BE devs, QA. We are professionals in our field.
            </p>
            <p className="services__text services__text--bold">Improve your business with us!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
