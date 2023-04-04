import { graphql, useStaticQuery } from 'gatsby';

const useWelcomeQuery = () => {
  return useStaticQuery(graphql`
    query Welcome {
      contentfulWelcome {
        title,
        description {
          description
        },
        subscrabeBtnAction,
        subscribeBtn,
        formAction,
        formButtonValue,
        slider {
          slides {
            title
            subtitle
            slide {
              gatsbyImageData(
                placeholder: BLURRED
              ),
              url,
              placeholderUrl
            }
          }
        }
      }
    }
  `);
};

export default useWelcomeQuery;