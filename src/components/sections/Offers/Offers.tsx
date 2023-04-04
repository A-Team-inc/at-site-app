import React, {useEffect, useRef} from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import useOfferQuery from "../../../graphql/offer"
import "./Offers.scss"
import BackgroundLogo from '../../globals/BackgroundLogo/BackgroundLogo'

import { IOffersData } from './OffersTypes'

const Offers = () => {
  const data: IOffersData = useOfferQuery()
  const scrollContainer = useRef<HTMLDivElement>(null);

  const handleMouseWheelScroll = (event) => {
    if (window.innerWidth < 1024) {
      event.preventDefault();
      scrollContainer.current.scrollLeft += event.deltaY;
    }
  } 

  useEffect(() => {
    scrollContainer.current?.addEventListener("wheel", event => handleMouseWheelScroll(event))

    return () => {
      scrollContainer.current?.removeEventListener("wheel", handleMouseWheelScroll)
    };
  }, [])

  return (
    <section className="offers">
      <div className="offers__container content_max_width">
        <div className="offers__text-block">
          <div className="offers__subtitle-block">
            <div className="offers__line subtitle_line" />
            <p className="offers__subtitle">{ data?.contentfulOffer.subtitle }</p>
          </div>
          <h2 className="offers__title title">{ data?.contentfulOffer.title }</h2>
        </div>
        <div className="offers__cards" ref={scrollContainer}>
          {data?.contentfulOffer.images.map((card, index) =>
            <Card
              image={card?.img}
              text={card?.text}
              backgroundColor={`#${card?.backgroundColor}`}
              logoColor={`#${card?.logoColor}`}
              rotateAngle={card?.rotateAngle}
              backgroundLogoPosition={card?.backgroundLogoPosition}
              topOffset={card?.topOffset}
              key={index}
            />
          )}
        </div>
      </div>
    </section>
  )
}

const Card = ({ image, text, backgroundColor, logoColor, rotateAngle, backgroundLogoPosition, topOffset }) => {
  const offerImage = getImage(image)
  
  return (
    <div className="offers__card" style={{ backgroundColor }}>
      {/* <div style={{ marginTop: topOffset + "px" }}> */}
        {offerImage ? <GatsbyImage image={offerImage} alt="" /> : <img src={image?.url} placeholder={image?.placeholderUrl} alt="" />}
      {/* </div> */}
      <div
        className={`offers__background-logo offers__background-logo--${backgroundLogoPosition}`}
        style={{transform: `rotate(${rotateAngle}deg)`}}
      >
        <BackgroundLogo color={logoColor} width="428" height="376" />
      </div>
      <p className="offers__card-title title">{text}</p>
    </div >
  )
}

export default Offers
