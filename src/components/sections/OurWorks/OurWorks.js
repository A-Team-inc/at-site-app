import React from "react"
import { Link } from "gatsby"

import useOurWorksQuery from "../../../graphql/our-works"
import Title from "../../globals/Title/Title"
import ArrowRight from "../../../assets/icons/arrow_right.svg"
import "./OurWorks.scss"

const OurWorks = () => {
  const data = useOurWorksQuery()

  return(
    <section className="our_works content_max_width" id="our-works">
      <div className="our_works_subtitle-wrapper">
        <div className="subtitle_line" />
        <Title className="our_works_subtitle" size="4">{data?.contentfulOurWorks.subtitle}</Title>
      </div>
      <div className="our_works_title-wrapper">
        <Title className="our_works_title" size="1">{data?.contentfulOurWorks.title}</Title>
        <button onClick={() => window.location.pathname = "/our-works"} className="our_works_btn">{data?.contentfulOurWorks.cta}</button>
      </div>
      <div className="project-cards">
        {data?.contentfulOurWorks.projects.map((project, index) =>
          <Card project={project} key={index} />
        )}
      </div>
      <button onClick={() => window.location.pathname = "/our-works"} className="our_works_btn mobile">Show all projects</button>
    </section>
  )
}

const Card = ({ project }) => (
  <div className="project-card">
    <img className="project-card__img" src={project.cover.file.url} />
    <div className="project-card__content">
      <Title className="project-card__subtitle" size="5">{project.subtitle}</Title>
      <Title className="project-card__title" size="4">{project.title}</Title>
      <Link className="project-card__link" to={`projects${project.slug}`}>View the project <img src={ArrowRight} /></Link>
    </div>
  </div>
)

export default OurWorks
