import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Title from "../components/globals/Title/Title"
import Layout from "../components/layout/Layout"
import useProjectsQuery from "../graphql/projects"

const Projects = () => {
  const data = useProjectsQuery()
  const projects = data.contentfulProjectsPage.projects
  const [list, setList] = useState([...projects.slice(0, 4)])
  const [loadMore, setLoadMore] = useState(false)
  const [hasMore, setHasMore] = useState(projects.length > 4)

  const handleLoadMore = () => {
    setLoadMore(true)
  }

  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < projects.length
      const nextResults = isMore
        ? projects.slice(currentLength, currentLength + 4)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore])

  useEffect(() => {
    const isMore = list.length < projects.length
    setHasMore(isMore)
  }, [list])

  return(
    <Layout isShowForm={false}>
      <section className="projects">
        <div className="subtitle-wrapper">
          <div className="subtitle_line" />
          <Title className="projects_subtitle" size={4}>{data?.contentfulProjectsPage.subtitle}</Title>
        </div>
        <div className="projects_title-wrapper">
          <Title className="projects_title title" size={2}>{data?.contentfulProjectsPage.title}</Title>
          <button onClick={() => window.location.pathname = "/projects"} className="projects_btn">{data?.contentfulProjectsPage.cta}</button>
        </div>
        <div className="projects_main">
          {list.map((project, index) => {
            return(
              <Card project={project} key={index} />
            )
          })}
        </div>
        {hasMore && <button className="projects_load-more-btn" onClick={handleLoadMore}>Load More</button>}
      </section>
    </Layout>
  )
}

const Card = ({ project }) => {
  const image = getImage(project.cover)

  return (
    <div className="projects_card">
      <GatsbyImage image={image} alt={project.title} />
      <div className="projects_card__content">
        <Title className="projects_card__subtitle" size="5">{project.subtitle}</Title>
        <Title className="projects_card__title title" size="4">{project.title}</Title>
        <Link
          className="projects_card__link tabIndexItem"
          to={`/projects${project.slug}`}
          aria-label={`${project.title} View the project`}
          tabIndex="0"
        >
          View the project
          <svg className="project-card__arrow" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM16.5303 6.53033C16.8232 6.23744 16.8232 5.76256 16.5303 5.46967L11.7574 0.696698C11.4645 0.403805 10.9896 0.403805 10.6967 0.696698C10.4038 0.989592 10.4038 1.46447 10.6967 1.75736L14.9393 6L10.6967 10.2426C10.4038 10.5355 10.4038 11.0104 10.6967 11.3033C10.9896 11.5962 11.4645 11.5962 11.7574 11.3033L16.5303 6.53033ZM1 6.75L16 6.75L16 5.25L1 5.25L1 6.75Z" fill="#4B5BD7"/>
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default Projects