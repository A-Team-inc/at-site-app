import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"

import useSEOQuery from "../../../graphql/seo"

const SEO = ({ defaultTitle, defaultDescription, defaultImage, defaultSiteUrl, article }) => {
  const { pathname } = useLocation()
  const site = useSEOQuery()

  const {
    title,
    description,
    image,
    siteUrl
  } = site.contentfulSiteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description.description || defaultDescription,
    image: `${siteUrl}${image.url || defaultImage}`,
    url: `${siteUrl}${pathname}` || defaultSiteUrl,
  }

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {/* {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )} */}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  defaultTitle: PropTypes.string,
  defaultDescription: PropTypes.string,
  defaultImage: PropTypes.string,
  defaultSiteUrl: PropTypes.string,
  article: PropTypes.bool
}

SEO.defaultProps = {
  defaultTitle: null,
  defaultDescription: null,
  defaultImage: null,
  defaultSiteUrl: null,
  article: false
}
