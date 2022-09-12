import { graphql, useStaticQuery } from 'gatsby';

const useProjectsQuery = () => {
  return useStaticQuery(graphql`
    query Projects {
      allContentfulProject {
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
  `);
};

export default useProjectsQuery;