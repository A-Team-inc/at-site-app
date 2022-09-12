import React from "react"
import Title from "../components/globals/Title/Title"

import Layout from "../components/layout/Layout"
import useProjectsQuery from "../graphql/projects"

const Projects = () => {
  const data = useProjectsQuery()

  return(
    <Layout>
      <section className="projects">
        {data.allContentfulProject.nodes.map((item) => {
          return(
            <Title size={2}>
              {item.title}
            </Title>
          )
        })}
      </section>
    </Layout>
  )
}

export default Projects