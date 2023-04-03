import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import useServicesQuery from "../../../graphql/services"
import RichText from "../../globals/RichText/RichText"
import "./Services.scss"

import { IServicesData } from "./ServicesTypes"

const Services = () => {
  const data: IServicesData = useServicesQuery()
  const image = getImage(data?.contentfulServicesSection.image)

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__content">
          <div className="services__image-block">
            {image ? <GatsbyImage image={image} alt="" /> : <img src={data?.contentfulServicesSection.image?.url} placeholder={data?.contentfulServicesSection.image?.placeholderUrl} alt="" />}
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
            <Link
              className="services__subscribe-btn"
              to={`/#${data?.contentfulServicesSection?.subscrabeBtnAction.split(' ').join('-').toLowerCase()}`}
              aria-label={""}
            >
              {data?.contentfulServicesSection?.subscribeBtn}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
