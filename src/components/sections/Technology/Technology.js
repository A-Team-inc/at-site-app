import React, { useRef, useEffect } from "react"

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
      <h2 className="technology__title" tabindex="0">{data?.contentfulTechnologiesSection.title}</h2>
      <div className="technology__content" ref={scrollContainer}>
        {data?.contentfulTechnologiesSection.technologies.map((item, index) =>
          <div className="technology__section" key={index}>
            <img className="technology__image" src={item.icon.url} alt={item.subtitle} />
            <p className="technology__subtitle" tabindex="0">{item.subtitle}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Technology
