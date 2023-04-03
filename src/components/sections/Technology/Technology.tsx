import React, { useRef, useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import useTechnologyQuery from "../../../graphql/technology"
import "./Technology.scss"

interface TechnologyData {
  contentfulTechnologiesSection: {
    title: string;
    technologies: Technology[];
  }
}

interface Technology {
  icon: {
    url: string;
    placeholderUrl: string;
    gatsbyImageData: object;
    width: number;
    height: number;
  };
  subtitle: string;
}

const Technology = () => {
  const data: TechnologyData = useTechnologyQuery()
  const scrollContainer = useRef<HTMLDivElement>()

  const handleMouseWheelScroll = event => {
    if (window.innerWidth < 1024) {
      event.preventDefault();
      scrollContainer.current.scrollLeft += event.deltaY;
    }
  }

  useEffect(() => {
    scrollContainer.current?.addEventListener("wheel", event => handleMouseWheelScroll(event))

    return () => {
      scrollContainer?.current?.removeEventListener("wheel", handleMouseWheelScroll)
    };
  }, [])

  return (
    <section className="technology">
      <h2 className="technology__title title">{data?.contentfulTechnologiesSection.title}</h2>
      <div className="technology__content" ref={scrollContainer}>
        {data?.contentfulTechnologiesSection.technologies?.map((item, index) => {
          const image = getImage(item.icon)

          return (
            <div className="technology__section" key={index}>
              {image ?
                <GatsbyImage
                  image={image}
                  alt={item.subtitle} /> :
                <img
                  src={item.icon?.url}
                  placeholder={item.icon?.placeholderUrl}
                  width={item.icon.width}
                  height={item.icon.height}
                  alt={item.subtitle} />
              }
              <p className="technology__subtitle">{item.subtitle}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Technology
