const path = require('path');

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions
  const projectPage = path.resolve(`./src/templates/Project/Project.js`)

  return graphql(`
    {
      allContentfulProject {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    if(result.errors) { throw result.errors }

    const projects = result.data.allContentfulProject.edges

    projects.forEach((project, index) => {
      createPage({
        path: `/projects${project.node.slug}`,
        component: projectPage,
        context: {
          slug: project.node.slug
        }
      })
    })

    return null
  })

}