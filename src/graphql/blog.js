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
          media {
            gatsbyImageData(
              placeholder: BLURRED
            ),
            url,
            placeholderUrl
          },
          content {
            raw
          },
        }
      }
    }
  `);
};

export default useBlogQuery;