import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Title from "../components/globals/Title/Title"
import Layout from "../components/layout/Layout"
import useBlogQuery from "../graphql/blog"

const Blog = ({ data }) => {
  const blogsData = useBlogQuery()
  const blogs = blogsData.contentfulBlogPage.posts
  const [list, setList] = useState([...blogs.slice(0, 4)])
  const [loadMore, setLoadMore] = useState(false)
  const [hasMore, setHasMore] = useState(blogs.length > 4)

  const handleLoadMore = () => {
    setLoadMore(true)
  }

  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < blogs.length
      const nextResults = isMore
        ? blogs.slice(currentLength, currentLength + 4)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore])

  useEffect(() => {
    const isMore = list.length < blogs.length
    setHasMore(isMore)
  }, [list])

  return (
    <Layout isShowForm={false} mailchimpMembers={data?.allMailchimpMembers.nodes[0].internal.content}>
      <section className="blog">
        <div className="subtitle-wrapper">
          <div className="subtitle_line" />
          <Title className="blog_subtitle" size={4}>{blogsData?.contentfulBlogPage.subtitle}</Title>
        </div>
        <div className="blog_title-wrapper">
          <Title className="blog_title title" size={2}>{blogsData?.contentfulBlogPage.title}</Title>
        </div>
        <div className="blog_main">
          {list.map((project, index) => {
            return(
              <Card project={project} key={index} />
            )
          })}
        </div>
        {hasMore && <button className="blog_load-more-btn" onClick={handleLoadMore} aria-label="Load more">Load More</button>}
      </section>
    </Layout>
  )
}

const Card = ({ project }) => {
  const image = getImage(project.media)

  return (
    <div className="blog_card">
      {image ? <GatsbyImage image={image} alt={project.title} /> : <img src={project.media} placeholder={project.cover?.placeholderUrl} alt="" />}
      <div className="blog_card__content">
        <p className="blog_card__subtitle">{project.subtitle}</p>
        <p className="blog_card__title title">{project.title}</p>
        <Link
          className="blog_card__link tabIndexItem"
          to={`/blog${project.slug}`}
          aria-label={`${project.title} View post`}
          tabIndex="0"
        >
          View post
          <svg className="project-card__arrow" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM16.5303 6.53033C16.8232 6.23744 16.8232 5.76256 16.5303 5.46967L11.7574 0.696698C11.4645 0.403805 10.9896 0.403805 10.6967 0.696698C10.4038 0.989592 10.4038 1.46447 10.6967 1.75736L14.9393 6L10.6967 10.2426C10.4038 10.5355 10.4038 11.0104 10.6967 11.3033C10.9896 11.5962 11.4645 11.5962 11.7574 11.3033L16.5303 6.53033ZM1 6.75L16 6.75L16 5.25L1 5.25L1 6.75Z" fill="#4B5BD7"/>
          </svg>
        </Link>
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    allMailchimpMembers {
      nodes {
        internal {
          content
        }
      }
    }
  }
`;

export default Blog