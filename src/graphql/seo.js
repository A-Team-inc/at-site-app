import { graphql, useStaticQuery } from 'gatsby';

const useSEOQuery = () => {
  return useStaticQuery(graphql`
    query SEO {
      contentfulSiteMetadata {
        title,
        description {
          description
        },
        image {
          url
        },
        siteUrl
      }
    }
  `);
};

export default useSEOQuery;