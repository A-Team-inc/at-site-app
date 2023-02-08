import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../../components/layout/Layout"
import Title from "../../components/globals/Title/Title"
import RichText from "../../components/globals/RichText/RichText"
import "./Post.scss"

const Post = ({ data }) => {
  const postData = data?.allContentfulPost.nodes[0]

  return(
    <Layout mailchimpMembers={data?.allMailchimpMembers.nodes[0].internal.content}>
      <section className="post">
        <div className="post_title-wrapper">
          <Title className="post_title title" size="1">{ postData?.title }</Title>
        </div>
        <div className="post_media">
          <img src={postData?.media.file.url} alt="" />
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
        media {
          file {
            url
          }
        },
        content {
          raw
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
