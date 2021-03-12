import React from "react"

import Title from "../../atoms/Title/Title"
import ImgBlock from "../../molecules/ImgBlock/ImgBlock"
import {
  Css,
  Gatsby,
  Graphql,
  Html,
  Js,
  Mongodb,
  Nextjs,
  Nodejs,
  Reactjs,
  Scss,
  TypeScript,
} from "../../../assets/icons/index"
import "./Technology.css"

const Technology = () => {
  let imgData = [
    {
      url: Js,
      subtitle: "JavaScript",
      width: 100,
    },
    {
      url: Reactjs,
      subtitle: "React.js",
      width: 100,
    },
    {
      url: TypeScript,
      subtitle: "TypeScript",
      width: 100,
    },
    {
      url: Nodejs,
      subtitle: "Node.js",
      width: 100,
    },
    {
      url: Nextjs,
      subtitle: "Next.js",
      width: 150,
    },
    {
      url: Gatsby,
      subtitle: "Gatsby",
      width: 100,
    },
    {
      url: Mongodb,
      subtitle: "MongoDB",
      width: 100,
    },
    {
      url: Graphql,
      subtitle: "Graphql",
      width: 200,
    },
    {
      url: Html,
      subtitle: "Html",
      width: 100,
    },
    {
      url: Css,
      subtitle: "Css",
      width: 100,
    },
    {
      url: Scss,
      subtitle: "Scss/Sass",
      width: 100,
    },
  ]

  return (
    <section className="technology">
      <Title size="2">Technology</Title>
      <div className="technology-content">
        {imgData.map(item => {
          return (
            <ImgBlock
              className="img-block"
              imgClassName="technology_img"
              textClassName="technology_text"
              content={item.subtitle}
              imgWidth={item.width}
              Url={item.url}
              key={item.url}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Technology
