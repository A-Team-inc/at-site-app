import React, { useRef, useEffect } from "react"
import "./Technology.scss"

const Technology = () => {
  const data = [
    {
      url: require('../../../assets/icons/technology/react.png'),
      subtitle: "React JS",
    },
    {
      url: require('../../../assets/icons/technology/js.png'),
      subtitle: "JavaScript",
    },
    {
      url: require('../../../assets/icons/technology/ts.png'),
      subtitle: "TypeScript",
    },
    {
      url: require('../../../assets/icons/technology/nodejs.png'),
      subtitle: "Node.js",
    },
    {
      url: require('../../../assets/icons/technology/gatsby.png'),
      subtitle: "Gatsby",
    },
    {
      url: require('../../../assets/icons/technology/mongodb.png'),
      subtitle: "MongoDB",
    },
    {
      url: require('../../../assets/icons/technology/graphql.png'),
      subtitle: "GraphQL",
    },
    {
      url: require('../../../assets/icons/technology/nextjs.png'),
      subtitle: "Next.js",
    },
    {
      url: require('../../../assets/icons/technology/html.png'),
      subtitle: "HTML",
    },
    {
      url: require('../../../assets/icons/technology/css.png'),
      subtitle: "CSS",
    },
    {
      url: require('../../../assets/icons/technology/sass.png'),
      subtitle: "Scss/Sass.js",
    },
  ]

  const scrollContainer = useRef()
  useEffect(() => {
    scrollContainer.current.addEventListener("wheel", event => {
      event.preventDefault();
      scrollContainer.current.scrollLeft += event.deltaY;
    })
  }, [])

  return (
    <section className="technology">
      <h2 className="technology__title">Worked and supported by many International-famous finance services</h2>
      <div className="technology__content" ref={scrollContainer}>
        {data.map((item, index) =>
          <div className="technology__section" key={index}>
            <img className="technology__image" src={item.url.default} />
            <p className="technology__subtitle">{item.subtitle}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Technology
