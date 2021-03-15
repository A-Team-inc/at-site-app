import React, { useEffect, useState } from "react"
import Loader from "../Loader/Loader"
import Technology from "../atomic/organisms/Technology/Technology"
import Contacts from "../atomic/organisms/Contacts/Contacts"
import reportWebVitals from "../reportWebVitals"

import Title from "../atomic/atoms/Title/Title"
import Text from "../atomic/atoms/Text/Text"
import HeroImage from "../assets/Hero.jpg"
import "../App.css"

export default function Home() {
  const [loaderState, setLoaderState] = useState(true)

  useEffect(() => {
    window.onload = () => {
      window.scrollTo(0, 0)
    }
    window.onload()

    setTimeout(() => {
      let bodyElement = document.querySelector("body")
      bodyElement.style.overflow = "auto"
      setLoaderState(false)
    }, 5000)
  }, [])

  return (
    <div className="A-Team">
      {loaderState && <Loader />}
      <div className="content">
        <div className="hero-section">
          <div className="name">A-Team</div>
          <img src={HeroImage} className="hero-logo" alt="logo" />
        </div>
        <div className="middle-section">
          <Text textClassName="line-1 anim-typewriter">
            We can everything you want and do it good
          </Text>
          <Title size="2">
            We are a small but super talented company with the high level IT
            specialists.
          </Title>
        </div>
        <Technology />
        <Contacts />
      </div>
    </div>
  )
}

reportWebVitals()
