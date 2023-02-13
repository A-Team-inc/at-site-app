import { graphql, useStaticQuery } from 'gatsby';

const useBlogQuery = () => {
  return useStaticQuery(graphql`
    query Blog {
      contentfulBlogPage {
        title,
        subtitle,
        posts {
          title,
          slug,
          previewImage {
            gatsbyImageData(
              placeholder: BLURRED
            ),
            url,
            placeholderUrl
          },
          content {
            raw
            references {
              gatsbyImageData
              contentful_id
              __typename
            }
          },
        }
      }
    }
  `);
};

export default useBlogQuery;