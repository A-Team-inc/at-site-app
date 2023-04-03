import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Title from "../components/globals/Title/Title"
import Layout from "../components/layout/Layout"
import useProjectsQuery from "../graphql/projects"

import { IAllMailchimpMembers, IGatsbyImage } from '../types/index'

interface IProjectsData {
  contentfulProjectsPage: {
    title: string
    subtitle: string
    cta: string
    projects: IProject[]
  }
}

interface IProject {
  title: string
  subtitle: string
  slug: string
  cover: {
    url: string
    placeholderUrl: string
    gatsbyImageData: IGatsbyImage
  }
}

interface IProjectsPropData {
  data: {
    allMailchimpMembers: IAllMailchimpMembers
  }
}

const Projects = ({ data }: IProjectsPropData) => {
  const projectsData: IProjectsData = useProjectsQuery()
  const projects = projectsData.contentfulProjectsPage.projects
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
    <Layout isShowForm={false} mailchimpMembers={data?.allMailchimpMembers.nodes[0].internal.content} >
      <section className="projects">
        <div className="subtitle-wrapper">
          <div className="subtitle_line" />
          <Title className="projects_subtitle" size={4}>{projectsData?.contentfulProjectsPage.subtitle}</Title>
        </div>
        <div className="projects_title-wrapper">
          <Title className="projects_title title" size={2}>{projectsData?.contentfulProjectsPage.title}</Title>
          {projectsData?.contentfulProjectsPage.cta &&
            <button
              onClick={() => window.location.pathname = "/projects"}
              className="projects_btn"
              aria-label={projectsData?.contentfulProjectsPage.cta}
            >
              {projectsData?.contentfulProjectsPage.cta}
            </button>
          }
        </div>
        <div className="projects_main">
          {list.map((project, index) => {
            return(
              <Card project={project} key={index} />
            )
          })}
        </div>
        {hasMore && <button className="projects_load-more-btn" onClick={handleLoadMore} aria-label="Load more">Load More</button>}
      </section>
    </Layout>
  )
}

const Card = ({ project }) => {
  const image = getImage(project.cover)

  return (
    <div className="projects_card">
      {image ? <GatsbyImage image={image} alt={project.title} /> : <img src={project.cover?.url} placeholder={project.cover?.placeholderUrl} alt="" />}
      <div className="projects_card__content">
        <p className="projects_card__subtitle">{project.subtitle}</p>
        <p className="projects_card__title title">{project.title}</p>
        <Link
          className="projects_card__link tabIndexItem"
          to={`/projects${project.slug}`}
          aria-label={`${project.title} View the project`}
          tabIndex={0}
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

export const query = graphql`
  query {
    allMailchimpMembers {
      nodes {
        internal {
          content
        }
      }
    }
  }
`;

export default Projects