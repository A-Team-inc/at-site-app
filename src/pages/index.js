import React from "react"
import SEO from "../components/sections/SEO/SEO"
import Header from "../components/sections/Header/Header"
import Footer from "../components/sections/Footer/Footer"
// import Technology from "../components/sections/Technology/Technology"
import reportWebVitals from "../reportWebVitals"

import "../App.css"

export default function Home() {

  return (
    <div className="A-Team">
      <SEO />
      <div className="content_max_width">
        <Header />
        <div className="content">
          {/* <Technology /> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

reportWebVitals()
