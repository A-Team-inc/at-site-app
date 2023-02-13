import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../../components/layout/Layout"
import Title from "../../components/globals/Title/Title"
import RichText from "../../components/globals/RichText/RichText"
import "./Post.scss"

const Post = ({ data }) => {
  const postData = data?.allContentfulPost.nodes[0]
  const mediaType = postData.media?.media?.file.contentType
  const regExpYoutubeId = /youtu(?:.*\/v\/|.*v\=|\.be\/)([A-Za-z0-9_\-]{11})/
  const image = getImage(postData.media?.media)

  return(
    <Layout mailchimpMembers={data?.allMailchimpMembers.nodes[0].internal.content} imageUrl={postData?.previewImage.url}>
      <section className="post">
        <div className="post_title-wrapper">
          <Title className="post_title title" size="1">{postData?.title}</Title>
        </div>
        <div className="post_media">
          {postData.media?.media?.file && (
            <>
              {mediaType.includes("image") && (
                image
                  ? <GatsbyImage
                      image={image}
                      alt='{postData.title}'
                    />
                  : <img
                      src={postData?.media.media.file.url}
                      alt='{postData.title}'
                    />
              )}
              
              {mediaType.includes("video") &&
                <video controls className="video">
                  <source src={postData?.media.media.file.url} />
                </video>
              }
            </>
          )}

          {postData.media?.link && (
            <iframe
              className="youtube"
              src={`https://www.youtube.com/embed/${postData.media?.link.match(regExpYoutubeId)[1]}`}
              allowFullScreen="allowfullscreen"
              width="100%"
              height="100%"
            />
          )}
        </div>
        <RichText globalClass="richtext_wrapper" richText={postData?.content} />
      </section>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query ($slug: String) {
    allContentfulPost (filter: {
      slug: {
        eq: $slug
      }
    }) {
      nodes {
        title,
        slug,
        previewImage {
          url
        },
        media {
          ... on ContentfulMedia {
            id
            media {
              gatsbyImageData
              file {
                url
                contentType
              }
            }
          }
          ... on ContentfulYoutubeVideo {
            id
            link
          }
        },
        content {
          raw
          references {
            gatsbyImageData
            contentful_id
            __typename
            file {
              url
              contentType
            }
          }
        }
      }
    }
    allMailchimpMembers {
      nodes {
        internal {
          content
        }
      }
    }
  }
`
