import { graphql, useStaticQuery } from 'gatsby';

const useOfferQuery = () => {
  return useStaticQuery(graphql`
    query Offer {
      contentfulOffer {
        title,
        subtitle,
        images {
          img {
            gatsbyImageData(
              placeholder: BLURRED
            ),
            url,
            placeholderUrl
          },
          text,
          backgroundColor,
          logoColor,
          topOffset,
          rotateAngle,
          backgroundLogoPosition
        }
      }
    }
  `);
};

export default useOfferQuery;