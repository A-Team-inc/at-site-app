import React from "react"
import SEO from "../components/sections/SEO/SEO"
import Header from "../components/sections/Header/Header"
import Footer from "../components/sections/Footer/Footer"
import Welcome from "../components/sections/Welcome/Welcome"
import Technology from "../components/sections/Technology/Technology"
import OurWorks from "../components/sections/OurWorks/OurWorks"
import Services from "../components/sections/Services/Services"
import Offers from "../components/sections/Offers/Offers"
import Process from "../components/sections/Process/Process"
import reportWebVitals from "../reportWebVitals"

import "../App.scss"

export default function Home() {

  return (
    <>
      <SEO />
      <div>
        <Header />
        <div className="content">
          <Welcome />
          <Technology />
          <Services />
          <Offers />
          <Process />
          <OurWorks />
        </div>
      </div>
      <Footer />
    </>
  )
}

reportWebVitals()
