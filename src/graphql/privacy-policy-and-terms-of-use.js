import { graphql, useStaticQuery } from 'gatsby';

const usePrivacyPolicyAndTermsOfUseQuery = () => {
  return useStaticQuery(graphql`
    query PrivacyPolicyAndTermsOfUse {
      allContentfulPrivacyPolicyAndTermsOfUse {
        nodes {
          title,
          slug,
          description {
            raw
          }
        }
      }
    }
  `);
};

export default usePrivacyPolicyAndTermsOfUseQuery;