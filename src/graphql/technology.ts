import { graphql, useStaticQuery } from 'gatsby';

const useTechnologyQuery = () => {
  return useStaticQuery(graphql`
    query Technology {
      contentfulTechnologiesSection {
        title,
        technologies {
          icon {
            gatsbyImageData(
              placeholder: BLURRED
            ),
            url,
            width,
            height,
            placeholderUrl
          },
          subtitle
        }
      }
    }
  `);
};

export default useTechnologyQuery;