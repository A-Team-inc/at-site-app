import React, { useState } from "react"
import { Scrollbar, Mousewheel, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import Title from "../../globals/Title/Title"
import phoneSlide from "../../../assets/phone_slide.png"
import blackPhoneSlide from "../../../assets/black_phone_slide.png"
import "./Welcome.scss"
import "swiper/scss"
import "swiper/scss/scrollbar"
import "swiper/scss/autoplay"

const Welcome = () => {
  const [slides, setSlides] = useState([phoneSlide, blackPhoneSlide, phoneSlide, blackPhoneSlide])

  return(
    <section className="welcome">
      <div className="welcome_subscribe-wrapper">
        <Title className={"welcome_title"} size={1}>Are you looking for <br /> super talented software <br /> development <br /> specialists?</Title>
        <p className="welcome_subtitle">Our experts will help your business to grow.<br /> Let's do it together!</p>
        <form className="welcome_form" action="" method="get">
          <input className="welcome_form-email" type="email" placeholder="Enter your email" />
          <input className="welcome_form-submit" type="submit" value="Let’s talk" />
        </form>
      </div>
      <div className="welcome_slider">
        <Swiper
          modules={[Scrollbar, Mousewheel, Autoplay]}
          mousewheel={{ mousewheelControl: true }}
          scrollbar={{ draggable: true }}
          speed={500}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
        >
          {slides.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <p className="welcome_slider-subtitle">We OFFER</p>
                <Title className={"welcome_slider-title"} size={3}>Mobile Solutions</Title>
                <img className="slider-image" src={item} alt="" />
              </SwiperSlide>
            )
          })}
        </Swiper>
          <span slot="container-end" className="slot-first">01</span>
          <span slot="container-end" className="slot-second">{slides.length + 1 >= 10 ? slides.length : `0${slides.length}`}</span>
      </div>
    </section>
  )
}

export default Welcome