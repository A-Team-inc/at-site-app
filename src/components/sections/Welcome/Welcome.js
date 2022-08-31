import React, { useState } from "react"
import { Scrollbar, Mousewheel, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import useWelcomeQuery from "../../../graphql/welcome"
import Title from "../../globals/Title/Title"
import "./Welcome.scss"
import "swiper/scss"
import "swiper/scss/scrollbar"
import "swiper/scss/autoplay"

const Welcome = () => {
  const data = useWelcomeQuery()

  const addLineBreaks = (text) => text.split('\n').reduce((children, textSegment, index) => {
    return [...children, index > 0 && <br key={index} />, textSegment];
  }, []);

  return(
    <section className="welcome content_max_width">
      <div className="welcome_subscribe-wrapper">
        <Title className={"welcome_title"} size={1}>{data?.contentfulWelcome.title}</Title>
        <p className="welcome_subtitle">{addLineBreaks(data?.contentfulWelcome.description.description)}</p>
        <form className="welcome_form" action={data?.contentfulWelcome.formAction} method="get">
          <input className="welcome_form-email" type="email" placeholder="Enter your email" />
          <input className="welcome_form-submit" type="submit" value={data?.contentfulWelcome.formButtonValue} />
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
          {data?.contentfulWelcome.slider.slides.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <p className="welcome_slider-subtitle">{item.subtitle}</p>
                <Title className={"welcome_slider-title"} size={3}>{item.title}</Title>
                <img className="slider-image" src={item.slide.url} alt="" />
              </SwiperSlide>
            )
          })}
        </Swiper>
          <span slot="container-end" className="slot-first">01</span>
          <span slot="container-end" className="slot-second">{data?.contentfulWelcome.slider.slides.length + 1 >= 10 ? data?.contentfulWelcome.slider.slides.length : `0${data?.contentfulWelcome.slider.slides.length}`}</span>
      </div>
    </section>
  )
}

export default Welcome