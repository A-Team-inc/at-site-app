import React from "react"
import { graphql, useStaticQuery } from 'gatsby';

import SEO from "../sections/SEO/SEO"
import Header from "../sections/Header/Header"
import Footer from "../sections/Footer/Footer"

import "../../App.scss"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="content_max_width">
        <Header positionStyle="positionStyle" />
        <div className="content">
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout