import React, {useEffect, useRef} from "react"

import useOfferQuery from "../../../graphql/offer"
import "./Offers.scss"
import BackgroundLogo from '../../../components/globals/BackgroundLogo/BackgroundLogo'

const Offers = () => {
  const data = useOfferQuery()

  const scrollContainer = useRef()
  useEffect(() => {
    scrollContainer.current.addEventListener("wheel", event => {
      if (window.innerWidth < 1024) {
        event.preventDefault();
        scrollContainer.current.scrollLeft += event.deltaY;
      }
    })
  }, [])

  return (
    <section className="offers">
      <div className="offers__container content_max_width">
        <div className="offers__text-block">
          <div className="offers__subtitle-block">
            <div className="offers__line" />
            <h6 className="offers__subtitle" tabindex="0">{ data?.contentfulOffer.subtitle }</h6>
          </div>
          <h2 className="offers__title" tabindex="0">{ data?.contentfulOffer.title }</h2>
        </div>
        <div className="offers__cards" ref={scrollContainer}>
          {data?.contentfulOffer.images.map((card, index) =>
            <Card
              image={card.img?.url}
              text={card.text}
              backgroundColor={`#${card.backgroundColor}`}
              logoColor={`#${card.logoColor}`}
              rotateAngle={card.rotateAngle}
              backgroundLogoPosition={card.backgroundLogoPosition}
              topOffset={card.topOffset}
              key={index}
            />
          )}
        </div>
      </div>
    </section>
  )
}

const Card = ({ image, text, backgroundColor, logoColor, rotateAngle, backgroundLogoPosition, topOffset }) => (
  <div className="offers__card" style={{ backgroundColor }} tabindex="0">
    <img src={image} alt="" style={{marginTop: topOffset}} />
    <div
      className={`offers__background-logo offers__background-logo--${backgroundLogoPosition}`}
      style={{transform: `rotate(${rotateAngle}deg)`}}
    >
      <BackgroundLogo color={logoColor} width="428" height="376" />
    </div>
    <h6 className="offers__card-title">{text}</h6>
  </div >
)

export default Offers
