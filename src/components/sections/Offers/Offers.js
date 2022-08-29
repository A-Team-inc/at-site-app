import React, {useEffect, useRef} from "react"
import "./Offers.scss"
import BackgroundLogo from '../../../components/globals/BackgroundLogo/BackgroundLogo'

const Offers = () => {
  const cards = [
    {
      image: require('../../../assets/cards/mobile-app.png').default,
      text: "Mobile App",
      backgroundColor: "#E7F0E1",
      logoColor: "#84AE67",
      rotateAngle: 0,
      backgroundLogoPosition: 'bottom'
    },
    {
      image: require('../../../assets/cards/web-app.png').default,
      text: "Web App",
      backgroundColor: "#FAF4E8",
      logoColor: "#CCA350",
      rotateAngle: 75,
      backgroundLogoPosition: 'bottom'
    },
    {
      image: require('../../../assets/cards/website-development.png').default,
      text: "Website development",
      backgroundColor: "#D3D8FE",
      logoColor: "#6C78D2",
      rotateAngle: 0,
      backgroundLogoPosition: 'top'
    },
  ]

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
      <div className="offers__container">
        <div className="offers__text-block">
          <div className="offers__subtitle-block">
            <div className="offers__line" />
            <h6 className="offers__subtitle">what we offer</h6>
          </div>
          <h2 className="offers__title">Unlock Revenue Growth for Your Business</h2>
        </div>
        <div className="offers__cards" ref={scrollContainer}>
          {cards.map((card, index) =>
            <Card
              image={card.image}
              text={card.text}
              backgroundColor={card.backgroundColor}
              logoColor={card.logoColor}
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
  <div className="offers__card" style={{ backgroundColor }}>
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
