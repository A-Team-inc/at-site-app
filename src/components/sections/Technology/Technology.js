import React, { useRef, useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import useTechnologyQuery from "../../../graphql/technology"
import "./Technology.scss"

const Technology = () => {
  const data = useTechnologyQuery()

  const scrollContainer = useRef()
  useEffect(() => {
    scrollContainer.current.addEventListener("wheel", event => {
      if (window.innerWidth < 1024) {
        event.preventDefault();
        scrollContainer.current.scrollLeft += event.deltaY;
      }
    })
  }, [])

  return (
    <section className="technology">
      <h2 className="technology__title title">{data?.contentfulTechnologiesSection.title}</h2>
      <div className="technology__content" ref={scrollContainer}>
        {data?.contentfulTechnologiesSection.technologies.map((item, index) => {
          const image = getImage(item.icon)
          return (
            <div className="technology__section" key={index}>
              <GatsbyImage image={image} alt={item.subtitle} />
              <p className="technology__subtitle">{item.subtitle}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Technology
