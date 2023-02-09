import React from "react"

import SEO from "../sections/SEO/SEO"
import Header from "../sections/Header/Header"
import Footer from "../sections/Footer/Footer"

import "../../App.scss"

const Layout = ({ children, isShowForm, mailchimpMembers }) => {
  return (
    <>
      <SEO />
      <div className="content_max_width">
        <Header headerBackground="headerBackground" />
        <div className="content layout_content">
          {children}
        </div>
      </div>
      <Footer isShowForm={isShowForm} mailchimpMembers={mailchimpMembers} />
    </>
  )
}

export default Layout