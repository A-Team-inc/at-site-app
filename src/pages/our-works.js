import React from "react"

import SEO from "../components/sections/SEO/SEO"
import Header from "../components/sections/Header/Header"
import Footer from "../components/sections/Footer/Footer"
import Project from "../components/sections/Project/Project"
import reportWebVitals from "../reportWebVitals"

import "../App.scss"

export default function OurWorks() {

  return (
    <>
      <SEO />
      <div className="content_max_width">
        <Header positionStyle="positionStyle" />
        <div className="content">
          <Project />
        </div>
      </div>
      <Footer />
    </>
  )
}

reportWebVitals()