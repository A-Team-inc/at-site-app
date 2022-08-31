import { graphql, useStaticQuery } from 'gatsby';

const useHeaderQuery = () => {
  return useStaticQuery(graphql`
    query Header {
      contentfulHeader {
        logo {
          url
        }
        menu
        socialLinks {
          url
          icon {
            url
          }
        }
      }
    }
  `);
};

export default useHeaderQuery;