import { graphql, useStaticQuery } from 'gatsby';

const useProcessQuery = () => {
  return useStaticQuery(graphql`
    query Process {
      contentfulProcess {
        title,
        subtitle,
        cta,
        steps {
          title,
          description {
            description
          }
        },
        abilities {
          title,
          content {
            content
          }
        }
      }
    }
  `);
};

export default useProcessQuery;