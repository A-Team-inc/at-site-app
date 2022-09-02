import React from "react"

import useServicesQuery from "../../../graphql/services"
// import { addLineBreaks } from "../../../utilities/index"
import RichText from "../../globals/RichText/RichText"
import "./Services.scss"

const Services = () => {
  const data = useServicesQuery()

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__content">
          <div className="services__image-block">
            <img src={data?.contentfulServicesSection.image.url} alt="" />
          </div>
          <div className="services__text-block">
            <div className="services__subtitle-block">
              <div className="services__line" />
              <h6 className="services__subtitle">{ data?.contentfulServicesSection.subtitle }</h6>
            </div>
            <h2 className="services__title">{ data?.contentfulServicesSection.title }</h2>
            <RichText paragraphClassName="services__text" richText={data?.contentfulServicesSection.description} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
