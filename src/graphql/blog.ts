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
          }
        }
      }
    }
  `);
};

export default useBlogQuery;