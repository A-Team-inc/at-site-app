import { graphql, useStaticQuery } from 'gatsby';

const useCookieBannerQuery = () => {
  return useStaticQuery(graphql`
    query CookieBannerQuery {
      contentfulCookieBanner {
        text {
          text
        }
      }
    }
  `);
};

export default useCookieBannerQuery;