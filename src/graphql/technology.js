import { graphql, useStaticQuery } from 'gatsby';

const useTechnologyQuery = () => {
  return useStaticQuery(graphql`
    query Technology {
      contentfulTechnologiesSection {
        title,
        technologies {
          icon {
            url
          },
          subtitle
        }
      }
    }
  `);
};

export default useTechnologyQuery;