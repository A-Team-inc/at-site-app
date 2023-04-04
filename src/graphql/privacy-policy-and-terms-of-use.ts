import { graphql, useStaticQuery } from 'gatsby';

const usePrivacyPolicyAndTermsOfUseQuery = () => {
  return useStaticQuery(graphql`
    query PrivacyPolicyAndTermsOfUse {
      allContentfulPrivacyPolicyAndTermsOfUse {
        nodes {
          title,
          subtitle,
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