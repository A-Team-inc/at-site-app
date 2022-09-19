import { graphql, useStaticQuery } from 'gatsby';

const useProjectsQuery = () => {
  return useStaticQuery(graphql`
    query Projects {
      contentfulProjectsPage {
        title,
        subtitle,
        cta,
        projects {
          title,
          slug,
          subtitle,
          cover {
            gatsbyImageData(
              placeholder: BLURRED
            )
          }
        }
      }
    }
  `);
};

export default useProjectsQuery;