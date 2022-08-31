import { graphql, useStaticQuery } from 'gatsby';

const useServicesQuery = () => {
  return useStaticQuery(graphql`
    query Services {
      contentfulServicesSection {
        title,
        subtitle,
        description {
          description
        },
        image {
          url
        }
      }
    }
  `);
};

export default useServicesQuery;