import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../../components/layout/Layout"
import Title from "../../components/globals/Title/Title"
import { addLineBreaks } from "../../utilities/index"
import "./Project.scss"

const Project = ({ data }) => {
  const projectData = data?.allContentfulProject.nodes[0]

  return(
    <Layout>
      <section className="project">
        <div className="project_subtitle-wrapper">
          <div className="subtitle_line" />
          <p className="project_subtitle">{ projectData?.subtitle && projectData?.subtitle }</p>
        </div>
        <div className="project_title-wrapper">
          <Title className="project_title title" size="1">{ projectData?.title && projectData?.title }</Title>
          <button className="project_btn" aria-label={projectData?.cta}>{ projectData?.cta && projectData?.cta }</button>
        </div>
        <p className="project_description">
          {projectData?.description?.description && addLineBreaks(projectData?.description.description)}
        </p>
        <div className="project_main">
          <div className="project_cards">
            {projectData?.abilities && projectData?.abilities.map((item, index) => {
              return(
                <div key={item + index}>
                  <p className="project_cards-title title">{ item.title }</p>
                  <p className="project_cards-description">{ item.content.content }</p>
                </div>
              )
            })}
          </div>
          <div className="project_images">
            {projectData?.images && projectData?.images.map((image, index) => {
              if(index < 3) {
                const projectImage = getImage(image)
                return (
                  <div className="main_img" key={image + index}>
                    <GatsbyImage image={projectImage} alt={projectData.title} />
                  </div>
                )
              }
            } )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Project

export const query = graphql`
  query ($slug: String) {
    allContentfulProject (filter: {
      slug: {
        eq: $slug
      }
    }) {
      nodes {
        title,
        slug,
        cta,
        subtitle,
        description {
          description
        },
        cover {
          gatsbyImageData(
            placeholder: BLURRED
          )
        },
        images {
          gatsbyImageData(
            placeholder: BLURRED
          ),
          url
        },
        abilities {
          title,
          content {
            content
          }
        }
      }
    }
  }
`