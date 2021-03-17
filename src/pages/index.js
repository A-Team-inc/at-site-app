import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import Loader from "../Loader/Loader"
import Information from "../atomic/organisms/Information/Information"
import Technology from "../atomic/organisms/Technology/Technology"
import Contacts from "../atomic/organisms/Contacts/Contacts"
import SEO from "../atomic/organisms/SEO/SEO"
import reportWebVitals from "../reportWebVitals"
import ScrollMagic from "scrollmagic"
import { resizeWidthOnly } from "../utilities/index"

import Title from "../atomic/atoms/Title/Title"
import Text from "../atomic/atoms/Text/Text"
import HeroImage from "../assets/Hero.jpg"
import "../App.css"

export default function Home() {
  const [loaderState, setLoaderState] = useState(true)
  const [scrollMagic, setScrollMagic] = useState({
    controller: new ScrollMagic.Controller({
      globalSceneOptions: { triggerHook: "onLeave", duration: "200%" },
    }),
  })

  const { controller } = scrollMagic

  resizeWidthOnly(function () {
    window.location.reload()
  })

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

    let viewportWidth = window.innerWidth

    console.log(viewportWidth)

    if (viewportWidth >= 1025) {
      const sections = document.querySelectorAll("section")
      console.log(sections)

      for (let i = 0; i < sections.length; i++) {
        new ScrollMagic.Scene({
          triggerElement: sections[i],
        })
          .setPin(sections[i], { pushFollowers: false })
          .addTo(controller)
      }
    }
  }, [])

  return (
    <div className="A-Team">
      <SEO />
      {loaderState && <Loader />}
      <div className="content">
        <section style={{ height: "100vh" }}>
          <div className="hero-section">
            <div className="name">A-Team</div>
            <img src={HeroImage} className="hero-logo" alt="logo" />
          </div>
          <div className="middle-section">
            <Text textClassName="line-1 anim-typewriter">
              We can everything you want and do it good
            </Text>
            <Title size="1">
              We are a small but super talented company with the high level IT
              specialists.
            </Title>
          </div>
        </section>

        <Information />

        <Technology />

        <Contacts />
      </div>
    </div>
  )
}

reportWebVitals()
