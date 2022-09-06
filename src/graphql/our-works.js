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
            file {
              url
            }
          }
        }
      }
    }
  `);
};

export default useOurWorksQuery;