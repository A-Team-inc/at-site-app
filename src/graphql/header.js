import { graphql, useStaticQuery } from 'gatsby';

const useHeaderQuery = () => {
  return useStaticQuery(graphql`
    query Header {
      contentfulHeader {
        logo {
          gatsbyImageData(
            placeholder: BLURRED
            width: 123
          ),
          url,
          placeholderUrl
        }
        menu,
        mobileMenuEmail
        socialLinks {
          title
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