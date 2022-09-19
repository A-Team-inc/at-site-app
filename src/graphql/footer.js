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
          title
          url
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
            gatsbyImageData(
              placeholder: BLURRED
              width: 123
            )
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