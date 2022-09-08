import React from "react"
import { Link } from "gatsby"

import useOurWorksQuery from "../../../graphql/our-works"
import Title from "../../globals/Title/Title"
import "./OurWorks.scss"

const OurWorks = () => {
  const data = useOurWorksQuery()

  return(
    <section className="our_works content_max_width" id="our-works">
      <div className="our_works_subtitle-wrapper">
        <div className="subtitle_line" />
        <h4 className="our_works_subtitle" tabindex="0">{data?.contentfulOurWorks.subtitle}</h4>
      </div>
      <div className="our_works_title-wrapper">
        <h1 className="our_works_title" tabindex="0">{data?.contentfulOurWorks.title}</h1>
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
    <img className="project-card__img" src={project.cover.file.url} alt={project.title} />
    <div className="project-card__content">
      <Title className="project-card__subtitle" size="5">{project.subtitle}</Title>
      <Title className="project-card__title" size="4">{project.title}</Title>
      <Link
        className="project-card__link"
        to={`projects${project.slug}`}
        aria-label={`${project.title} View the project`}
      >
        
        View the project
        <svg className="project-card__arrow" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM16.5303 6.53033C16.8232 6.23744 16.8232 5.76256 16.5303 5.46967L11.7574 0.696698C11.4645 0.403805 10.9896 0.403805 10.6967 0.696698C10.4038 0.989592 10.4038 1.46447 10.6967 1.75736L14.9393 6L10.6967 10.2426C10.4038 10.5355 10.4038 11.0104 10.6967 11.3033C10.9896 11.5962 11.4645 11.5962 11.7574 11.3033L16.5303 6.53033ZM1 6.75L16 6.75L16 5.25L1 5.25L1 6.75Z" fill="#4B5BD7"/>
        </svg>
      
      </Link>
    </div>
  </div>
)

export default OurWorks
