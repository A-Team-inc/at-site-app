import React from "react"
import SEO from "../components/sections/SEO/SEO"
import Header from "../components/sections/Header/Header"
import Footer from "../components/sections/Footer/Footer"
import Welcome from "../components/sections/Welcome/Welcome"
import OurWorks from "../components/sections/OurWorks/OurWorks"
import reportWebVitals from "../reportWebVitals"

import "../App.css"

export default function Home() {

  return (
    <>
      <SEO />
      <div className="content_max_width">
        <Header />
        <div className="content">
          <Welcome />
          <OurWorks />
        </div>
      </div>
      <Footer />
    </>
  )
}

reportWebVitals()
