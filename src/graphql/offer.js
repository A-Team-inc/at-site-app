import { graphql, useStaticQuery } from 'gatsby';

const useOfferQuery = () => {
  return useStaticQuery(graphql`
    query Offer {
      contentfulOffer {
        title,
        subtitle,
        images {
          img {
            url
          },
          text,
          backgroundColor,
          logoColor,
          rotateAngle,
          backgroundLogoPosition
        }
      }
    }
  `);
};

export default useOfferQuery;