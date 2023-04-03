import React from "react"

import SEO from "../sections/SEO/SEO"
import Header from "../sections/Header/Header"
import Footer from "../sections/Footer/Footer"
import CookieBanner from "../globals/CookieBanner/CookieBanner"

import "../../App.scss"

interface LayoutProps {
  children: JSX.Element
  isShowForm: boolean
  mailchimpMembers?: string
  previewImageUrl?: string 
}

const Layout = ({ children, isShowForm, mailchimpMembers, previewImageUrl }: LayoutProps) => {
  return (
    <>
      <SEO previewImageUrl={previewImageUrl} />
      <div className="content_max_width">
        <Header headerBackground="headerBackground" />
        <div className="content layout_content">
          {children}
        </div>
      </div>
      <CookieBanner />
      <Footer isShowForm={isShowForm} mailchimpMembers={mailchimpMembers} />
    </>
  )
}

export default Layout