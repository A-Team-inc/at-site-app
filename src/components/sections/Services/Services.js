import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import useServicesQuery from "../../../graphql/services"
import RichText from "../../globals/RichText/RichText"
import "./Services.scss"

const Services = () => {
  const data = useServicesQuery()
  const image = getImage(data?.contentfulServicesSection.image)

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__content">
          <div className="services__image-block">
            <GatsbyImage image={image} alt="" />
          </div>
          <div className="services__text-block">
            <div className="services__subtitle-block">
              <div className="services__line subtitle_line" />
              <p className="services__subtitle">{ data?.contentfulServicesSection.subtitle }</p>
            </div>
            <h2 className="services__title title">{data?.contentfulServicesSection.title}</h2>
            <div>
              <RichText paragraphClassName="services__text" richText={data?.contentfulServicesSection.description} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
