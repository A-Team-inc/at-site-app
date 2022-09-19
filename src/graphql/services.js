import { graphql, useStaticQuery } from 'gatsby';

const useServicesQuery = () => {
  return useStaticQuery(graphql`
    query Services {
      contentfulServicesSection {
        title,
        subtitle,
        description {
          raw
        },
        image {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
    }
  `);
};

export default useServicesQuery;