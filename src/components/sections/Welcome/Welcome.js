import React from "react"
import { Scrollbar, Mousewheel, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import useWelcomeQuery from "../../../graphql/welcome"
import { addLineBreaks } from "../../../utilities/index"
import Title from "../../globals/Title/Title"
import "./Welcome.scss"
import "swiper/scss"
import "swiper/scss/scrollbar"
import "swiper/scss/autoplay"

const Welcome = () => {
  const data = useWelcomeQuery()

  return(
    <section className="welcome content_max_width" id="about-us">
      <div className="welcome_subscribe-wrapper">
        <h1 className="welcome_title title">
          {data?.contentfulWelcome.title}
        </h1>
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
                <Title className={"welcome_slider-title title"} size={3}>{item.title}</Title>
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