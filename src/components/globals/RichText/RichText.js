import React, { useState, useEffect } from "react"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const RichText = ({
  richText,
  globalClass = "",
  paragraphClassName = "",
  h1ClassName = "",
  h2ClassName = "",
  h3ClassName = "",
  h4ClassName = "",
  h5ClassName = "",
  h6ClassName = "",
  linkClassName = "",
  listClassName = "",
  imageClassName = ""
}) => {
  const [isMobileBreakpoint, setIsMobileBreakpoint] = useState()

  useEffect(() => {
    window
      .matchMedia("(max-width: 576px)")
      .addEventListener('change', e => setIsMobileBreakpoint(e.matches));
  }, []);

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b style={{ fontWeight: "bold" }}>{text}</b>,
      [MARKS.ITALIC]: (text) => <i style={{ fontStyle: "italic" }}>{text}</i>,
      [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
      [MARKS.CODE]: (text) => (
        <code>
          {text}
        </code>
      ),
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noreferrer"
          className={linkClassName}
        >
          {children}
        </a>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className={h1ClassName}>
          {children}
        </h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => {
        return (
          <h2 className={h2ClassName}>
            {children}
          </h2>
        )
      },
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className={h3ClassName}>
          {children}
        </h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className={h4ClassName}>
          {children}
        </h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 className={h5ClassName}>
          {children}
        </h5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h6 className={h6ClassName}>
          {children}
        </h6>
      ),
  
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className={listClassName}>{children}</ol>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className={listClassName}>{children}</ul>
      ),
  
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li>{children}</li>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (node.content[0].value === '') {
          return <br />
        } else {
          return <p className={paragraphClassName}>{children}</p>
        }
      },
      [BLOCKS.QUOTE]: (children) => (
        <blockquote>
          <>"{children.content[0].content[0].value}"</>
        </blockquote>
      ),
      [BLOCKS.HR]: () => <hr/>,
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        const imageStyles = {
          'left': {
            marginRight: '20px'
          },
          'right': {
            marginLeft: '20px'
          }
        }
        const imageAlignment = node.data.target.alignment
        const imageStyle = imageStyles[imageAlignment]
        const mediaType = node.data.target?.image?.file?.contentType

        return (
          <>
            <div style={{
              float: imageAlignment,
              width: isMobileBreakpoint ? node.data.target.mobileWidth : node.data.target.desktopWidth,
              ...imageStyle
            }} >
              {mediaType.includes('svg')
                ? <img className={imageClassName} src={node.data.target?.image?.file.url} alt={node.data.target?.image.title} />
                : <GatsbyImage
                  image={getImage(node.data.target?.image?.gatsbyImageData)}
                  alt={node.data.target?.image.title}
                  className={imageClassName}
              />}
            </div>
          </>
        )
      }
    },
  }

  if(!richText) {
    return null
  }

  return (
    <>
      <div className={globalClass}>{renderRichText(richText, options)}</div>
      <div className="clear"></div>
    </>
    
  )
}

export default RichText