import React from "react"

import SEO from "../sections/SEO/SEO"
import Header from "../sections/Header/Header"
import Footer from "../sections/Footer/Footer"

import "../../App.scss"

const Layout = ({ children, isShowForm }) => {
  return (
    <>
      <SEO />
      <div className="content_max_width">
        <Header positionStyle="positionStyle" />
        <div className="content">
          {children}
        </div>
      </div>
      <Footer isShowForm={isShowForm} />
    </>
  )
}

export default Layout