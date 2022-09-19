import { graphql, useStaticQuery } from 'gatsby';

const useOurWorksQuery = () => {
  return useStaticQuery(graphql`
    query OurWorks {
      contentfulOurWorks {
        cta,
        title,
        subtitle,
        projects {
          title,
          slug,
          subtitle,
          cover {
            gatsbyImageData(
              placeholder: BLURRED
            )
          }
        }
      }
    }
  `);
};

export default useOurWorksQuery;