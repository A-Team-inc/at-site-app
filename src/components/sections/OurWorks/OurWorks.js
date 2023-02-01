import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import useOurWorksQuery from "../../../graphql/our-works"
import "./OurWorks.scss"

const OurWorks = () => {
  const data = useOurWorksQuery()

  return(
    <section className="our_works content_max_width" id="our-works">
      <div className="our_works_subtitle-wrapper">
        <div className="subtitle_line" />
        <p className="our_works_subtitle">{data?.contentfulOurWorks.subtitle}</p>
      </div>
      <div className="our_works_title-wrapper">
        <h1 className="our_works_title title">{data?.contentfulOurWorks.title}</h1>
        {data?.contentfulOurWorks.cta &&
          <button
            onClick={() => window.location.href = `${window.location.origin}/projects`}
            className="our_works_btn"
            aria-label={data?.contentfulOurWorks.cta}
          >
            {data?.contentfulOurWorks.cta}
          </button>
        }
      </div>
      <div className="project-cards">
        {data?.contentfulOurWorks.projects.map((project, index) =>
          <Card project={project} key={index} />
        )}
      </div>
      {data?.contentfulOurWorks.cta && <button onClick={() => window.location.href = `${window.location.origin}/projects`} className="our_works_btn mobile">{data?.contentfulOurWorks.cta}</button>}
    </section>
  )
}

const Card = ({ project }) => {
  const image = getImage(project?.cover)

  return (
    <div className="project-card">
      {image ? <GatsbyImage image={image} alt={project.title} /> : <img src={project?.cover?.url} placeholder={project?.cover?.placeholderUrl} alt={project.title} />}
      <div className="project-card__content">
        <p className="project-card__subtitle">{project.subtitle}</p>
        <p className="project-card__title title">{project.title}</p>
        {project.slug && <Link
          className="project-card__link tabIndexItem"
          to={`projects${project.slug}`}
          aria-label={`${project.title} View the project`}
        >
          
          View the project
          <svg className="project-card__arrow" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM16.5303 6.53033C16.8232 6.23744 16.8232 5.76256 16.5303 5.46967L11.7574 0.696698C11.4645 0.403805 10.9896 0.403805 10.6967 0.696698C10.4038 0.989592 10.4038 1.46447 10.6967 1.75736L14.9393 6L10.6967 10.2426C10.4038 10.5355 10.4038 11.0104 10.6967 11.3033C10.9896 11.5962 11.4645 11.5962 11.7574 11.3033L16.5303 6.53033ZM1 6.75L16 6.75L16 5.25L1 5.25L1 6.75Z" fill="#4B5BD7"/>
          </svg>
        </Link>}
      </div>
    </div>
  )
}

export default OurWorks
