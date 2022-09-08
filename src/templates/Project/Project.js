import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/Layout"
import Title from "../../components/globals/Title/Title"
import { addLineBreaks } from "../../utilities/index"
import "./Project.scss"

const Project = ({ data }) => {
  const projectData = data?.allContentfulProject.nodes[0]
  console.log("projectData", projectData)

  return(
    <Layout>
      <section className="project">
        <div className="project_subtitle-wrapper">
          <div className="subtitle_line" />
          <h4 className="project_subtitle" tabIndex="0">{ projectData?.subtitle && projectData?.subtitle }</h4>
        </div>
        <div className="project_title-wrapper">
          <Title className="project_title" size="1">{ projectData?.title && projectData?.title }</Title>
          <button className="project_btn">{ projectData?.cta && projectData?.cta }</button>
        </div>
        <p className="project_description">
          {projectData?.description?.description && addLineBreaks(projectData?.description.description)}
        </p>
        <div className="project_main">
          <div className="project_cards">
            {projectData?.abilities && projectData?.abilities.map((item, index) => {
              return(
                <div key={item + index}>
                  <Title className="project_cards-title" size="5">{ item.title }</Title>
                  <p className="project_cards-description">{ item.content.content }</p>
                </div>
              )
            })}
          </div>
          <div className="project_images">
            {projectData?.images && projectData?.images.map((image, index) => {
              if(index < 3) {
                return <img className="main_img" key={image.url + index} src={image.url} />
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
          url
        },
        images {
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