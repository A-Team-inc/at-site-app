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

const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: "11ed70721fabbc0c4fe0e36df9439c1f-us12",
  server: "us12",
});

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest
}) => {

  const response = await client.lists.getListMembersInfo("81038d644f");
  const emailsArr = response?.members.map((item) => item.email_address)

  createNode({
    ...emailsArr,
    id: "mailchimp-members-list",
    internal: {
      type: 'mailchimpMembers',
      content: JSON.stringify(emailsArr),
      contentDigest: createContentDigest(emailsArr)
    }
  });
};