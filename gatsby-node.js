const path = require('path');
const client = require("@mailchimp/mailchimp_marketing");
require('dotenv').config(
  {
    path: `.env`,
  }
);

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

client.setConfig({
  apiKey: process.env.MAILCHIMP_KEY,
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