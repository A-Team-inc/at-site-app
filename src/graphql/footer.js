import { graphql, useStaticQuery } from 'gatsby';

const useFooterQuery = () => {
  return useStaticQuery(graphql`
    query Footer {
      contentfulFooter {
        title {
          title
        },
        subtitle,
        email,
        socialLinks {
          url
          icon {
            url
          }
        },
        footerForm {
          formAction,
          nameLabel,
          namePlaceholder,
          emailLabel,
          emailPlaceholder,
          projectTypesTitle,
          projectTypesLabel,
          budgetRangeTitle,
          budgetRangeLabel,
          descriptionLabal,
          cta
        },
        underfooter {
          footerLogo {
            url
          },
          copyright,
          menu,
          email
        }
      }
    }
  `);
};

export default useFooterQuery;